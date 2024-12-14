import React from 'react';
import { ContentViewerProvider } from './context/context';
import { ContentViewerContent } from './ContentViewerContent';
import { ContentWrapper } from './ContentWrapper';
import { SideMenu } from './SideMenu';
import { SideMenuItem } from './SideMenuItem';

interface ContentViewerProps {
  children: React.ReactNode;
}

const ContentViewerRoot: React.FC<ContentViewerProps> = ({ children }) => (
  <ContentViewerProvider>
    <div className="flex min-h-screen bg-gray-50">{children}</div>
  </ContentViewerProvider>
);

export const ContentViewer = Object.assign(ContentViewerRoot, {
  Content: ContentWrapper,
  ContentSection: ContentViewerContent,
  SideMenu,
  SideMenuItem,
});
