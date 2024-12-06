import { ErrorInfo } from 'react';

export interface ErrorLocation {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
  functionName: string | null;
}

export interface ParsedError {
  message: string;
  stack?: string;
  locations: ErrorLocation[];
  firstLocation: ErrorLocation | null;
}

export interface ErrorDetails extends ParsedError {
  componentStack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: ErrorDetails;
}