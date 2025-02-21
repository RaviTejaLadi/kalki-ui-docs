import React from 'react';

const TypographyPage = React.lazy(() => import('./TypographyPage'));
const TextHighlighterPage = React.lazy(() => import('./TextHighlighterPage'));
const HeadingPage = React.lazy(() => import('./HeadingPage'));

export { TypographyPage, TextHighlighterPage, HeadingPage };
