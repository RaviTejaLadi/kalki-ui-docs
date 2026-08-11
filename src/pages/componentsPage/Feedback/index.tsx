import React from 'react';

const AlertPage = React.lazy(() => import('./AlertPage'));
const ModalPage = React.lazy(() => import('./ModalPage'));
const PopoverPage = React.lazy(() => import('./PopoverPage'));
const SpinnerPage = React.lazy(() => import('./SpinnerPage'));

export { AlertPage, ModalPage, PopoverPage, SpinnerPage };
