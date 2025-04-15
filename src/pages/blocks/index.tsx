import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HeroSectionPage from './HeroSectionPage';
import BlocksLayout from '@/components/Layout/BlocksLayout/BlocksLayout';
import BlocksOverViewPage from './BlocksOverViewPage';
import CardsPage from './CardsPage';

interface RouteConfig {
  path: string;
  Component: React.ComponentType;
}

const ROUTES: RouteConfig[] = [
  { path: 'hero-section', Component: HeroSectionPage },
  { path: 'cards', Component: CardsPage },
];
const Blocks = () => {
  return (
    <Routes>
      <Route element={<BlocksLayout />}>
        <Route index element={<BlocksOverViewPage />} />
        {ROUTES.map(({ path, Component }: RouteConfig) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default Blocks;
