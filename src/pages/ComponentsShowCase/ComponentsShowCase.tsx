import React from 'react';
import { PreviewCard } from './PreviewCard';
import { ButtonPreviews } from './previews/ButtonPreviews';
import { CardPreviews } from './previews/CardPreviews';
import { AlertPreviews } from './previews/AlertPreviews';
import AccordionPreview from './previews/AccordionPreview';

interface Component {
  name: string;
  description: string;
  preview: React.ReactNode;
}

const components: Component[] = [
  {
    name: 'Accordion',
    description: 'A vertically stacked set of interactive headings that each reveal an associated section of content.',
    preview: AccordionPreview.basic,
  },
  {
    name: 'Buttons',
    description: 'Beautiful, responsive buttons with hover effects and icon support.',
    preview: ButtonPreviews.basic,
  },
  {
    name: 'Cards',
    description: 'Versatile card components for displaying content and information.',
    preview: CardPreviews.basic,
  },
  {
    name: 'Alerts',
    description: 'Informative alert components for user notifications and feedback.',
    preview: AlertPreviews.basic,
  },
];
const ComponentsShowCase: React.FC = () => {
  return (
    <div className="py-32 bg-background dark:bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Component Showcase</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore our growing collection of 50+ beautiful components ✨
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <PreviewCard key={index} {...component} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowCase;
