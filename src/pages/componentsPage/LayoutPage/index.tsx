import React from 'react';

const BoxPage = React.lazy(() => import('./BoxPage'));
const StackPage = React.lazy(() => import('./StackPage'));

export { BoxPage, StackPage };
