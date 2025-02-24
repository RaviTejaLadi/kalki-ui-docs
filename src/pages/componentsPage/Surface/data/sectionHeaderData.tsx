import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic SectionHeader',
    desc: 'A simple section header with title and subtitle',
    code: `
<SectionHeader>
  <SectionHeader.Title>Main Title</SectionHeader.Title>
  <SectionHeader.SubTitle>This is a subtitle</SectionHeader.SubTitle>
</SectionHeader>
      `,
    snippet: (
      <SectionHeader>
        <SectionHeader.Title>Main Title</SectionHeader.Title>
        <SectionHeader.SubTitle>This is a subtitle</SectionHeader.SubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Right-aligned SectionHeader',
    desc: 'A section header with right alignment',
    code: `
<SectionHeader align="right">
  <SectionHeader.Title>Right Aligned</SectionHeader.Title>
  <SectionHeader.SubTitle>This header is aligned to the right</SectionHeader.SubTitle>
</SectionHeader>
      `,
    snippet: (
      <SectionHeader align="right">
        <SectionHeader.Title>Right Aligned</SectionHeader.Title>
        <SectionHeader.SubTitle>This header is aligned to the right</SectionHeader.SubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Centered SectionHeader',
    desc: 'A section header with center alignment',
    code: `
<SectionHeader align="center">
  <SectionHeader.Title>Centered Header</SectionHeader.Title>
  <SectionHeader.SubTitle>This header is centered</SectionHeader.SubTitle>
</SectionHeader>
      `,
    snippet: (
      <SectionHeader align="center">
        <SectionHeader.Title>Centered Header</SectionHeader.Title>
        <SectionHeader.SubTitle>This header is centered</SectionHeader.SubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Large SectionHeader',
    desc: 'A section header with large size',
    code: `
<SectionHeader size="lg">
  <SectionHeader.Title>Large Header</SectionHeader.Title>
  <SectionHeader.SubTitle>This is a large-sized header</SectionHeader.SubTitle>
</SectionHeader>
      `,
    snippet: (
      <SectionHeader size="lg">
        <SectionHeader.Title>Large Header</SectionHeader.Title>
        <SectionHeader.SubTitle>This is a large-sized header</SectionHeader.SubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'Custom Padding and Margin',
    desc: 'A section header with custom padding and margin',
    code: `
<SectionHeader className="p-2 m-2">
  <SectionHeader.Title>Custom Spacing</SectionHeader.Title>
  <SectionHeader.SubTitle>This header has custom padding and margin</SectionHeader.SubTitle>
</SectionHeader>
      `,
    snippet: (
      <SectionHeader className="p-2 m-2">
        <SectionHeader.Title>Custom Spacing</SectionHeader.Title>
        <SectionHeader.SubTitle>This header has custom padding and margin</SectionHeader.SubTitle>
      </SectionHeader>
    ),
  },
  {
    title: 'SectionHeader with Custom Styles',
    desc: 'A section header with custom inline styles',
    code: `
<SectionHeader style={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
  <SectionHeader.Title style={{ color: '#333' }}>Custom Styled Header</SectionHeader.Title>
  <SectionHeader.SubTitle style={{ fontStyle: 'italic' }}>With custom styles applied</SectionHeader.SubTitle>
</SectionHeader>
      `,
    snippet: (
      <SectionHeader style={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <SectionHeader.Title style={{ color: '#333' }}>Custom Styled Header</SectionHeader.Title>
        <SectionHeader.SubTitle style={{ fontStyle: 'italic' }}>With custom styles applied</SectionHeader.SubTitle>
      </SectionHeader>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const sectionHeaderProps = [
  [
    'children',
    'node',
    'Required',
    'The content of the section header, typically including Title and SubTitle components.',
  ],
  [
    'controls',
    'node',
    '-',
    'Optional controls to be displayed in the header, such as buttons or other interactive elements.',
  ],
  ['padding', 'string', '20px', 'Specifies the padding inside the section header.'],
  ['margin', 'string', '0', 'Specifies the margin around the section header.'],
  [
    'placement',
    'string',
    'left',
    "Determines the alignment of the header content. Possible values are 'left', 'right', and 'center'.",
  ],
  [
    'size',
    'string',
    'md',
    "Sets the size of the section header. Possible values are 'xs', 'sm', 'md', 'lg', and 'xl'.",
  ],
];

export const sectionHeaderTitleProps = [['children', 'node', 'Required', 'The content of the title.']];

export const sectionHeaderSubTitleProps = [['children', 'node', 'Required', 'The content of the subtitle.']];
