import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import placeholder from '../../../assets/placeholder.svg';

interface HeroSectionFourProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
    };
    secondary?: {
      text: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const HeroSectionFour = ({
  badge = '✨ Your Website Builder',
  heading = 'Blocks Built With Kalki & Tailwind',
  description = 'Finely crafted components built with React, Tailwind and Kalki UI. Developers can copy and paste these blocks directly into their project.',
  buttons = {
    primary: {
      text: 'Discover all components',
    },
    secondary: {
      text: 'View on GitHub',
    },
  },
  image = {
    src: placeholder,
    alt: 'Hero section demo image showing interface components',
  },
}: HeroSectionFourProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-4xl font-bold text-pretty text-foreground lg:text-6xl">{heading}</h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">{description}</p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && <Button className="w-full sm:w-auto">{buttons.primary.text}</Button>}
              {buttons.secondary && (
                <Button variant="outline" className="w-full sm:w-auto">
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </Button>
              )}
            </div>
          </div>
          <img src={image.src} alt={image.alt} className="max-h-96 w-full rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFour;
