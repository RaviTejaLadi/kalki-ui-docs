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
  { path: 'model', loader: () => import('./Feedback/ModelPage') },
  { path: 'popover', loader: () => import('./Feedback/PopoverPage') },
  { path: 'spinner', loader: () => import('./Feedback/SpinnerPage') },

  // Surface
  { path: 'accordion', loader: () => import('./Surface/AccordionPage') },
  { path: 'banner', loader: () => import('./Surface/BannerPage') },
  { path: 'cards', loader: () => import('./Surface/CardsPage') },
  { path: 'content-scrollable', loader: () => import('./Surface/ContentScrollablePage') },
  { path: 'figure', loader: () => import('./Surface/FigurePage') },
  { path: 'grid-background', loader: () => import('./Surface/GridBackgroundPage') },
  { path: 'json-viewer', loader: () => import('./Surface/JsonViewerPage') },
  { path: 'section-header', loader: () => import('./Surface/SectionHeaderPage') },
  { path: 'splitter', loader: () => import('./Surface/SplitterPage') },

  // Forms
  { path: 'checkbox-card', loader: () => import('./FormsPage/CheckBoxCardPage') },
  { path: 'checkbox', loader: () => import('./FormsPage/CheckboxPage') },
  { path: 'dropdown', loader: () => import('./FormsPage/DropdownPage') },
  { path: 'forms', loader: () => import('./FormsPage/FormsPage') },
  { path: 'input', loader: () => import('./FormsPage/InputPage') },
  { path: 'radio-card', loader: () => import('./FormsPage/RadioCardPage') },
  { path: 'radio', loader: () => import('./FormsPage/RadioPage') },
  { path: 'select', loader: () => import('./FormsPage/SelectPage') },
  { path: 'textarea', loader: () => import('./FormsPage/TextareaPage') },

  // Navigation
  { path: 'breadcrumb', loader: () => import('./Navigation/BreadcrumbPage') },
  { path: 'carousel', loader: () => import('./Navigation/CarouselPage') },
  { path: 'drawer', loader: () => import('./Navigation/DrawerPage') },
  { path: 'link', loader: () => import('./Navigation/LinkPage') },
  { path: 'tabs', loader: () => import('./Navigation/TabsPage') },

  // Typography
  { path: 'typography', loader: () => import('./Typo/TypographyPage') },
  { path: 'heading', loader: () => import('./Typo/HeadingPage') },
  { path: 'paragraph', loader: () => import('./Typo/ParagraphPage') },
  { path: 'text-highlighter', loader: () => import('./Typo/TextHighlighterPage') },

  // Utilities
  { path: 'full-screen-toggle', loader: () => import('./Utilities/FullScreenTogglePage') },
  { path: 'ripple', loader: () => import('./Utilities/RipplePage') },

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
