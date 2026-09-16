import React, { useState, useMemo } from 'react';
import { PreviewCard } from './PreviewCard';
import { ButtonPreviews } from './previews/ButtonPreviews';
import { CardPreviews } from './previews/CardPreviews';
import { AlertPreviews } from './previews/AlertPreviews';
import AccordionPreview from './previews/AccordionPreview';
import { AvatarPreviews } from './previews/AvatarPreview';
import { BadgePreviews } from './previews/BadgePreview';
import { BannerPreviews } from './previews/BannerPreview';
import { BoxPreviews } from './previews/BoxPreview';
import { BreadcrumbPreviews } from './previews/BreadcrumbPreview';
import { CloseButtonPreviews } from './previews/CloseButtonPreview';
// import { CodePreviews } from './previews/CodePreview';
import { ContentScrollablePreviews } from './previews/ContentScrollablePreview';
import { DivPreviews } from './previews/DivPreview';
import { EmptyPreviews } from './previews/EmptyPreview';
import { FigurePreviews } from './previews/FigurePreview';
import { FullScreenTogglePreviews } from './previews/FullScreenTogglePreview';
import { GalleryPreviews } from './previews/GalleryPreview';
import { HighlighterPreviews } from './previews/HighlighterPreview';
import { ImagePreviews } from './previews/ImagePreview';
import { JsonViewerPreviews } from './previews/JsonViewerPreview';
import { LinkPreviews } from './previews/LinkPreview';
import { LinkBarPreviews } from './previews/LinkBarPreview';
import { LinkButtonPreviews } from './previews/LinkButtonPreview';
import { ListsPreviews } from './previews/ListsPreview';
import { ScrollToTopPreviews } from './previews/ScrollToTopPreview';
import { SectionHeaderPreviews } from './previews/SectionHeaderPreview';
import { DropdownPreviews } from './previews/SelectPreview';
import { SkeletonPreviews } from './previews/SkeletonPreview';
import { SpinnerPreviews } from './previews/SpinnerPreview';
import { SplitterPreviews } from './previews/SplitterPreview';
import { StackPreviews } from './previews/StackPreview';
import { StepperPreviews } from './previews/StepperPreview';
import { TablePreviews } from './previews/TablePreview';
import { TabsPreviews } from './previews/TabsPreview';
import { TagPreviews } from './previews/TagPreview';
import { TogglePreviews } from './previews/TogglePreview';
import { TypographyPreviews } from './previews/TypographyPreview';

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
    name: 'Alert',
    description: 'Informative alert components for user notifications and feedback.',
    preview: AlertPreviews.basic,
  },
  {
    name: 'Avatar',
    description: 'User avatars and profile images with fallback support.',
    preview: AvatarPreviews.basic,
  },
  {
    name: 'Badge',
    description: 'Labels and badges for status, counts, or categories.',
    preview: BadgePreviews.basic,
  },
  {
    name: 'Banner',
    description: 'Banner components for announcements and promotions.',
    preview: BannerPreviews.basic,
  },
  {
    name: 'Box',
    description: 'Layout primitive for spacing and styling containers.',
    preview: BoxPreviews.basic,
  },
  {
    name: 'Breadcrumb',
    description: 'Navigation breadcrumbs showing the current path or hierarchy.',
    preview: BreadcrumbPreviews.basic,
  },
  {
    name: 'Button',
    description: 'Beautiful, responsive buttons with hover effects and icon support.',
    preview: ButtonPreviews.basic,
  },
  {
    name: 'Card',
    description: 'Versatile card components for displaying content and information.',
    preview: CardPreviews.basic,
  },
  {
    name: 'CloseButton',
    description: 'Dismiss or close button for modals and overlays.',
    preview: CloseButtonPreviews.basic,
  },
  // {
  //   name: 'Code',
  //   description: 'Inline or block code display.',
  //   preview: CodePreviews.basic,
  // },
  {
    name: 'ContentScrollable',
    description: 'Scrollable content area with custom behavior.',
    preview: ContentScrollablePreviews.basic,
  },
  {
    name: 'Div',
    description: 'Layout div with optional styling.',
    preview: DivPreviews.basic,
  },
  {
    name: 'Empty',
    description: 'Empty state placeholder when no data or content.',
    preview: EmptyPreviews.basic,
  },
  {
    name: 'Figure',
    description: 'Figure with optional caption for images or diagrams.',
    preview: FigurePreviews.basic,
  },
  {
    name: 'FullScreenToggle',
    description: 'Toggle fullscreen mode for content or media.',
    preview: FullScreenTogglePreviews.basic,
  },
  {
    name: 'Gallery',
    description: 'Image or media gallery layout.',
    preview: GalleryPreviews.basic,
  },
  {
    name: 'Highlighter',
    description: 'Text highlighting for search or emphasis.',
    preview: HighlighterPreviews.basic,
  },
  {
    name: 'Image',
    description: 'Image component with loading and error states.',
    preview: ImagePreviews.basic,
  },
  {
    name: 'JsonViewer',
    description: 'Tree or formatted view for JSON data.',
    preview: JsonViewerPreviews.basic,
  },
  {
    name: 'Link',
    description: 'Styled link or anchor component.',
    preview: LinkPreviews.basic,
  },
  {
    name: 'LinkBar',
    description: 'Horizontal bar of links or actions.',
    preview: LinkBarPreviews.basic,
  },
  {
    name: 'LinkButton',
    description: 'Button styled as a link.',
    preview: LinkButtonPreviews.basic,
  },
  {
    name: 'Lists',
    description: 'Ordered, unordered, and list groups.',
    preview: ListsPreviews.basic,
  },
  {
    name: 'ScrollToTop',
    description: 'Button to scroll back to top of page.',
    preview: ScrollToTopPreviews.basic,
  },
  {
    name: 'SectionHeader',
    description: 'Section title and optional description.',
    preview: SectionHeaderPreviews.basic,
  },
  {
    name: 'Dropdown',
    description: 'Single-select dropdown menu with keyboard navigation.',
    preview: DropdownPreviews.basic,
  },
  {
    name: 'Skeleton',
    description: 'Loading skeleton placeholders.',
    preview: SkeletonPreviews.basic,
  },
  {
    name: 'Spinner',
    description: 'Loading spinner indicator.',
    preview: SpinnerPreviews.basic,
  },
  {
    name: 'Splitter',
    description: 'Resizable split panes.',
    preview: SplitterPreviews.basic,
  },
  {
    name: 'Stack',
    description: 'Vertical or horizontal stack layout.',
    preview: StackPreviews.basic,
  },
  {
    name: 'Stepper',
    description: 'Step indicator for wizards or processes.',
    preview: StepperPreviews.basic,
  },
  {
    name: 'Table',
    description: 'Data table with rows and columns.',
    preview: TablePreviews.basic,
  },
  {
    name: 'Tabs',
    description: 'Tabbed interface for switching content.',
    preview: TabsPreviews.basic,
  },
  {
    name: 'Tag',
    description: 'Tags for labels, filters, or categories.',
    preview: TagPreviews.basic,
  },
  {
    name: 'Toggle',
    description: 'Toggle switch for on/off options.',
    preview: TogglePreviews.basic,
  },
  {
    name: 'Typography',
    description: 'Heading, paragraph, and text components.',
    preview: TypographyPreviews.basic,
  },
];
const ComponentsShowCase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) return components;
    const q = searchQuery.trim().toLowerCase();
    return components.filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <div className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Component Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the full collection of production-ready components.
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <input
            type="search"
            placeholder="Search components by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search components"
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((component) => <PreviewCard key={component.name} {...component} />)
          ) : (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No components match &quot;{searchQuery}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowCase;
