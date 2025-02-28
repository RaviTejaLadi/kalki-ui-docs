import Breadcrumb from '@/components/common/Breadcrumb';
import { docsData } from '@/types/docsData';
import { ArrowRight } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Breadcrumb',
    desc: 'This example demonstrates the most basic usage of the Breadcrumb component with default properties.',
    code: `
import React from 'react';
import { Breadcrumb } from 'kalki-ui';

const App = () => (
  <Breadcrumb>
    <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item to="/products">Products</Breadcrumb.Item>
    <Breadcrumb.Item active>Laptops</Breadcrumb.Item>
  </Breadcrumb>
);
      `,
    snippet: (
      <Breadcrumb>
        <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Laptops</Breadcrumb.Item>
      </Breadcrumb>
    ),
  },
  {
    title: 'Breadcrumb with Custom Separator',
    desc: 'This example shows how to use a custom separator between Breadcrumb items.',
    code: `
import React from 'react';
import { Breadcrumb } from 'kalki-ui';

const App = () => (
  <Breadcrumb separator={<ArrowRight size={12} color="#666" />}>
    <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item to="/blog">Blog</Breadcrumb.Item>
    <Breadcrumb.Item active>How to Use BreadCrumbs</Breadcrumb.Item>
  </Breadcrumb>
);
      `,
    snippet: (
      <Breadcrumb separator={<ArrowRight className="size-3 mx-1 text-[var(--icon-color)]" />}>
        <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="/blog">Blog</Breadcrumb.Item>
        <Breadcrumb.Item active>How to Use BreadCrumbs</Breadcrumb.Item>
      </Breadcrumb>
    ),
  },
  {
    title: 'Styled Breadcrumb',
    desc: 'This example demonstrates how to apply custom styles to the Breadcrumb component.',
    code: `
import React from 'react';
import { Breadcrumb } from 'kalki-ui';

const App = () => (
      <Breadcrumb >
        <Breadcrumb.Item to="/" className="text-red-800">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item to="/settings" className="text-pink-800">Settings</Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
);
      `,
    snippet: (
      <Breadcrumb>
        <Breadcrumb.Item to="/" className="text-red-800">
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item to="/settings" className="text-pink-800">
          Settings
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['children', 'node', 'Required', 'The content of the Breadcrumb, typically BreadcrumbItem components.'],
  ['fontSize', 'string', '"12px"', 'The font size of the breadcrumb items.'],
  ['fontWeight', 'string', '"500"', 'The font weight of the breadcrumb items.'],
  ['separator', 'node', 'ArrowRight icon', 'The separator between breadcrumb items.'],
  [
    'variant',
    'string',
    '"default"',
    "The visual variant of the breadcrumb. Options: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'help', 'light', 'dark'.",
  ],
  ['color', 'string', 'undefined', 'The text color of the breadcrumb items.'],
  ['margin', 'string', 'undefined', 'The margin around the breadcrumb component.'],
];
