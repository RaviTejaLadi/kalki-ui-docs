import React, { createContext, useContext, Context, useCallback, PropsWithChildren } from 'react';

type ContextValue = boolean;

/**
 * Creates a protected React context with error handling and styling.
 *
 * @param errorMessage - The error message to display when context is accessed outside of provider
 * @returns An object containing:
 *  - Provider: A memoized context provider component
 *  - useProtectedContext: A hook to safely access the context value
 *
 * @throws {Error} When context is accessed outside of provider
 *
 * @example
 * ```tsx
 * const { Provider, useProtectedContext } = CreateProtectedContext(
 *   "This component must be used within Provider"
 * );
 *
 * // In parent:
 * <Provider>
 *   <Child />
 * </Provider>
 *
 * // In child:
 * const contextValue = useProtectedContext();
 * ```
 */
 const ProtectedContext = (errorMessage: string) => {
  // Explicitly type the context
  const Context: Context<ContextValue> = createContext<ContextValue>(false);
  Context.displayName = 'ProtectedContext'; // Add displayName for better debugging

  // Use proper type definition for the Provider props

  // Memoize the Provider component
  const Provider: React.FC<PropsWithChildren> = ({ children }) => <Context.Provider value>{children}</Context.Provider>;

  // Name the component for better debugging
  Provider.displayName = 'ProtectedContextProvider';

  // Move styles outside the hook to prevent recreation on each call
  const ERROR_STYLE = `
    color: rgb(63, 63, 70);
    font-style: italic;
    font-size: .8rem;
    font-weight: semi-bold;
    display: block;
    justify-content: center;
    text-align: center;
    padding: 1px;
    margin: 1rem;
    border-radius: 4px;
    line-height: 1.5;
    border: 2px solid rgba(255, 255, 255, 0.18);
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  `;

  // Memoize the format function
  const formatErrorMessage = useCallback((message: string): string => {
    return message
      .replace(/</g, '\n  <')
      .replace(/>/g, '>\n')
      .replace(/(\n\s*\n)+/g, '\n');
  }, []);

  const useProtectedContext = (): ContextValue => {
    const context = useContext(Context);

    if (!context) {
      const formattedErrorMessage = formatErrorMessage(errorMessage);
      console.log(`%c${formattedErrorMessage}`, ERROR_STYLE);
      throw new Error(errorMessage);
    }

    return context;
  };

  return {
    Provider,
    useProtectedContext,
  } as const; // Make return type readonly
};

export default ProtectedContext