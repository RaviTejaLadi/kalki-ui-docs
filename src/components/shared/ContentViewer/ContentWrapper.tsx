import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <div className="flex-1 max-w-3xl mx-auto px-6 py-8">{children}</div>
);
