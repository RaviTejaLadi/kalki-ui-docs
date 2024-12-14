import React, { createContext, useContext, useRef } from 'react';

interface ContentViewerContextType {
  activeId: string | null;
  setActiveId: (id: string) => void;
  registerSection: (id: string, ref: HTMLDivElement) => void;
}

const ContentViewerContext = createContext<ContentViewerContextType | null>(null);

export const ContentViewerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const registerSection = (id: string, ref: HTMLDivElement) => {
    sectionRefs.current.set(id, ref);
  };

  const handleSetActiveId = (id: string) => {
    setActiveId(id);
    const section = sectionRefs.current.get(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ContentViewerContext.Provider 
      value={{ 
        activeId, 
        setActiveId: handleSetActiveId, 
        registerSection 
      }}
    >
      {children}
    </ContentViewerContext.Provider>
  );
};

export const useContentViewer = () => {
  const context = useContext(ContentViewerContext);
  if (!context) {
    throw new Error('useContentViewer must be used within a ContentViewerProvider');
  }
  return context;
};