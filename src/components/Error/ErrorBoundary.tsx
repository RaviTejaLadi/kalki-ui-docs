import React from 'react';
import { ErrorFallback } from './ErrorFallback';
import { ErrorLogger } from './ErrorLogger';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { ErrorParser } from './ErrorParser';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private errorLogger: ErrorLogger;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.errorLogger = ErrorLogger.getInstance();
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    const parsedError = ErrorParser.parseError(error);

    return {
      hasError: true,
      error: {
        ...parsedError,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const parsedError = ErrorParser.parseError(error);
    const errorDetails = {
      ...parsedError,
      componentStack: errorInfo.componentStack || undefined,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    this.errorLogger.logError(error, errorInfo, errorDetails);

    this.setState({
      hasError: true,
      error: errorDetails,
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <ErrorFallback error={this.state.error} resetError={this.handleReset} />;
    }

    return this.props.children;
  }
}

export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
): React.ComponentType<P> {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

export default ErrorBoundary;
