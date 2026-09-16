import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ComponentsLayout from '@/components/Layout/ComponentsLayout/ComponentsLayout';

type PageLoader = () => Promise<{ default: React.ComponentType }>;

const overviewLoader: PageLoader = () => import('./ComponentsOverviewPage');

const DynamicPage = ({ loader }: { loader: PageLoader }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    loader().then((m) => setComponent(() => m.default));
  }, [loader]);

  if (!Component) return null;
  return <Component />;
};

interface RouteConfig {
  path: string;
  loader: PageLoader;
}

const ROUTES: RouteConfig[] = [
  // Buttons
  { path: 'buttons-preview', loader: () => import('./Buttons/ButtonsPreview') },
  { path: 'button', loader: () => import('./Buttons/ButtonPage') },
  { path: 'link-button', loader: () => import('./Buttons/LinkButtonPage') },
  { path: 'link-bar', loader: () => import('./Buttons/LinkBarPage') },
  { path: 'close-button', loader: () => import('./Buttons/CloseButtonPage') },
  { path: 'toggle', loader: () => import('./Buttons/TogglePage') },

  // Data Display
  { path: 'avatar', loader: () => import('./DataDisplay/AvatarPage') },
  { path: 'badge', loader: () => import('./DataDisplay/BadgePage') },
  { path: 'list-group', loader: () => import('./DataDisplay/ListGroupPage') },
  { path: 'ordered-list', loader: () => import('./DataDisplay/OrderedListPage') },
  { path: 'un-ordered-list', loader: () => import('./DataDisplay/UnOrderedList') },
  { path: 'table', loader: () => import('./DataDisplay/TablePage') },
  { path: 'tag', loader: () => import('./DataDisplay/TagPage') },

  // Feedback
  { path: 'alert', loader: () => import('./Feedback/AlertPage') },
  { path: 'empty', loader: () => import('./Feedback/EmptyPage') },
  { path: 'modal', loader: () => import('./Feedback/ModalPage') },
  // Keep old path as redirect alias via duplicate route for bookmarks
  { path: 'model', loader: () => import('./Feedback/ModalPage') },
  { path: 'popover', loader: () => import('./Feedback/PopoverPage') },
  { path: 'skeleton', loader: () => import('./Feedback/SkeletonPage') },
  { path: 'spinner', loader: () => import('./Feedback/SpinnerPage') },

  // Surface
  { path: 'accordion', loader: () => import('./Surface/AccordionPage') },
  { path: 'banner', loader: () => import('./Surface/BannerPage') },
  { path: 'cards', loader: () => import('./Surface/CardsPage') },
  { path: 'content-scrollable', loader: () => import('./Surface/ContentScrollablePage') },
  { path: 'figure', loader: () => import('./Surface/FigurePage') },
  { path: 'gallery', loader: () => import('./Surface/GalleryPage') },
  { path: 'grid-background', loader: () => import('./Surface/GridBackgroundPage') },
  { path: 'json-viewer', loader: () => import('./Surface/JsonViewerPage') },
  { path: 'section-header', loader: () => import('./Surface/SectionHeaderPage') },
  { path: 'splitter', loader: () => import('./Surface/SplitterPage') },

  // Navigation
  { path: 'breadcrumb', loader: () => import('./Navigation/BreadcrumbPage') },
  { path: 'carousel', loader: () => import('./Navigation/CarouselPage') },
  { path: 'drawer', loader: () => import('./Navigation/DrawerPage') },
  { path: 'dropdown', loader: () => import('./Navigation/DropdownPage') },
  { path: 'link', loader: () => import('./Navigation/LinkPage') },
  { path: 'stepper', loader: () => import('./Navigation/StepperPage') },
  { path: 'tabs', loader: () => import('./Navigation/TabsPage') },
  { path: 'text-carousel', loader: () => import('./Navigation/TextCarouselPage') },

  // Typography
  { path: 'typography', loader: () => import('./Typo/TypographyPage') },
  { path: 'heading', loader: () => import('./Typo/HeadingPage') },
  { path: 'highlighter', loader: () => import('./Typo/HighlighterPage') },
  { path: 'paragraph', loader: () => import('./Typo/ParagraphPage') },
  { path: 'text-highlighter', loader: () => import('./Typo/TextHighlighterPage') },

  // Utilities
  { path: 'full-screen-toggle', loader: () => import('./Utilities/FullScreenTogglePage') },

  // Layout
  { path: 'box', loader: () => import('./LayoutPage/BoxPage') },
  { path: 'stack', loader: () => import('./LayoutPage/StackPage') },

  // Error page
  { path: 'nonIdealState', loader: () => import('./Error Page/NonIdealPage') },
];

const Components = () => {
  return (
    <Routes>
      <Route element={<ComponentsLayout />}>
        <Route index element={<DynamicPage loader={overviewLoader} />} />
        {ROUTES.map(({ path, loader }) => (
          <Route key={path} path={path} element={<DynamicPage loader={loader} />} />
        ))}
      </Route>
    </Routes>
  );
};

export default Components;
