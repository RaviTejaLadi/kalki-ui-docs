import { ErrorInfo } from 'react';
import { ErrorDetails, ParsedError } from './types';

interface LoggedErrorRecord {
  name: string;
  message: string;
  stack?: string;
  componentStack?: string;
  locations?: ParsedError['locations'];
  firstLocation?: ParsedError['firstLocation'];
  timestamp: string;
  url: string;
  userAgent: string;
  viewport: {
    width: number;
    height: number;
  };
}

export class ErrorLogger {
  private static instance: ErrorLogger;
  private readonly maxStoredErrors = 10;
  private readonly storageKey = 'app_error_log';

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  logError(error: Error, errorInfo?: ErrorInfo, details?: ErrorDetails): void {
    const errorDetails = this.formatError(error, errorInfo, details);
    console.error('Application Error:', errorDetails);
    this.storeError(errorDetails);
  }

  private formatError(error: Error, errorInfo?: ErrorInfo, details?: ErrorDetails): LoggedErrorRecord {
    const parsedName = details?.name || error.name || 'Error';
    const parsedMessage = details?.message || error.message || 'Unknown error';
    const parsedStack = details?.stack || error.stack;

    return {
      name: parsedName,
      message: parsedMessage,
      stack: parsedStack,
      componentStack: errorInfo?.componentStack || details?.componentStack,
      locations: details?.locations,
      firstLocation: details?.firstLocation,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  }

  private storeError(errorDetails: LoggedErrorRecord): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      const errors = (stored ? JSON.parse(stored) : []) as LoggedErrorRecord[];

      errors.unshift(errorDetails);

      // Keep only the most recent errors
      while (errors.length > this.maxStoredErrors) {
        errors.pop();
      }

      localStorage.setItem(this.storageKey, JSON.stringify(errors));
    } catch (e) {
      console.warn('Failed to store error details:', e);
    }
  }

  getStoredErrors(): LoggedErrorRecord[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return (stored ? JSON.parse(stored) : []) as LoggedErrorRecord[];
    } catch {
      return [];
    }
  }

  clearStoredErrors(): void {
    localStorage.removeItem(this.storageKey);
  }
}
