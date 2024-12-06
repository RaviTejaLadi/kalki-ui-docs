import React from 'react';

const BreadcrumbPage = React.lazy(() => import('./BreadcrumbPage'));
const CarouselPage = React.lazy(() => import('./CarouselPage'));
const DrawerPage = React.lazy(() => import('./DrawerPage'));
const LinkPage = React.lazy(() => import('./LinkPage'));
const TabsPage = React.lazy(() => import('./TabsPage'));

export { BreadcrumbPage, CarouselPage, DrawerPage, LinkPage, TabsPage };
