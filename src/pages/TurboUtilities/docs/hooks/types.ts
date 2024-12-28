interface hookDocs {
  title: string;
  description: string;
  example: React.ReactNode;
  docs: {
    title: string;
    list: {
      item: string;
      options: string[];
    }[];
  }[];
}

export type { hookDocs };
