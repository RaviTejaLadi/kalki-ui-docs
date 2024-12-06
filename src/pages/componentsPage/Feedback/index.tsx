import React from 'react';

const AlertPage = React.lazy(() => import('./AlertPage'));
const ModelPage = React.lazy(() => import('./ModelPage'));
const PopoverPage = React.lazy(() => import('./PopoverPage'));
const SpinnerPage = React.lazy(() => import('./SpinnerPage'));

export { AlertPage, ModelPage, PopoverPage, SpinnerPage };
