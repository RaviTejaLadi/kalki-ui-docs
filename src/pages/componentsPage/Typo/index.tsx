import React from 'react';

const TypographyPage = React.lazy(() => import('./TypographyPage'));
const TextHighlighterPage = React.lazy(() => import('./TextHighlighterPage'));
const HeadingPage = React.lazy(() => import('./HeadingPage'));
const ParagraphPage = React.lazy(() => import('./ParagraphPage'));

export { TypographyPage, TextHighlighterPage, HeadingPage, ParagraphPage };
