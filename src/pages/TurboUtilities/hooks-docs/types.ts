import React from 'react';

type ListItem = {
  item: string;
  options: string[];
};

type Section = {
  title: string;
  list: ListItem[];
};

interface HookDocs {
  title: string;
  description: string;
  example: React.ReactNode;
  snippet?: string;
  feature: Section;
  implementationDetails: Section;
  useCases: Section;
  bestPractices: Section;
}

export type { HookDocs };
