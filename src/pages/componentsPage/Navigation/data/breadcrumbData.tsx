import { Breadcrumb, BreadcrumbItem } from 'kalki-ui';
import { docsData } from '@/types/docsData';
import { ArrowRight } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Breadcrumb',
    desc: 'This example demonstrates the most basic usage of the Breadcrumb component with default properties.',
    code: `
import { Breadcrumb, BreadcrumbItem } from "kalki-ui";

export default function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/products">Products</BreadcrumbItem>
      <BreadcrumbItem active>Laptops</BreadcrumbItem>
    </Breadcrumb>
  );
}
`,
    snippet: (
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/products">Products</BreadcrumbItem>
        <BreadcrumbItem active>Laptops</BreadcrumbItem>
      </Breadcrumb>
    ),
  },
  {
    title: 'Breadcrumb with Custom Separator',
    desc: 'This example shows how to use a custom separator between Breadcrumb items.',
    code: `
import { Breadcrumb, BreadcrumbItem } from "kalki-ui";
import { ArrowRight } from "lucide-react";

export default function Example() {
  return (
    <Breadcrumb separator={<ArrowRight className="size-3 mx-1 text-[var(--icon-color)]" />}>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/blog">Blog</BreadcrumbItem>
      <BreadcrumbItem active>How to Use Breadcrumbs</BreadcrumbItem>
    </Breadcrumb>
  );
}
`,
    snippet: (
      <Breadcrumb separator={<ArrowRight className="size-3 mx-1 text-[var(--icon-color)]" />}>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/blog">Blog</BreadcrumbItem>
        <BreadcrumbItem active>How to Use Breadcrumbs</BreadcrumbItem>
      </Breadcrumb>
    ),
  },
  {
    title: 'Styled Breadcrumb',
    desc: 'This example demonstrates how to apply custom styles to the Breadcrumb component.',
    code: `
import { Breadcrumb, BreadcrumbItem } from "kalki-ui";

export default function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbItem to="/" className="text-red-800">
        Dashboard
      </BreadcrumbItem>
      <BreadcrumbItem to="/settings" className="text-pink-800">
        Settings
      </BreadcrumbItem>
      <BreadcrumbItem active>Profile</BreadcrumbItem>
    </Breadcrumb>
  );
}
`,
    snippet: (
      <Breadcrumb>
        <BreadcrumbItem to="/" className="text-red-800">
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem to="/settings" className="text-pink-800">
          Settings
        </BreadcrumbItem>
        <BreadcrumbItem active>Profile</BreadcrumbItem>
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
