import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Section Header',
    desc: 'A simple section header with title and subtitle',
    code: `
import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from "kalki-ui";

export default function Example() {
  return (
    <SectionHeader className="w-full max-w-[60rem]">
      <SectionHeaderTitle>Main Title</SectionHeaderTitle>
      <SectionHeaderSubTitle>This is a subtitle</SectionHeaderSubTitle>
    </SectionHeader>
  );
}
`,
    snippet: (
      <SectionHeader className="w-full max-w-[60rem]">
        <SectionHeaderTitle>Main Title</SectionHeaderTitle>
        <SectionHeaderSubTitle>This is a subtitle</SectionHeaderSubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Right-aligned Section Header',
    desc: 'A section header with right alignment',
    code: `
import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from "kalki-ui";

export default function Example() {
  return (
    <SectionHeader align="right" className="w-full max-w-[60rem]">
      <SectionHeaderTitle>Right Aligned</SectionHeaderTitle>
      <SectionHeaderSubTitle>This header is aligned to the right</SectionHeaderSubTitle>
    </SectionHeader>
  );
}
`,
    snippet: (
      <SectionHeader align="right" className="w-full max-w-[60rem]">
        <SectionHeaderTitle>Right Aligned</SectionHeaderTitle>
        <SectionHeaderSubTitle>This header is aligned to the right</SectionHeaderSubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Centered Section Header',
    desc: 'A section header with center alignment',
    code: `
import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from "kalki-ui";

export default function Example() {
  return (
    <SectionHeader align="center" className="w-full max-w-[60rem]">
      <SectionHeaderTitle>Centered Header</SectionHeaderTitle>
      <SectionHeaderSubTitle>This header is centered</SectionHeaderSubTitle>
    </SectionHeader>
  );
}
`,
    snippet: (
      <SectionHeader align="center" className="w-full max-w-[60rem]">
        <SectionHeaderTitle>Centered Header</SectionHeaderTitle>
        <SectionHeaderSubTitle>This header is centered</SectionHeaderSubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Large Section Header',
    desc: 'A section header with large size',
    code: `
import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from "kalki-ui";

export default function Example() {
  return (
    <SectionHeader size="lg" className="w-full max-w-[60rem]">
      <SectionHeaderTitle>Large Header</SectionHeaderTitle>
      <SectionHeaderSubTitle>This is a large-sized header</SectionHeaderSubTitle>
    </SectionHeader>
  );
}
`,
    snippet: (
      <SectionHeader size="lg" className="w-full max-w-[60rem]">
        <SectionHeaderTitle>Large Header</SectionHeaderTitle>
        <SectionHeaderSubTitle>This is a large-sized header</SectionHeaderSubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Custom Padding and Margin',
    desc: 'A section header with custom padding and margin',
    code: `
import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from "kalki-ui";

export default function Example() {
  return (
    <SectionHeader className="p-2 m-2 w-full max-w-[60rem]">
      <SectionHeaderTitle>Custom Spacing</SectionHeaderTitle>
      <SectionHeaderSubTitle>This header has custom padding and margin</SectionHeaderSubTitle>
    </SectionHeader>
  );
}
`,
    snippet: (
      <SectionHeader className="p-2 m-2 w-full max-w-[60rem]">
        <SectionHeaderTitle>Custom Spacing</SectionHeaderTitle>
        <SectionHeaderSubTitle>This header has custom padding and margin</SectionHeaderSubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Section Header with Custom Styles',
    desc: 'A section header with custom inline styles',
    code: `
import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from "kalki-ui";

export default function Example() {
  return (
    <SectionHeader className="w-full max-w-[60rem]" style={{ backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
      <SectionHeaderTitle style={{ color: "#333" }}>Custom Styled Header</SectionHeaderTitle>
      <SectionHeaderSubTitle style={{ fontStyle: "italic" }}>With custom styles applied</SectionHeaderSubTitle>
    </SectionHeader>
  );
}
`,
    snippet: (
      <SectionHeader className="w-full max-w-[60rem]" style={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <SectionHeaderTitle style={{ color: '#333' }}>Custom Styled Header</SectionHeaderTitle>
        <SectionHeaderSubTitle style={{ fontStyle: 'italic' }}>With custom styles applied</SectionHeaderSubTitle>
      </SectionHeader>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const sectionHeaderProps = [
  ['children', 'node', '-', 'The content of the section header, typically including Title and SubTitle components.'],
  [
    'variant',
    "'default' | 'transparent' | 'outline'",
    "'default'",
    'Visual style variant of the section header container.',
  ],
  ['size', "'sm' | 'md' | 'lg'", "'md'", 'Sets the padding and typography scale of the section header.'],
  ['align', "'left' | 'center' | 'right'", "'left'", 'Determines the alignment of the header content.'],
  ['className', 'string', '-', 'Additional CSS classes for the section header.'],
  ['style', 'CSSProperties', '-', 'Inline styles for the section header.'],
];

export const sectionHeaderTitleProps = [['children', 'node', 'Required', 'The content of the title.']];

export const sectionHeaderSubTitleProps = [['children', 'node', 'Required', 'The content of the subtitle.']];
