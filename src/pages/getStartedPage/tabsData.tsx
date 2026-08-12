import { Npm, Yarn, Pnpm } from './utils';
import { npmSnippet, yarnSnippet, pnpmSnippet } from './Snippet';
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
