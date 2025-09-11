import Banner from '@/components/common/Banner';
import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import { Heading, Paragraph } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';
import { Info } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Banner',
    desc: 'This example demonstrates the basic usage of the refactored Banner component.',
    code: `
      <Banner>
        <Banner.Title>Welcome</Banner.Title>
        <Banner.SubTitle>This is a basic banner</Banner.SubTitle>
      </Banner>
    `,
    snippet: (
      <Banner>
        <Banner.Title>Welcome</Banner.Title>
        <Banner.SubTitle>This is a basic banner</Banner.SubTitle>
      </Banner>
    ),
  },
  {
    title: 'Large Banner',
    desc: 'This example demonstrates the usage of the large size for the Banner component.',
    code: `
      <Banner variant="success" size="lg">
        <Banner.Title>Welcome</Banner.Title>
        <Banner.SubTitle>This is a large banner</Banner.SubTitle>
      </Banner>
    `,
    snippet: (
      <Banner variant="success" size="lg">
        <Banner.Title>Welcome</Banner.Title>
        <Banner.SubTitle>This is a large banner</Banner.SubTitle>
      </Banner>
    ),
  },
  {
    title: 'Banner with Custom Styles',
    desc: 'This example demonstrates how to apply custom styles to the Banner component using the style prop.',
    code: `
      <Banner style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
        <Banner.Title>Welcome</Banner.Title>
        <Banner.SubTitle>This banner has custom styles</Banner.SubTitle>
      </Banner>
    `,
    snippet: (
      <Banner style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
        <Banner.Title>Welcome</Banner.Title>
        <Banner.SubTitle>This banner has custom styles</Banner.SubTitle>
      </Banner>
    ),
  },
  {
    title: 'Banner with All Available Variants',
    desc: 'This example shows all available variants of the Banner component.',
    code: `
      <Box padding="10px" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'help' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <Banner key={item} variant={item} size="sm">
            <Banner.Title>
              <Heading as="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
            </Banner.Title>
            <Banner.SubTitle>
              <Paragraph>This is a {item} variant banner</Paragraph>
            </Banner.SubTitle>
          </Banner>
        ))}
      </Box>
    `,
    snippet: (
      <Box padding="10px" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'help' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <Banner key={item} variant={item} size="sm">
            <Banner.Title>
              <Heading as="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
            </Banner.Title>
            <Banner.SubTitle>
              <Paragraph>This is a {item} variant banner</Paragraph>
            </Banner.SubTitle>
          </Banner>
        ))}
      </Box>
    ),
  },
  {
    title: 'Banner with Background',
    desc: 'This example shows Banner component with background Image.',
    code: `
      <Box padding="10px" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Banner
          variant="dark"
          size="lg"
          background="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80"
          controls={
            <>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
              <Button variant="danger" size="sm">
                Dismiss
              </Button>
            </>
          }
          className="text-white"
        >
          <Banner.Title className="flex items-center">
            Welcome to React World <Info className="inline-block ml-2 w-5 h-5" />
          </Banner.Title>
          <Banner.SubTitle>
            React makes it painless to create interactive UIs. Design simple views for each state in your application,
            and React will efficiently update and render the right components when your data changes.
          </Banner.SubTitle>
        </Banner>
      </Box>
    `,
    snippet: (
      <Box padding="10px" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Banner
          variant="dark"
          size="lg"
          background="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80"
          controls={
            <>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
              <Button variant="danger" size="sm">
                Dismiss
              </Button>
            </>
          }
          className="text-white"
        >
          <Banner.Title className="flex items-center">
            Welcome to React World <Info className="inline-block ml-2 w-5 h-5" />
          </Banner.Title>
          <Banner.SubTitle>
            React makes it painless to create interactive UIs. Design simple views for each state in your application,
            and React will efficiently update and render the right components when your data changes.
          </Banner.SubTitle>
        </Banner>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['children', 'ReactNode', 'null', 'The content of the banner, typically Banner.Title and Banner.SubTitle components'],
  [
    'variant',
    'string',
    'primary',
    'Specifies the visual style of the banner. One of: [primary, secondary, success, danger, warning, info, help, light, dark]',
  ],
  ['size', 'string', 'md', 'Defines size of the banner. One of: [sm, md, lg, xl, 2xl, 3xl]'],
  ['controls', 'ReactNode', 'null', 'Additional controls to be displayed in the banner, such as buttons or icons'],
  ['className', 'string', 'null', 'Additional CSS class for custom styling'],
  ['style', 'CSSProperties', 'null', 'Inline styles to be applied to the banner container'],
  ['background', 'string', 'null', 'Background color or image (supports CSS colors or image URLs)'],
];

export const bannerTitleRows = [
  ['children', 'ReactNode', 'null', 'The content of the banner title'],
  ['size', 'string', 'md', 'Size of the title text. Matches Banner size. One of: [sm, md, lg, xl, 2xl, 3xl]'],
  ['className', 'string', 'null', 'Additional CSS class for custom styling'],
  ['style', 'CSSProperties', 'null', 'Inline styles to be applied to the title element'],
];

export const bannerSubTitleRows = [
  ['children', 'ReactNode', 'null', 'The content of the banner subtitle'],
  ['size', 'string', 'md', 'Size of the subtitle text. Matches Banner size. One of: [sm, md, lg, xl, 2xl, 3xl]'],
  ['className', 'string', 'null', 'Additional CSS class for custom styling'],
  ['style', 'CSSProperties', 'null', 'Inline styles to be applied to the subtitle element'],
];
