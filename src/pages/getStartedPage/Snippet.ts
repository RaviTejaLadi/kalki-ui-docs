export const npmSnippet = `
  npm install kalki-ui
`;

export const yarnSnippet = `
  yarn add kalki-ui
`;

export const pnpmSnippet = `
  pnpm add kalki-ui
`;

export const setupSnippet = `
  import "kalki-ui/styles.css";
`;

export const componentCode = `
  // Preferred (tree-shakeable deep import)
  import { Button } from "kalki-ui/button";

  // Or from the root package
  import { Button } from "kalki-ui";
`;

export const compExampleCode = `
  import { Button } from "kalki-ui/button";
  import "kalki-ui/styles.css";

  const App = () => (
    <Button size="sm" variant="primary" onClick={() => alert("Button clicked!")}>
      Click Me
    </Button>
  );

  export default App;
`;
