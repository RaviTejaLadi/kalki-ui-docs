import React from 'react';

const AvatarPage = React.lazy(() => import('./AvatarPage'));
const BadgePage = React.lazy(() => import('./BadgePage'));
const ListGroupPage = React.lazy(() => import('./ListGroupPage'));
const OrderedListPage = React.lazy(() => import('./OrderedListPage'));
const UnOrderedList = React.lazy(() => import('./UnOrderedList'));
const TablePage = React.lazy(() => import('./TablePage'));
const TagPage = React.lazy(() => import('./TagPage'));

export { AvatarPage, BadgePage, ListGroupPage, OrderedListPage, UnOrderedList, TablePage, TagPage };
