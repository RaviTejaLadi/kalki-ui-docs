import React from 'react';

const AccordionPage = React.lazy(() => import('./AccordionPage'));
const BannerPage = React.lazy(() => import('./BannerPage'));
const CardsPage = React.lazy(() => import('./CardsPage'));
const ContentScrollable = React.lazy(() => import('./ContentScrollablePage'));
const FigurePage = React.lazy(() => import('./FigurePage'));
const GridBackgroundPage = React.lazy(() => import('./GridBackgroundPage'));
const JsonViewerPage = React.lazy(() => import('./JsonViewerPage'));
const SectionHeaderPage = React.lazy(() => import('./SectionHeaderPage'));
const SplitterPage = React.lazy(() => import('./SplitterPage'));

export {
  AccordionPage,
  BannerPage,
  CardsPage,
  ContentScrollable,
  FigurePage,
  GridBackgroundPage,
  JsonViewerPage,
  SectionHeaderPage,
  SplitterPage,
};
