import React, { ErrorInfo } from 'react';

/**
 * Represents the location of an error in the code.
 *
 * @interface ErrorLocation
 * @property {string} fileName - The name of the file where the error occurred.
 * @property {number} lineNumber - The line number in the file where the error occurred.
 * @property {number} columnNumber - The column number in the line where the error occurred.
 * @property {string | null} functionName - The name of the function where the error occurred, or null if not applicable.
 */
interface ErrorLocation {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
  functionName: string | null;
}

/**
 * Represents a parsed error with detailed information.
 *
 * @interface ParsedError
 * @property {string} message - The error message.
 * @property {string} [stack] - Optional stack trace of the error.
 * @property {ErrorLocation[]} locations - Array of error locations.
 * @property {ErrorLocation | null} firstLocation - The first error location or null if not available.
 */
interface ParsedError {
  message: string;
  stack?: string;
  locations: ErrorLocation[];
  firstLocation: ErrorLocation | null;
}

/**
 * Interface representing detailed information about an error.
 *
 * @extends ParsedError
 *
 * @property {string} [componentStack] - Optional stack trace of the component where the error occurred.
 * @property {number} timestamp - The timestamp when the error occurred.
 * @property {string} url - The URL where the error occurred.
 * @property {string} userAgent - The user agent string of the browser where the error occurred.
 */
interface ErrorDetails extends ParsedError {
  componentStack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}

/**
 * Props for the ErrorBoundary component.
 *
 * @interface ErrorBoundaryProps
 * @property {React.ReactNode} children - The child components that the ErrorBoundary will wrap.
 * @property {(error: Error, errorInfo: ErrorInfo) => void} [onError] - Optional callback function that is called when an error is caught. Receives the error and additional error information as arguments.
 * @property {React.ReactNode} [fallback] - Optional fallback UI to display when an error is caught.
 */
interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  fallback?: React.ReactNode;
}

/**
 * Represents the state of an error boundary component.
 *
 * @property {boolean} hasError - Indicates whether an error has been encountered.
 * @property {ErrorDetails} [error] - Optional details about the encountered error.
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error?: ErrorDetails;
}

export type { ErrorLocation, ParsedError, ErrorDetails, ErrorBoundaryProps, ErrorBoundaryState };
