import Box from '@/components/common/Box';
import { Heading } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: "Demonstrates the Heading component's versatility in creating different levels of headings from h1 to h6. Each heading size is showcased to illustrate the hierarchy and default styling applied to different heading levels.",
    code: `
      <Box padding="10px">
        <Heading>H1 Heading</Heading>
      </Box>
      `,
    snippet: (
      <Box padding="10px">
        <Heading>H1 Heading</Heading>
      </Box>
    ),
  },
  {
    title: 'Styling Options',
    desc: 'Illustrates various text decoration and styling options available for the Heading component. These options include underline, overline, dashed underline, italics, bold (strong), strikethrough, highlighting (marked), size adjustment, and text deletion/insertion effects.',
    code: `
      <Box padding="10px">
        <Heading as="h3" underline>
          Underlined Heading
        </Heading>
        <Heading as="h3" overline>
          Overline Heading
        </Heading>
        <Heading as="h3" dashed>
          Dashed Heading
        </Heading>
        <Heading as="h3" italic>
          Italic Heading
        </Heading>
        <Heading as="h3" strong>
          Strong Heading
        </Heading>
        <Heading as="h3" strikethrough>
          Strikethrough Heading
        </Heading>
        <Heading as="h3" marked>
          Marked Heading
        </Heading>
        <Heading as="h3" smaller>
          Smaller Heading
        </Heading>
        <Heading as="h3" deleted>
          Deleted Heading
        </Heading>
        <Heading as="h3" inserted>
          Inserted Heading
        </Heading>
      </Box>
`,
    snippet: (
      <Box padding="10px">
        <Heading as="h3" underline>
          Underlined Heading
        </Heading>
        <Heading as="h3" overline>
          Overline Heading
        </Heading>
        <Heading as="h3" dashed>
          Dashed Heading
        </Heading>
        <Heading as="h3" italic>
          Italic Heading
        </Heading>
        <Heading as="h3" strong>
          Strong Heading
        </Heading>
        <Heading as="h3" strikethrough>
          Strikethrough Heading
        </Heading>
        <Heading as="h3" marked>
          Marked Heading
        </Heading>
        <Heading as="h3" smaller>
          Smaller Heading
        </Heading>
        <Heading as="h3" deleted>
          Deleted Heading
        </Heading>
        <Heading as="h3" inserted>
          Inserted Heading
        </Heading>
      </Box>
    ),
  },
  {
    title: 'Custom Styling',
    desc: 'Demonstrates the flexibility of the Heading component in accepting custom styling properties. This example shows how to directly apply custom font size, color, and font weight to create a unique heading style.',
    code: `
<Heading className="text-[1.5em] text-[#007bff] ">
    Custom Styled Heading
</Heading>
`,
    snippet: (
      <Box padding="10px">
        <Heading className="text-[1.5em] text-[#007bff] ">Custom Styled Heading</Heading>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['as', 'string', 'h6', "Sets the HTML heading tag. Options: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'."],
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
