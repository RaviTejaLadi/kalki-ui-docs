import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  delay?: number;
}

export function GradientText({ children, delay = 0 }: GradientTextProps) {
  return (
    <span
      className="animate-gradient bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600  animate-reveal"
      style={{
        animationDelay: `${delay}ms`,
        transform: 'translateY(20px)',
      }}
    >
      {children}
    </span>
  );
}
