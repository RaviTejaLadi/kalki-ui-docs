import React from 'react';

const FullScreenTogglePage = React.lazy(() => import('./FullScreenTogglePage'));
const RipplePage = React.lazy(() => import('./RipplePage'));

export { RipplePage, FullScreenTogglePage };
