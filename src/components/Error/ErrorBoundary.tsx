// import React, { ErrorInfo, ReactNode } from 'react';

// interface ErrorBoundaryProps {
//   children: ReactNode;
//   fallback?: ReactNode;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
//   error?: Error;
//   errorInfo?: ErrorInfo;
// }

// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: undefined,
//       errorInfo: undefined,
//     };
//   }

//   static getDerivedStateFromError(error: Error) {
//     return {
//       hasError: true,
//       error,
//     };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.error('Uncaught error:', error, errorInfo);

//     this.setState({
//       errorInfo,
//     });
//   }

//   handleRetry = () => {
//     this.setState({
//       hasError: false,
//       error: undefined,
//       errorInfo: undefined,
//     });
//   };

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div
//           className="
//           flex
//           items-center
//           justify-center
//           min-h-screen
//           p-4
//         "
//         >
//           <div className="p-6 space-y-4">
//             <div
//               className="
//                 bg-red-50
//                 border
//                 border-red-200
//                 rounded-lg
//                 p-4
//                 text-red-800
//               "
//             >
//               <p className="text-sm font-medium mb-2">An unexpected error has occurred in the application.</p>

//               {this.state.error && (
//                 <details className="text-xs">
//                   <summary
//                     className="
//                       cursor-pointer
//                       py-1
//                       text-red-600
//                       hover:text-red-800
//                       transition
//                     "
//                   >
//                     View Error Details
//                   </summary>
//                   <pre
//                     className="
//                       bg-red-100
//                       p-2
//                       rounded
//                       mt-2
//                       overflow-x-auto
//                       max-h-32
//                       text-xs
//                     "
//                   >
//                     {this.state.error.toString()}
//                   </pre>
//                   <pre
//                     className="
//                       bg-red-100
//                       p-2
//                       rounded
//                       mt-2
//                       overflow-x-auto
//                       max-h-32
//                       text-xs
//                     "
//                   >
//                     {this.state.errorInfo?.componentStack}
//                   </pre>
//                 </details>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
//   return <ErrorBoundary>{children}</ErrorBoundary>;
// }

// export default ErrorBoundary;

// import React from 'react';
// import { ErrorLogger } from './ErrorLogger';
// import { ErrorFallback } from './ErrorFallback';
// import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   private errorLogger: ErrorLogger;

//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false };
//     this.errorLogger = ErrorLogger.getInstance();
//   }

//   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
//     return {
//       hasError: true,
//       error: {
//         message: error.message,
//         stack: error.stack,
//         timestamp: Date.now(),
//         url: window.location.href,
//         userAgent: navigator.userAgent,
//       },
//     };
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//     // Log the error
//     this.errorLogger.logError({
//       ...error,
//       componentStack: errorInfo.componentStack,
//     });

//     // Update state with component stack
//     this.setState((prevState: ErrorBoundaryState): ErrorBoundaryState => ({
//         hasError: true,
//         error: prevState.error ? {
//           ...prevState.error,
//           componentStack: errorInfo.componentStack || undefined,
//         } : {
//           message: error.message,
//           stack: error.stack,
//           componentStack: errorInfo.componentStack || undefined,
//           timestamp: Date.now(),
//           url: window.location.href,
//           userAgent: navigator.userAgent,
//         },
//       }));

//     // Call optional error handler
//     this.props.onError?.(error, errorInfo);
//   }

//   handleReset = (): void => {
//     this.setState({ hasError: false, error: undefined });
//   };

//   render() {
//     if (this.state.hasError && this.state.error) {
//       if (this.props.fallback) {
//         return this.props.fallback;
//       }

//       return <ErrorFallback error={this.state.error} resetError={this.handleReset} />;
//     }

//     return this.props.children;
//   }
// }

// export function withErrorBoundary<P extends object>(
//   WrappedComponent: React.ComponentType<P>,
//   errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
// ): React.ComponentType<P> {
//   return function WithErrorBoundaryWrapper(props: P) {
//     return (
//       <ErrorBoundary {...errorBoundaryProps}>
//         <WrappedComponent {...props} />
//       </ErrorBoundary>
//     );
//   };
// }

// export default ErrorBoundary;

import React from 'react';
import { ErrorFallback } from './ErrorFallback';
import { ErrorLogger } from './ErrorLogger';
import { ErrorBoundaryProps, ErrorBoundaryState, } from './types';
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
    
    // Log the error
    this.errorLogger.logError({
      ...parsedError,
      componentStack: errorInfo.componentStack,
    });

    // Update state with component stack
    this.setState((prevState: ErrorBoundaryState): ErrorBoundaryState => ({
      hasError: true,
      error: prevState.error ? {
        ...prevState.error,
        componentStack: errorInfo.componentStack || undefined,
      } : {
        ...parsedError,
        componentStack: errorInfo.componentStack || undefined,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
    }));

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

      return (
        <ErrorFallback
          error={this.state.error}
          resetError={this.handleReset}
        />
      );
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