import React from 'react';
import { useContentViewer } from './context/context';

interface ContentViewerContentProps {
  id: string;
  children: React.ReactNode;
}

export const ContentViewerContent: React.FC<ContentViewerContentProps> = ({ id, children }) => {
  const { registerSection } = useContentViewer();

  return (
    <div ref={(ref) => ref && registerSection(id, ref)} className="mb-12">
      <div className="text-gray-600 leading-relaxed" id={id}>
        {children}
      </div>
    </div>
  );
};
