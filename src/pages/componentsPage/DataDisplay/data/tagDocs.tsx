import Box from '@/components/common/Box';
import Tag from '@/components/common/Tag';
import { docsData } from '@/types/docsData';
import { GlassWaterIcon } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Tag',
    desc: 'A simple tag with text content.',
    code: `
    <Tag>Basic Tag</Tag>
      `,
    snippet: <Tag>Basic Tag</Tag>,
  },
  {
    title: 'Tag with Custom Variant and Size',
    desc: 'A tag with a custom variant and size.',
    code: `
      <Tag variant="success" size="lg">
        Success
      </Tag>
      `,
    snippet: (
      <Tag variant="success" size="lg">
        Success
      </Tag>
    ),
  },
  {
    title: 'Tag with Icon',
    desc: 'A tag with an icon and text.',
    code: `
      <Tag>
        <Tag.Icon>
          <GlassWaterIcon className="size-3" />
        </Tag.Icon>
        <Tag.Text>Favorite</Tag.Text>
      </Tag>
      `,
    snippet: (
      <Tag>
        <Tag.Icon>
          <GlassWaterIcon className="size-3" />
        </Tag.Icon>
        <Tag.Text>Favorite</Tag.Text>
      </Tag>
    ),
  },

  {
    title: 'Multiple Tags',
    desc: 'A group of tags with different variants.',
    code: `
      <Box style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="secondary">Secondary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="danger">Danger</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="info">Info</Tag>
      </Box>
      `,
    snippet: (
      <Box style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="secondary">Secondary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="danger">Danger</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="info">Info</Tag>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const tagProps = [
  ['children', 'node', '-', 'The content of the tag. Required prop.'],
  [
    'variant',
    'string',
    'primary',
    "Specifies the visual variant of the tag. Possible values are 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', and 'dark'.",
  ],
  ['size', 'string', 'sm', "Specifies the size of the tag. Possible values are 'sm', 'md', 'lg', 'xl', and 'xxl'."],
];

export const tagIconProps = [['children', 'node', '-', 'The icon to be displayed in the tag. Required prop.']];

export const tagTextProps = [['children', 'node', '-', 'The text content of the tag. Required prop.']];

export const tagCloseButtonProps = [
  ['onClick', 'function', '-', 'The function to be called when the close button is clicked. Required prop.'],
];

export const additionalNotes = [
  'The Tag component is composed of several sub-components: Tag.Icon, Tag.Text, and Tag.CloseButton.',
  'You can use these sub-components to create more complex tag structures.',
  'The Tag component forwards refs, allowing you to access the underlying DOM element if needed.',
  'The CloseButton sub-component renders a times symbol (×) by default, but you can override this by passing children to it.',
  'The Tag component applies CSS classes based on the variant and size props, allowing for easy styling customization.',
  'When using the CloseButton, remember to handle the visibility state of the tag in your parent component.',
];
