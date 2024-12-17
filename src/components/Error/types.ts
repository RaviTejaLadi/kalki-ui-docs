import { ErrorInfo } from 'react';

interface ErrorLocation {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
  functionName: string | null;
}

interface ParsedError {
  message: string;
  stack?: string;
  locations: ErrorLocation[];
  firstLocation: ErrorLocation | null;
}

interface ErrorDetails extends ParsedError {
  componentStack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: ErrorDetails;
}

export type { ErrorLocation, ParsedError, ErrorDetails, ErrorBoundaryProps, ErrorBoundaryState };