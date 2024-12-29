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
