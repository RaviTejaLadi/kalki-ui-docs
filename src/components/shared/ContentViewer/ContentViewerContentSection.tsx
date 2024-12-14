import React from "react";
import { ContentSectionType } from "./types/ContentSectionType";

interface ContentViewerContentSectionProps {
  section: ContentSectionType;
}

export const ContentViewerContentSection = React.forwardRef<HTMLDivElement, ContentViewerContentSectionProps>(
  ({ section }, ref) => (
    <div ref={ref} className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4" id={section.id}>
        {section.title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{section.content}</p>
    </div>
  )
);

ContentViewerContentSection.displayName = "ContentViewerContentSection";
