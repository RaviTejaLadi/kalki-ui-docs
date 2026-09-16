import { Banner, BannerSubTitle, BannerTitle, Box, Button, Heading, Paragraph } from 'kalki-ui';
import { docsData } from '@/types/docsData';
import { Info } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Banner',
    desc: 'The Banner component supports title/subtitle composition with theme-aware defaults.',
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
    desc: 'Use size presets to create more prominent banners.',
    code: `
import { Banner, BannerTitle, BannerSubTitle } from "kalki-ui";

export default function LargeBanner() {
  return (
    <Banner size="lg">
      <BannerTitle>Welcome</BannerTitle>
      <BannerSubTitle>This is a large banner</BannerSubTitle>
    </Banner>
  );
}
`,
    snippet: (
      <Banner size="lg">
        <BannerTitle>Welcome</BannerTitle>
        <BannerSubTitle>This is a large banner</BannerSubTitle>
      </Banner>
    ),
  },
  {
    title: 'Banner with Custom Styles',
    desc: 'Override banner visuals with the style prop when needed.',
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
    title: 'Repeated Banners',
    desc: 'Render multiple banners using mapped content.',
    code: `
import { Banner, Box, Heading, Paragraph, BannerTitle, BannerSubTitle } from "kalki-ui";

export default function BannerVariants() {
  return (
    <Box padding="10px" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {(["Release", "Announcement"] as const).map((item) => (
        <Banner key={item} size="sm">
          <BannerTitle>
            <Heading as="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
          </BannerTitle>
          <BannerSubTitle>
            <Paragraph>This is a reusable banner block.</Paragraph>
          </BannerSubTitle>
        </Banner>
      ))}
    </Box>
  );
}
`,
    snippet: (
      <Box padding="10px" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {(['Release', 'Announcement'] as const).map((item) => (
          <Banner key={item} size="sm">
            <BannerTitle>
              <Heading as="h5">{item.charAt(0).toUpperCase() + item.slice(1)} Banner</Heading>
            </BannerTitle>
            <BannerSubTitle>
              <Paragraph>This is a reusable banner block.</Paragraph>
            </BannerSubTitle>
          </Banner>
        ))}
      </Box>
    ),
  },
  {
    title: 'Banner with Background',
    desc: 'Use a background image and controls for hero-like banner layouts.',
    code: `
import { Banner, Box, Button, BannerTitle, BannerSubTitle } from "kalki-ui";
import { Info } from "lucide-react";

export default function BannerWithBackground() {
  return (
    <Box padding="10px" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Banner
        size="lg"
        background="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80"
        controls={
          <>
            <Button variant="secondary" size="sm">Learn More</Button>
            <Button variant="danger" size="sm">Dismiss</Button>
          </>
        }
      >
        <BannerTitle className="flex items-center">
          Welcome to React World <Info className="ml-2 inline-block h-5 w-5" />
        </BannerTitle>
        <BannerSubTitle>
          React makes it painless to create interactive UIs.
        </BannerSubTitle>
      </Banner>
    </Box>
  );
}
`,
    snippet: (
      <Box padding="10px" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Banner
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
        >
          <BannerTitle className="flex items-center">
            Welcome to React World <Info className="ml-2 inline-block h-5 w-5" />
          </BannerTitle>
          <BannerSubTitle>React makes it painless to create interactive UIs.</BannerSubTitle>
        </Banner>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['children', 'ReactNode', 'null', 'Banner content, typically BannerTitle and BannerSubTitle components.'],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`, 'md', 'Defines spacing and text scale.'],
  ['controls', 'ReactNode', 'null', 'Optional controls displayed at the right side.'],
  ['className', 'string', '-', 'Additional CSS class for custom styling.'],
  ['style', 'CSSProperties', '-', 'Inline styles for the banner container.'],
  ['background', 'string', '-', 'Background color or image URL.'],
];

export const bannerTitleRows = [
  ['children', 'ReactNode', 'null', 'The content of the banner title.'],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`, 'md', 'Size of the title text. Matches Banner size.'],
  ['className', 'string', '-', 'Additional CSS class for custom styling.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the title element.'],
];

export const bannerSubTitleRows = [
  ['children', 'ReactNode', 'null', 'The content of the banner subtitle.'],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`, 'md', 'Size of the subtitle text. Matches Banner size.'],
  ['className', 'string', '-', 'Additional CSS class for custom styling.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the subtitle element.'],
];
