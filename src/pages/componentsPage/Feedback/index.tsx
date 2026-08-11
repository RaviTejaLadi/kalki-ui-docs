import React from 'react';

const AlertPage = React.lazy(() => import('./AlertPage'));
const EmptyPage = React.lazy(() => import('./EmptyPage'));
const ModalPage = React.lazy(() => import('./ModalPage'));
const PopoverPage = React.lazy(() => import('./PopoverPage'));
const SkeletonPage = React.lazy(() => import('./SkeletonPage'));
const SpinnerPage = React.lazy(() => import('./SpinnerPage'));

export { AlertPage, EmptyPage, ModalPage, PopoverPage, SkeletonPage, SpinnerPage };
