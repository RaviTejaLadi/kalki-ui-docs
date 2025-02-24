import Banner from '@/components/common/Banner';
import Box from '@/components/common/Box';
import { Heading, Paragraph } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Banner',
    desc: 'This example demonstrates the basic usage of the refactored Banner component.',
    code: `
import { Banner } from "react-ui-essentials";

const App = () => (
  <Banner>
    <Banner.Title>Welcome</Banner.Title>
    <Banner.SubTitle>This is a basic banner</Banner.SubTitle>
  </Banner>
);
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
import { Banner } from "react-ui-essentials";

const App = () => (
  <Banner size="lg">
    <Banner.Title>Welcome</Banner.Title>
    <Banner.SubTitle>This is a large banner</Banner.SubTitle>
  </Banner>
);
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
import { Banner } from "react-ui-essentials";

const App = () => (
  <Banner style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
    <Banner.Title>Welcome</Banner.Title>
    <Banner.SubTitle>This banner has custom styles</Banner.SubTitle>
  </Banner>
);
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
import { Banner, Box, Heading, Paragraph } from "react-ui-essentials";

const App = () => (
  <Box padding="10px" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    {["primary", "secondary", "success", "danger", "warning", "info", "light"].map((item) => (
      <Banner key={item} variant={item} size="sm">
        <Banner.Title>
          <Heading type="h5" color={item === "light" ? "black" : "#fff"} fontWeight="600">
            {item.charAt(0).toUpperCase() + item.slice(1)} Banner
          </Heading>
        </Banner.Title>
        <Banner.SubTitle>
          <Paragraph fontWeight="400" color={item === "light" ? "black" : "#fff"} fontSize="15px">
            This is a {item} variant banner
          </Paragraph>
        </Banner.SubTitle>
      </Banner>
    ))}
  </Box>
);
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
              <Heading size="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
            </Banner.Title>
            <Banner.SubTitle>
              <Paragraph>This is a {item} variant banner</Paragraph>
            </Banner.SubTitle>
          </Banner>
        ))}
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['children', 'node', 'null', 'The content of the banner, typically Banner.Title and Banner.SubTitle components'],
  ['size', 'string', 'md', 'Defines size of the banner. [sm, md, lg]'],
  [
    'variant',
    'string',
    'primary',
    'Specifies the visual style of the banner. [primary, secondary, success, danger, warning, info, light]',
  ],
  ['controls', 'node', 'null', 'Additional controls to be displayed in the banner, such as buttons or icons'],
  ['className', 'string', 'null', 'Additional CSS class for custom styling'],
  ['style', 'object', 'null', 'Inline styles to be applied to the banner container'],
];
