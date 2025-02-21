import Box from '@/components/common/Box';
import { Paragraph } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'Demonstrates the versatility of the Paragraph component in creating different types of text elements. It showcases how the component can be used to render standard paragraphs, inline spans, and block-level div elements, allowing for flexible text structuring within your layouts.',
    code: `
<Paragraph>This is a default paragraph.</Paragraph>
          `,
    snippet: (
      <Box padding="10px">
        <Paragraph>This is a default paragraph.</Paragraph>
      </Box>
    ),
  },
  {
    title: 'Styling Options',
    desc: 'Showcases various text decoration and styling options available for the Paragraph component. These options include underline, overline, dashed underline, italics, bold (strong), strikethrough, highlighting (marked), size adjustment, and text deletion/insertion effects. This flexibility allows for rich text formatting and emphasis within paragraphs, enhancing readability and visual appeal.',
    code: `
<Paragraph underline>Underlined Paragraph</Paragraph>
<Paragraph overline>Overline Paragraph</Paragraph>
<Paragraph dashed>Dashed Paragraph</Paragraph>
<Paragraph italic>Italic Paragraph</Paragraph>
<Paragraph strong>Strong Paragraph</Paragraph>
<Paragraph strikethrough>Strikethrough Paragraph</Paragraph>
<Paragraph marked>Marked Paragraph</Paragraph>
<Paragraph smaller>Smaller Paragraph</Paragraph>
<Paragraph deleted>Deleted Paragraph</Paragraph>
<Paragraph inserted>Inserted Paragraph</Paragraph>
    `,
    snippet: (
      <Box padding="10px">
        <Paragraph underline>Underlined Paragraph</Paragraph>
        <Paragraph overline>Overline Paragraph</Paragraph>
        <Paragraph dashed>Dashed Paragraph</Paragraph>
        <Paragraph italic>Italic Paragraph</Paragraph>
        <Paragraph strong>Strong Paragraph</Paragraph>
        <Paragraph strikethrough>Strikethrough Paragraph</Paragraph>
        <Paragraph marked>Marked Paragraph</Paragraph>
        <Paragraph smaller>Smaller Paragraph</Paragraph>
        <Paragraph deleted>Deleted Paragraph</Paragraph>
        <Paragraph inserted>Inserted Paragraph</Paragraph>
      </Box>
    ),
  },
  {
    title: 'Custom Styling',
    desc: 'Demonstrates the flexibility of the Paragraph component in accepting custom styling properties. This example shows how to directly apply custom font size, color, and font weight to create a unique paragraph style. This feature allows for fine-grained control over text appearance, enabling perfect alignment with specific design requirements or brand guidelines.',
    code: `
<Paragraph className="text-red font-semibold">
  Custom Styled Paragraph
</Paragraph>
    `,
    snippet: (
      <Box padding="10px">
        <Paragraph className="text-red font-semibold">Custom Styled Paragraph</Paragraph>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['size', 'string', 'default', 'Sets the text size of the paragraph. Options: default, xs, sm, md, lg, xl, 2xl, 3xl'],
  ['underline', 'boolean', 'false', 'If true, the text will be underlined.'],
  ['overline', 'boolean', 'false', 'If true, the text will be overline.'],
  ['dashed', 'boolean', 'false', 'If true, the text will have a dashed line-through.'],
  ['italic', 'boolean', 'false', 'If true, the text will be italicized.'],
  ['strong', 'boolean', 'false', 'If true, the text will be bolded.'],
  ['strikethrough', 'boolean', 'false', 'If true, the text will have a line-through.'],
  ['marked', 'boolean', 'false', 'If true, the text will have a yellow background.'],
  ['smaller', 'boolean', 'false', 'If true, the text will be smaller (0.8em).'],
  ['deleted', 'boolean', 'false', 'If true, the text will have a line-through (same as strikethrough).'],
  ['inserted', 'boolean', 'false', 'If true, the text will be underlined.'],
];
