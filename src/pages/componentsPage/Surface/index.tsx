import React from "react";

const AccordionPage = React.lazy(() => import("./AccordionPage/AccordionPage"));
const BannerPage = React.lazy(() => import("./BannerPage/BannerPage"));
const CardsPage = React.lazy(() => import("./CardsPage/CardsPage"));
const ContentScrollable = React.lazy(() => import("./ContentScrollablePage/ContentScrollablePage"));
const FieldsetPage = React.lazy(() => import("./FieldsetPage/FieldsetPage"));
const FigurePage = React.lazy(() => import("./FigurePage/FigurePage"));
const GridBackgroundPage = React.lazy(() => import("./GridBackgroundPage/GridBackgroundPage"));
const JsonViewerPage = React.lazy(() => import("./JsonViewerPage/JsonViewerPage"));
const SectionHeaderPage = React.lazy(() => import("./SectionHeaderPage/SectionHeaderPage"));
const SplitterPage = React.lazy(() => import("./SplitterPage/SplitterPage"));

export {
  AccordionPage,
  BannerPage,
  CardsPage,
  ContentScrollable,
  FieldsetPage,
  FigurePage,
  GridBackgroundPage,
  JsonViewerPage,
  SectionHeaderPage,
  SplitterPage,
};
