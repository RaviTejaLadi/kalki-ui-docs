import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Button, { buttonVariants } from '../Button';
import { Heading, Paragraph } from '../Typography';
import { CheckIcon } from 'lucide-react';

// Define banner variants using CVA
const bannerVariants = cva('relative overflow-hidden rounded-2xl p-8 text-white', {
  variants: {
    theme: {
      primary: 'bg-blue-900',
      secondary: 'bg-gray-900',
      help: 'bg-purple-900',
      success: 'bg-green-900',
    },
    size: {
      sm: 'p-6',
      md: 'p-8',
      lg: 'p-12',
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'md',
  },
});

interface Feature {
  icon?: React.ReactNode;
  text: string;
}

interface BannerProps extends VariantProps<typeof bannerVariants> {
  logo?: React.ReactNode;
  title: string;
  subtitle?: string;
  featureHeading?: string;
  features: Feature[];
  ctaText: string;
  ctaVariant?: VariantProps<typeof buttonVariants>['variant'];
  description?: string;
  onCtaClick?: () => void;
  backgroundPattern?: React.ReactNode;
}

// Background pattern component
const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-10">
    <svg
      className="absolute right-0 top-0 transform translate-x-32 -translate-y-16"
      width="600"
      height="400"
      viewBox="0 0 600 400"
      fill="none"
    >
      <path
        d="M100 200C100 310.457 189.543 400 300 400C410.457 400 500 310.457 500 200C500 89.543 410.457 0 300 0C189.543 0 100 89.543 100 200Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M150 200C150 282.843 217.157 350 300 350C382.843 350 450 282.843 450 200C450 117.157 382.843 50 300 50C217.157 50 150 117.157 150 200Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M200 200C200 255.228 244.772 300 300 300C355.228 300 400 255.228 400 200C400 144.772 355.228 100 300 100C244.772 100 200 144.772 200 200Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
);

export default function PromotionalBanner({
  logo,
  title,
  subtitle,
  featureHeading,
  features,
  ctaText,
  ctaVariant = 'primary',
  description,
  onCtaClick,
  backgroundPattern,
  theme,
  size,
}: BannerProps) {
  return (
    <div className={bannerVariants({ theme, size })}>
      {/* Background Pattern */}
      {backgroundPattern || <BackgroundPattern />}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            {logo}
            <div>
              <Heading as="h1" className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {title}
              </Heading>
              {subtitle && <p className="text-lg text-muted-foreground mt-1">{subtitle}</p>}
            </div>
          </div>
          {/* CTA Button */}
          <Button onClick={onCtaClick} className={buttonVariants({ variant: ctaVariant })}>
            {ctaText}
          </Button>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div>
            <Heading as="h2" className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {featureHeading}
            </Heading>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {feature.icon || <CheckIcon className="w-5 h-5 font-semibold text-green-400" />}
                  <span className="text-lg text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            {description && <Paragraph className="text-sm text-muted-foreground mt-4">{description}</Paragraph>}
          </div>
        </div>
      </div>
    </div>
  );
}

// function ExampleUsage() {
//   const features = [
//     { text: 'Site Builder full access' },
//     { text: 'Relume Figma Kit' },
//     { text: 'Unlock all React Library' },
//   ];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Original Design Recreation */}
//         <PromotionalBanner
//           logo={<ReactIcon />}
//           title="React Library"
//           subtitle="Built with Tailwind"
//           featureHeading="Unlock 1k+ React components plus more with Relume"
//           features={features}
//           ctaText="Try it free for 7 days"
//           description="Our plans cost less than 1%* of your next project and can save you half the time to deliver it."
//           onCtaClick={() => alert('CTA clicked!')}
//           theme="secondary"
//         />

//         {/* Variant Examples */}
//         <PromotionalBanner
//           theme="primary"
//           size="lg"
//           logo={<ReactIcon />}
//           title="Premium UI Kit"
//           featureHeading="Unlock 1k+ React components plus more with Relume"
//           features={[
//             { text: '100+ Premium Components' },
//             { text: 'Dark & Light Themes' },
//             { text: 'TypeScript Support' },
//           ]}
//           ctaText="Get Started"
//           ctaVariant="outline"
//           description="Professional-grade components for your next project."
//           onCtaClick={() => alert('Blue variant clicked!')}
//         />

//         <PromotionalBanner
//           theme="help"
//           size="sm"
//           title="Design System"
//           featureHeading="Unlock 1k+ React components plus more with Relume"
//           features={[{ text: 'Consistent Design Tokens' }, { text: 'Component Documentation' }]}
//           ctaText="Learn More"
//           onCtaClick={() => alert('Purple variant clicked!')}
//         />
//       </div>
//     </div>
//   );
// }