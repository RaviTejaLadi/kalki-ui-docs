import React from 'react';

const AvatarPage = React.lazy(() => import('./AvatarPage'));
const BadgePage = React.lazy(() => import('./BadgePage'));
const ListsPage = React.lazy(() => import('./ListsPage'));
const TablePage = React.lazy(() => import('./TablePage'));
const TagPage = React.lazy(() => import('./TagPage'));

export { AvatarPage, BadgePage, ListsPage, TablePage, TagPage };
