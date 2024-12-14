import React from 'react';
import { ContentSectionType } from "./types/ContentSectionType";
import { ContentViewerContentSection } from './ContentViewerContentSection';

interface MainContentProps {
  sections: ContentSectionType[];
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

export const MainContent: React.FC<MainContentProps> = ({ sections, sectionRefs }) => (
  <div className="flex-1 max-w-3xl mx-auto px-6 py-8">
    {sections.map((section) => (
      <ContentViewerContentSection
        key={section.id}
        ref={(el) => (sectionRefs.current[section.id] = el)}
        section={section}
      />
    ))}
  </div>
);