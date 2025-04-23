import { Npm, Yarn, Pnpm } from './utils';
import { npmSnippet, yarnSnippet, pnpmSnippet, compExampleCode } from './Snippet';
import Button from '@/components/common/Button';
import Box from '@/components/common/Box';
import { Code, Terminal } from 'lucide-react';
import React from 'react';

interface usageData {
  label: string;
  content: string;
  icon: React.ReactNode;
}

export const viteUsage: usageData[] = [
  {
    label: 'npm',
    content: `
      npm create vite@latest
    `,
    icon: <Npm width="20px" height="20px" />,
  },
  {
    label: 'yarn',
    content: `
      yarn create vite@latest
    `,
    icon: <Yarn width="20px" height="20px" />,
  },
  {
    label: 'pnpm',
    content: `
      pnpm create vite@latest
    `,
    icon: <Pnpm width="20px" height="20px" />,
  },
];

export const viteTailwindUsage: usageData[] = [
  {
    label: 'npm',
    content: `
      npm install tailwindcss @tailwindcss/vite
    `,
    icon: <Npm width="20px" height="20px" />,
  },
  {
    label: 'yarn',
    content: `
      yarn add tailwindcss @tailwindcss/vite
    `,
    icon: <Yarn width="20px" height="20px" />,
  },
  {
    label: 'pnpm',
    content: `
      pnpm add tailwindcss @tailwindcss/vite
    `,
    icon: <Pnpm width="20px" height="20px" />,
  },
];

export const viteTypesUsage: usageData[] = [
  {
    label: 'npm',
    content: `
      npm install -D @types/node
    `,
    icon: <Npm width="20px" height="20px" />,
  },
  {
    label: 'yarn',
    content: `
      yarn add -D @types/node
    `,
    icon: <Yarn width="20px" height="20px" />,
  },
  {
    label: 'pnpm',
    content: `
      pnpm add -D @types/node
    `,
    icon: <Pnpm width="20px" height="20px" />,
  },
];

export const tsconfigJson = `
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
`;

export const tsconfigAppJson = `
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
`;

export const viteConfigTs = `
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

`;
export const usage: usageData[] = [
  {
    label: 'npm',
    content: npmSnippet,
    icon: <Npm width="20px" height="20px" />,
  },
  {
    label: 'yarn',
    content: yarnSnippet,
    icon: <Yarn width="20px" height="20px" />,
  },
  {
    label: 'pnpm',
    content: pnpmSnippet,
    icon: <Pnpm width="20px" height="20px" />,
  },
];

export const demoExample = [
  {
    label: 'Preview',
    content: (
      <Box padding="10px" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '10px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'warning' as const,
          'danger' as const,
          'help' as const,
          'success' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <Button size="sm" key={item} variant={item} onClick={() => alert('Button clicked!')}>
            Click Me
          </Button>
        ))}
      </Box>
    ),
    icon: <Terminal className="size-4" />,
  },
  {
    label: 'Code',
    content: compExampleCode,
    icon: <Code className="size-4" />,
  },
];
