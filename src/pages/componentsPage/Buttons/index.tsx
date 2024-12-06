import React from 'react';

const ButtonPage = React.lazy(() => import('./ButtonPage'));
const LinkButtonPage = React.lazy(() => import('./LinkButtonPage'));
const LinkBarPage = React.lazy(() => import('./LinkBarPage'));
const CloseButtonPage = React.lazy(() => import('./CloseButtonPage'));
const ButtonsPreview = React.lazy(() => import('./ButtonsPreview'));

export { ButtonsPreview, ButtonPage, LinkButtonPage, LinkBarPage, CloseButtonPage };
