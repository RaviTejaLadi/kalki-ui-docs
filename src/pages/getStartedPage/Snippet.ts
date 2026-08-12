export const npmSnippet = `
  npm install kalki-ui --save
`;

export const yarnSnippet = `
  yarn add kalki-ui --save
`;

export const pnpmSnippet = `
  pnpm add kalki-ui --save
`;

export const componentCode = `
  // Preferred (tree-shakeable deep import)
  import { Button } from 'kalki-ui/button';

  // Or from the root package
  import { Button } from "kalki-ui";
`;

export const compExampleCode = `
  import React from 'react';
  import { Button } from 'kalki-ui/button';

  const App = () => (
    <div>
      <h1>My App</h1>
      <Button size="sm" variant="primary" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="secondary" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="warning" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="danger" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="help" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="success" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="light" onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button size="sm" variant="dark" onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );

  export default App;
`;

export const setupSnippet = `
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App.tsx";
  import "kalki-ui/styles.css"; // import styles once in the main file

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
`;
