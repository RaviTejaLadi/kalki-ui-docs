// export class ErrorLogger {
//     private static instance: ErrorLogger;
//     private readonly maxStoredErrors = 10;
//     private readonly storageKey = 'app_error_log';
  
//     private constructor() {
//       // Private constructor for singleton pattern
//     }
  
//     static getInstance(): ErrorLogger {
//       if (!ErrorLogger.instance) {
//         ErrorLogger.instance = new ErrorLogger();
//       }
//       return ErrorLogger.instance;
//     }
  
//     logError(error: unknown): void {
//       const errorDetails = this.formatError(error);
//       console.error('Application Error:', errorDetails);
//       this.storeError(errorDetails);
//     }
  
//     private formatError(error: unknown): Record<string, any> {
//       const errorObj = error instanceof Error ? error : new Error(String(error));
      
//       return {
//         message: errorObj.message,
//         stack: errorObj.stack,
//         timestamp: new Date().toISOString(),
//         url: window.location.href,
//         userAgent: navigator.userAgent,
//         viewport: {
//           width: window.innerWidth,
//           height: window.innerHeight
//         },
//         // Add any relevant application state here
//         // e.g., currentUser, currentRoute, etc.
//       };
//     }
  
//     private storeError(errorDetails: Record<string, any>): void {
//       try {
//         const stored = localStorage.getItem(this.storageKey);
//         const errors = stored ? JSON.parse(stored) : [];
        
//         errors.unshift(errorDetails);
        
//         // Keep only the most recent errors
//         while (errors.length > this.maxStoredErrors) {
//           errors.pop();
//         }
        
//         localStorage.setItem(this.storageKey, JSON.stringify(errors));
//       } catch (e) {
//         console.warn('Failed to store error details:', e);
//       }
//     }
  
//     getStoredErrors(): Record<string, any>[] {
//       try {
//         const stored = localStorage.getItem(this.storageKey);
//         return stored ? JSON.parse(stored) : [];
//       } catch {
//         return [];
//       }
//     }
  
//     clearStoredErrors(): void {
//       localStorage.removeItem(this.storageKey);
//     }
//   }

export class ErrorLogger {
    private static instance: ErrorLogger;
    private readonly maxStoredErrors = 10;
    private readonly storageKey = 'app_error_log';
  
    private constructor() {
      // Private constructor for singleton pattern
    }
  
    static getInstance(): ErrorLogger {
      if (!ErrorLogger.instance) {
        ErrorLogger.instance = new ErrorLogger();
      }
      return ErrorLogger.instance;
    }
  
    logError(error: unknown): void {
      const errorDetails = this.formatError(error);
      console.error('Application Error:', errorDetails);
      this.storeError(errorDetails);
    }
  
    private formatError(error: unknown): Record<string, any> {
      const errorObj = error instanceof Error ? error : new Error(String(error));
      
      return {
        message: errorObj.message,
        stack: errorObj.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        // Add any relevant application state here
        // e.g., currentUser, currentRoute, etc.
      };
    }
  
    private storeError(errorDetails: Record<string, any>): void {
      try {
        const stored = localStorage.getItem(this.storageKey);
        const errors = stored ? JSON.parse(stored) : [];
        
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
  
    getStoredErrors(): Record<string, any>[] {
      try {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
  
    clearStoredErrors(): void {
      localStorage.removeItem(this.storageKey);
    }
  }