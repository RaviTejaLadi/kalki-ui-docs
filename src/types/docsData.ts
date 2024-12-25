import React from 'react';

/**
 * Interface representing documentation data structure.
 * @interface docsData
 * @property {string} title - The title of the documentation section
 * @property {string} desc - Description or explanation text
 * @property {string} code - Code example as a string
 * @property {React.ReactNode} snippet - React component or element for demonstration
 */
interface docsData {
  title: string;
  desc: string;
  code: string;
  snippet: React.ReactNode;
}

export { type docsData };
