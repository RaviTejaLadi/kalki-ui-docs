import { Banner, Box, Button, Heading, Paragraph, BannerSubTitle, BannerTitle } from 'kalki-ui';
import { docsData } from '@/types/docsData';
import { Info } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Banner',
    desc: 'This example demonstrates the basic usage of the Banner component.',
    code: `
import { Banner, BannerTitle, BannerSubTitle } from "kalki-ui";

export default function BasicBanner() {
  return (
    <Banner>
      <BannerTitle>Welcome</BannerTitle>
      <BannerSubTitle>This is a basic banner</BannerSubTitle>
    </Banner>
  );
}
`,
    snippet: (
      <Banner>
        <BannerTitle>Welcome</BannerTitle>
        <BannerSubTitle>This is a basic banner</BannerSubTitle>
      </Banner>
    ),
  },
  {
    title: 'Large Banner',
    desc: 'This example demonstrates the usage of the large size for the Banner component.',
    code: `
import { Banner, BannerTitle, BannerSubTitle } from "kalki-ui";

export default function LargeBanner() {
  return (
    <Banner variant="success" size="lg">
      <BannerTitle>Welcome</BannerTitle>
      <BannerSubTitle>This is a large banner</BannerSubTitle>
    </Banner>
  );
}
`,
    snippet: (
      <Banner variant="success" size="lg">
        <BannerTitle>Welcome</BannerTitle>
        <BannerSubTitle>This is a large banner</BannerSubTitle>
      </Banner>
    ),
  },
  {
    title: 'Banner with Custom Styles',
    desc: 'This example demonstrates how to apply custom styles to the Banner component using the style prop.',
    code: `
import { Banner, BannerTitle, BannerSubTitle } from "kalki-ui";

export default function CustomStyledBanner() {
  return (
    <Banner style={{ backgroundColor: "#f0f0f0", color: "#333" }}>
      <BannerTitle>Welcome</BannerTitle>
      <BannerSubTitle>This banner has custom styles</BannerSubTitle>
    </Banner>
  );
}
`,
    snippet: (
      <Banner style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
        <BannerTitle>Welcome</BannerTitle>
        <BannerSubTitle>This banner has custom styles</BannerSubTitle>
      </Banner>
    ),
  },
  {
    title: 'Banner with All Available Variants',
    desc: 'This example shows all available variants of the Banner component.',
    code: `
import { Banner, Box, Heading, Paragraph, BannerTitle, BannerSubTitle } from "kalki-ui";

export default function BannerVariants() {
  return (
    <Box padding="10px" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {(
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "help",
          "light",
          "dark",
        ] as const
      ).map((item) => (
        <Banner key={item} variant={item} size="sm">
          <BannerTitle>
            <Heading as="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
          </BannerTitle>
          <BannerSubTitle>
            <Paragraph>This is a {item} variant banner</Paragraph>
          </BannerSubTitle>
        </Banner>
      ))}
    </Box>
  );
}
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
            <BannerTitle>
              <Heading as="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
            </BannerTitle>
            <BannerSubTitle>
              <Paragraph>This is a {item} variant banner</Paragraph>
            </BannerSubTitle>
          </Banner>
        ))}
      </Box>
    ),
  },
  {
    title: 'Banner with Background',
    desc: 'This example shows Banner component with a background image.',
    code: `
import { Banner, Box, Button, BannerTitle, BannerSubTitle } from "kalki-ui";
import { Info } from "lucide-react";

export default function BannerWithBackground() {
  return (
    <Box padding="10px" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
        <BannerTitle className="flex items-center">
          Welcome to React World <Info className="inline-block ml-2 w-5 h-5" />
        </BannerTitle>
        <BannerSubTitle>
          React makes it painless to create interactive UIs. Design simple views for each state in your application,
          and React will efficiently update and render the right components when your data changes.
        </BannerSubTitle>
      </Banner>
    </Box>
  );
}
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
          <BannerTitle className="flex items-center">
            Welcome to React World <Info className="inline-block ml-2 w-5 h-5" />
          </BannerTitle>
          <BannerSubTitle>
            React makes it painless to create interactive UIs. Design simple views for each state in your application,
            and React will efficiently update and render the right components when your data changes.
          </BannerSubTitle>
        </Banner>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['children', 'ReactNode', 'null', 'The content of the banner, typically BannerTitle and BannerSubTitle components'],
  [
    'variant',
    `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'help' | 'light' | 'dark'`,
    'primary',
    'Specifies the visual style of the banner.',
  ],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`, 'md', 'Defines size of the banner.'],
  ['controls', 'ReactNode', 'null', 'Additional controls to be displayed in the banner, such as buttons or icons'],
  ['className', 'string', '-', 'Additional CSS class for custom styling'],
  ['style', 'CSSProperties', '-', 'Inline styles to be applied to the banner container'],
  ['background', 'string', '-', 'Background color or image URL'],
];

export const bannerTitleRows = [
  ['children', 'ReactNode', 'null', 'The content of the banner title'],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`, 'md', 'Size of the title text. Matches Banner size.'],
  ['className', 'string', '-', 'Additional CSS class for custom styling'],
  ['style', 'CSSProperties', '-', 'Inline styles to be applied to the title element'],
];

export const bannerSubTitleRows = [
  ['children', 'ReactNode', 'null', 'The content of the banner subtitle'],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`, 'md', 'Size of the subtitle text. Matches Banner size.'],
  ['className', 'string', '-', 'Additional CSS class for custom styling'],
  ['style', 'CSSProperties', '-', 'Inline styles to be applied to the subtitle element'],
];
