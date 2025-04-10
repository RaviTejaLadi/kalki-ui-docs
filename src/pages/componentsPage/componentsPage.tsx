import { Route, Routes } from 'react-router-dom';
import ComponentsOverviewPage from './ComponentsOverviewPage';
import { ButtonsPreview, ButtonPage, LinkButtonPage, LinkBarPage, CloseButtonPage } from './Buttons';
import {
  AvatarPage,
  BadgePage,
  ListGroupPage,
  TablePage,
  TagPage,
  UnOrderedList,
  OrderedListPage,
} from './DataDisplay';
import { AlertPage, ModelPage, PopoverPage, SpinnerPage } from './Feedback';
import {
  AccordionPage,
  BannerPage,
  CardsPage,
  ContentScrollable,
  FigurePage,
  GridBackgroundPage,
  JsonViewerPage,
  SectionHeaderPage,
  SplitterPage,
} from './Surface';
import {
  CheckBoxCardPage,
  CheckboxPage,
  DropdownPage,
  FormsPage,
  InputPage,
  RadioPage,
  RadioCardPage,
  SelectPage,
  TextareaPage,
} from './FormsPage';
import { BreadcrumbPage, CarouselPage, DrawerPage, LinkPage, TabsPage } from './Navigation';
import { TextHighlighterPage, TypographyPage, HeadingPage, ParagraphPage } from './Typo';
import { FullScreenTogglePage, RipplePage } from './Utilities';
import React from 'react';
import ComponentsLayout from '@/components/Layout/ComponentsLayout/ComponentsLayout';
import { BoxPage, StackPage } from './LayoutPage';
interface RouteConfig {
  path: string;
  Component: React.ComponentType;
}

const ROUTES: RouteConfig[] = [
  // Buttons
  { path: 'buttons-preview', Component: ButtonsPreview },
  { path: 'button', Component: ButtonPage },
  { path: 'link-button', Component: LinkButtonPage },
  { path: 'link-bar', Component: LinkBarPage },
  { path: 'close-button', Component: CloseButtonPage },

  // Data Display
  { path: 'avatar', Component: AvatarPage },
  { path: 'badge', Component: BadgePage },
  { path: 'list-group', Component: ListGroupPage },
  { path: 'ordered-list', Component: OrderedListPage },
  { path: 'un-ordered-list', Component: UnOrderedList },
  { path: 'table', Component: TablePage },
  { path: 'tag', Component: TagPage },

  // Feedback
  { path: 'alert', Component: AlertPage },
  { path: 'model', Component: ModelPage },
  { path: 'popover', Component: PopoverPage },
  { path: 'spinner', Component: SpinnerPage },

  // Surface
  { path: 'accordion', Component: AccordionPage },
  { path: 'banner', Component: BannerPage },
  { path: 'cards', Component: CardsPage },
  { path: 'content-scrollable', Component: ContentScrollable },
  { path: 'figure', Component: FigurePage },
  { path: 'grid-background', Component: GridBackgroundPage },
  { path: 'json-viewer', Component: JsonViewerPage },
  { path: 'section-header', Component: SectionHeaderPage },
  { path: 'splitter', Component: SplitterPage },

  // Forms
  { path: 'checkbox-card', Component: CheckBoxCardPage },
  { path: 'checkbox', Component: CheckboxPage },
  { path: 'dropdown', Component: DropdownPage },
  { path: 'forms', Component: FormsPage },
  { path: 'input', Component: InputPage },
  { path: 'radio-card', Component: RadioCardPage },
  { path: 'radio', Component: RadioPage },
  { path: 'select', Component: SelectPage },
  { path: 'textarea', Component: TextareaPage },

  // Navigation
  { path: 'breadcrumb', Component: BreadcrumbPage },
  { path: 'carousel', Component: CarouselPage },
  { path: 'drawer', Component: DrawerPage },
  { path: 'link', Component: LinkPage },
  { path: 'tabs', Component: TabsPage },

  // Typography
  { path: 'typography', Component: TypographyPage },
  { path: 'heading', Component: HeadingPage },
  { path: 'paragraph', Component: ParagraphPage },

  { path: 'text-highlighter', Component: TextHighlighterPage },

  // Utilities
  { path: 'full-screen-toggle', Component: FullScreenTogglePage },
  { path: 'ripple', Component: RipplePage },

  // Layout
  { path: 'box', Component: BoxPage },
  { path: 'stack', Component: StackPage },
];

const Components = () => {
  return (
    <Routes>
      <Route element={<ComponentsLayout />}>
        <Route index element={<ComponentsOverviewPage />} />
        {ROUTES.map(({ path, Component }: RouteConfig) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default Components;
