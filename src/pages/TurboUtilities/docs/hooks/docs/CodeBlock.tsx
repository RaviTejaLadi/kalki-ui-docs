
type CodeBlockProps = {
  code: string;
  language?: string;
};

export const CodeBlock = ({ code, }: CodeBlockProps) => (
  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
    <code className="font-mono text-sm">{code}</code>
  </pre>
);