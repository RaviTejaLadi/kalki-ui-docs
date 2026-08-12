import { TextCarousel, Paragraph } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['children', 'ReactNode', '-', 'Slides (typically text nodes) to cycle through.'],
  ['interval', 'number', '0', 'Autoplay interval in milliseconds. Set to 0 to disable autoplay.'],
  ['size', "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'", 'xs', 'Size of the navigation buttons.'],
  [
    'variant',
    "'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'outline'",
    '-',
    'Visual variant of the navigation buttons.',
  ],
  ['className', 'string', '-', 'Additional CSS classes for the carousel container.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Text Carousel',
    desc: 'Cycle through text slides with previous and next controls.',
    code: `
import { TextCarousel, Paragraph } from "kalki-ui";

export default function BasicTextCarousel() {
  return (
    <TextCarousel>
      <Paragraph>First announcement</Paragraph>
      <Paragraph>Second announcement</Paragraph>
      <Paragraph>Third announcement</Paragraph>
    </TextCarousel>
  );
}
`,
    snippet: (
      <TextCarousel>
        <Paragraph>First announcement</Paragraph>
        <Paragraph>Second announcement</Paragraph>
        <Paragraph>Third announcement</Paragraph>
      </TextCarousel>
    ),
  },
  {
    title: 'Autoplay Text Carousel',
    desc: 'Automatically advance slides on an interval.',
    code: `
import { TextCarousel, Paragraph } from "kalki-ui";

export default function AutoplayTextCarousel() {
  return (
    <TextCarousel interval={3000} variant="outline">
      <Paragraph>Shipping updates every Monday</Paragraph>
      <Paragraph>New components added weekly</Paragraph>
      <Paragraph>Check the changelog for details</Paragraph>
    </TextCarousel>
  );
}
`,
    snippet: (
      <TextCarousel interval={3000} variant="outline">
        <Paragraph>Shipping updates every Monday</Paragraph>
        <Paragraph>New components added weekly</Paragraph>
        <Paragraph>Check the changelog for details</Paragraph>
      </TextCarousel>
    ),
  },
];
