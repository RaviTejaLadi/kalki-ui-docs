interface CategorizedBlocksRoutes {
  id: string;
  category: string;
  path: string;
}

export const categorizedBlocksRoutesData: CategorizedBlocksRoutes[] = [
  {
    id: 'heroSection',
    category: 'Hero Section',
    path: '/blocks/hero-section',
  },
  {
    id: 'cards',
    category: 'Cards',
    path: '/blocks/cards',
  },
  {
    id: 'error-pages',
    category: 'Error Pages',
    path: '/blocks/error-pages',
  },
];
