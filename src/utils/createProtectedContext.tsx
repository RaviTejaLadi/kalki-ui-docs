import React, { createContext, useContext, ReactNode } from 'react';

export const createProtectedContext = (errorMessage: string) => {
  const Context = createContext(false);

  const Provider: React.FC<{ children: ReactNode }> = ({ children }) => (
    <Context.Provider value={true}>{children}</Context.Provider>
  );

  const formatErrorMessage = (message: string) => {
    return message
      .replace(/</g, '\n  <')
      .replace(/>/g, '>\n')
      .replace(/(\n\s*\n)+/g, '\n');
  };

  const useProtectedContext = () => {
    const context = useContext(Context);

    if (!context) {
      const formattedErrorMessage = formatErrorMessage(errorMessage);
      const style = `
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
        border: 2px solid rgba( 255, 255, 255, 0.18 );
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      `;

      console.log(`%c${formattedErrorMessage}`, style);
      throw new Error(errorMessage);
    }
    return context;
  };

  return { Provider, useProtectedContext };
};
