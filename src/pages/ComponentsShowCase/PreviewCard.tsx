import React from 'react';

interface PreviewCardProps {
  name: string;
  description: string;
  preview: React.ReactNode;
}

export function PreviewCard({ name, description, preview }: PreviewCardProps) {
  return (
    <div className="hover:shadow-md hover:border-blue-600 bg-background dark:bg-inherit dark:border-gray-200/10 px-4 py-6 rounded-lg shadow-sm border  transition-all duration-300">
      <div className="h-[25%]">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
      </div>
      <div className="bg-gray-50/10 h-[65%] dark:border-dashed dark:border-gray-200/10 px-2 py-5 rounded-lg my-10 flex items-center justify-center border">
        {preview}
      </div>
    </div>
  );
}
