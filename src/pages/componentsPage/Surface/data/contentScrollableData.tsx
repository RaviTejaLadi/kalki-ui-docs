import { ContentScrollable } from 'kalki-ui';
import { docsData } from '@/types/docsData';

const loremParagraph = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`;

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A scrollable container with a fixed height and theme-aware styling.',
    code: `
import { ContentScrollable } from "kalki-ui";

export default function Example() {
  return (
    <ContentScrollable height="200px">
      <p>This is some content that will be scrollable.</p>
      <p>If the content exceeds the height, a scrollbar appears.</p>
    </ContentScrollable>
  );
}
`,
    snippet: (
      <ContentScrollable height="200px">
        <p>This is some content that will be scrollable.</p>
        <p>If the content exceeds the height, a scrollbar appears.</p>
        <p>{loremParagraph}</p>
      </ContentScrollable>
    ),
  },
  {
    title: 'Content with Headings',
    desc: 'Use rich content (titles and paragraphs) inside the scrollable container.',
    code: `
import { ContentScrollable } from "kalki-ui";

export default function Example() {
  return (
    <ContentScrollable height="220px">
      <h3>Scrollable details</h3>
      <p>Scrollable content in a constrained surface.</p>
    </ContentScrollable>
  );
}
`,
    snippet: (
      <ContentScrollable height="220px">
        <h3>Scrollable details</h3>
        <p>Scrollable content in a constrained surface.</p>
        <p>{loremParagraph}</p>
      </ContentScrollable>
    ),
  },
  {
    title: 'Custom Width and Height',
    desc: 'Control dimensions for specific layouts.',
    code: `
import { ContentScrollable } from "kalki-ui";

export default function Example() {
  return (
    <ContentScrollable height="300px" width="50%">
      <h2>Custom Size Scrollable Content</h2>
      <p>This container has custom dimensions.</p>
    </ContentScrollable>
  );
}
`,
    snippet: (
      <ContentScrollable height="300px" width="50%">
        <h2>Custom Size Scrollable Content</h2>
        <p>This container has custom dimensions.</p>
        <p>{loremParagraph}</p>
      </ContentScrollable>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['height', 'string', 'undefined', "Height of the scrollable container (e.g., '200px', '50vh')."],
  ['width', 'string', 'undefined', "Width of the scrollable container (e.g., '300px', '100%')."],
  ['children', 'node', 'required', 'Content rendered inside the scrollable container.'],
  ['className', 'string', '-', 'Additional CSS classes for the root element.'],
  ['style', 'CSSProperties', '-', 'Inline styles for the root element.'],
  ['...rest', 'object', '{}', 'Any additional props are spread onto the root div element.'],
];
