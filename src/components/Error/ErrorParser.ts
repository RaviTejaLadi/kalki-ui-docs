import { ParsedError } from './types';

export class ErrorParser {
  // Chrome/Firefox style: at Component (/path/to/file.js:10:20)
  private static readonly CHROME_REGEX = /at\s+(.*?)\s*\(?(.*?):(\d+):(\d+)\)?/;
  // Safari style: Component@/path/to/file.js:10:20
  private static readonly SAFARI_REGEX = /(.*?)@(.*?):(\d+):(\d+)/;
  // Source map reference
  private static readonly SOURCE_MAP_REGEX = /\/\/[#@]\s*sourceMappingURL=(.+)/;

  static parseError(error: Error): ParsedError {
    const stackLines = error.stack?.split('\n') || [];
    const locations = this.parseStackTrace(stackLines);
    
    return {
      message: error.message,
      stack: error.stack,
      locations: locations,
      firstLocation: locations[0] || null
    };
  }

  private static parseStackTrace(stackLines: string[]): Array<{
    fileName: string;
    lineNumber: number;
    columnNumber: number;
    functionName: string | null;
  }> {
    return stackLines
      .slice(1) // Skip the error message line
      .map(line => {
        const trimmed = line.trim();
        
        // Try Chrome/Firefox style first
        let match = trimmed.match(this.CHROME_REGEX);
        if (match) {
          const [, fnName, fileName, lineStr, colStr] = match;
          return this.createLocationInfo(fileName, lineStr, colStr, fnName);
        }

        // Try Safari style
        match = trimmed.match(this.SAFARI_REGEX);
        if (match) {
          const [, fnName, fileName, lineStr, colStr] = match;
          return this.createLocationInfo(fileName, lineStr, colStr, fnName);
        }

        // If no matches, try to extract any file:line:column pattern
        const parts = trimmed.split(/[@:(]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart && lastPart.includes(':')) {
          const [fileName, lineStr, colStr] = lastPart.split(':');
          if (fileName && lineStr && colStr) {
            return this.createLocationInfo(
              fileName,
              lineStr,
              colStr.replace(/[)]/g, ''),
              parts[0] || null
            );
          }
        }

        return null;
      })
      .filter((location): location is NonNullable<typeof location> => {
        return location !== null && this.isProjectFile(location.fileName);
      })
      .map(location => ({
        ...location,
        // Adjust for source maps and bundler offsets
        lineNumber: this.adjustLineNumber(location.lineNumber),
        columnNumber: this.adjustColumnNumber(location.columnNumber)
      }));
  }

  private static createLocationInfo(
    fileName: string,
    lineStr: string,
    colStr: string,
    functionName: string | null
  ) {
    const cleanFileName = this.cleanFileName(fileName);
    
    // Validate the numbers
    const lineNumber = parseInt(lineStr, 10);
    const columnNumber = parseInt(colStr, 10);
    
    if (isNaN(lineNumber) || isNaN(columnNumber)) {
      return null;
    }

    return {
      fileName: cleanFileName,
      lineNumber,
      columnNumber,
      functionName: this.cleanFunctionName(functionName)
    };
  }

  private static cleanFunctionName(functionName: string | null): string | null {
    if (!functionName) return null;
    
    // Remove common wrapper patterns
    return functionName
      .replace('Object.<anonymous>', '')
      .replace(/^(async\s+)?Function\./, '')
      .replace(/\s+\{.*\}$/, '')
      .trim() || null;
  }

  private static isProjectFile(fileName: string): boolean {
    // More comprehensive filtering
    const excludePatterns = [
      'node_modules',
      'webpack',
      'internal/',
      '[native code]',
      'webpack-internal:',
      '<anonymous>',
      'eval'
    ];

    const includePattern = /src\//;

    return !excludePatterns.some(pattern => fileName.includes(pattern)) &&
           includePattern.test(fileName);
  }

  private static cleanFileName(fileName: string): string {
    return fileName
      // Remove common prefixes
      .replace(/^(webpack:|file:|http:|https:)\/\/\//, '')
      // Remove webpack internal paths
      .replace(/webpack\/bootstrap\//, '')
      // Remove everything before src/
      .replace(/^.*?(?=src\/)/, '')
      // Remove query parameters
      .replace(/\?.*$/, '')
      // Remove source map references
      .replace(this.SOURCE_MAP_REGEX, '')
      // Clean up any remaining artifacts
      .trim();
  }

  private static adjustLineNumber(line: number): number {
    // Compensate for source map and bundler offsets
    // This is a simplified version - you might need to adjust based on your build setup
    return Math.max(1, line);
  }

  private static adjustColumnNumber(column: number): number {
    // Compensate for source map and bundler offsets
    // This is a simplified version - you might need to adjust based on your build setup
    return Math.max(1, column);
  }
}