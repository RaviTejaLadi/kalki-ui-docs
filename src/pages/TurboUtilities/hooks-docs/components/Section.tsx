import React from 'react';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4 text-foreground">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);
