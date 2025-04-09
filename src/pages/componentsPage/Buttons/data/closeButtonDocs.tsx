import CloseButton from '@/components/common/CloseButton';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Simple CloseButton',
    desc: 'This example demonstrates the basic usage of the CloseButton component.',
    code: `
import React from 'react';
import { CloseButton } from 'kalki-ui';
  
const App = () => (
  <CloseButton onClick={() => console.log('Close button clicked')} />
);
      `,
    snippet: <CloseButton onClick={() => console.log('Close button clicked')} />,
  },
  {
    title: 'CloseButton with Different Sizes',
    desc: 'This example shows how to use different sizes of the CloseButton.',
    code: `
import React from 'react';
import { CloseButton } from 'kalki-ui';
  
const App = () => (
  <div>
    <CloseButton size="sm" onClick={() => console.log('Small button clicked')} />
    <CloseButton size="md" onClick={() => console.log('Medium button clicked')} />
    <CloseButton size="lg" onClick={() => console.log('Large button clicked')} />
  </div>
);
      `,
    snippet: (
      <div className="space-y-2">
        <CloseButton size="sm" onClick={() => console.log('Small button clicked')} />
        <CloseButton size="md" onClick={() => console.log('Medium button clicked')} />
        <CloseButton size="lg" onClick={() => console.log('Large button clicked')} />
      </div>
    ),
  },
  {
    title: 'CloseButton with Different Variants',
    desc: 'This example demonstrates how to use different variants of the CloseButton.',
    code: `
import React from 'react';
import { CloseButton } from 'kalki-ui';
  
const App = () => (
  <div>
    <CloseButton variant="light" onClick={() => console.log('Light variant clicked')} />
    <CloseButton variant="dark" onClick={() => console.log('Dark variant clicked')} />
  </div>
);
      `,
    snippet: (
      <div className="space-y-2">
        <CloseButton variant="light" onClick={() => console.log('Light variant clicked')} />
        <CloseButton variant="dark" onClick={() => console.log('Dark variant clicked')} />
      </div>
    ),
  },
  {
    title: 'Disabled CloseButton',
    desc: 'This example shows how to create a disabled CloseButton.',
    code: `
import React from 'react';
import { CloseButton } from 'kalki-ui';
  
const App = () => (
  <CloseButton disabled onClick={() => console.log('This will not be called')} />
);
      `,
    snippet: <CloseButton disabled onClick={() => console.log('This will not be called')} />,
  },
];

export const columns: string[] = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['variant', 'string', "'light'", "The visual variant of the button. Can be 'light' or 'dark'."],
  ['size', 'string', "'sm'", "The size of the button. Can be 'sm', 'md', or 'lg'."],
  ['onClick', 'function', 'undefined', 'Function to be called when the button is clicked.'],
  ['disabled', 'boolean', 'false', 'If true, the button will be disabled.'],
  ['className', 'string', "''", 'Additional CSS class names to be added to the button.'],
  ['style', 'object', '{}', 'Additional inline styles to be applied to the button.'],
];

export const componentHierarchyCode = `
  <CloseButton />
`;