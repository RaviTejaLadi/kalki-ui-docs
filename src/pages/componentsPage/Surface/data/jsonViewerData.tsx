import JsonViewer from '@/components/common/JsonViewer';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic JsonViewer',
    desc: 'A simple JSON viewer with default settings',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = { name: "John Doe", age: 30, city: "New York" };

  return <JsonViewer data={data} />;
}
`,
    snippet: <JsonViewer data={{ name: 'John Doe', age: 30, city: 'New York' }} />,
  },
  {
    title: 'Custom Title',
    desc: 'JSON viewer with a custom title',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = { fruits: ["apple", "banana", "orange"], count: 3 };

  return <JsonViewer data={data} />;
}
`,
    snippet: <JsonViewer data={{ fruits: ['apple', 'banana', 'orange'], count: 3 }} />,
  },
  {
    title: 'Custom Dimensions',
    desc: 'JSON viewer with specified width and height',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = { key1: "value1", key2: "value2", key3: "value3" };

  return <JsonViewer data={data} />;
}
`,
    snippet: <JsonViewer data={{ key1: 'value1', key2: 'value2', key3: 'value3' }} />,
  },
  {
    title: 'Custom Indentation',
    desc: 'JSON viewer with custom indentation',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = {
    user: {
      name: "Alice",
      email: "alice@example.com",
    },
    settings: {
      theme: "dark",
      notifications: true,
    },
  };

  return <JsonViewer data={data} indentation={2} />;
}
`,
    snippet: (
      <JsonViewer
        data={{
          user: {
            name: 'Alice',
            email: 'alice@example.com',
          },
          settings: {
            theme: 'dark',
            notifications: true,
          },
        }}
        indentation={2}
      />
    ),
  },
  {
    title: 'Custom Spacing',
    desc: 'JSON viewer with custom margin and padding',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = { id: 1, status: "active", tags: ["important", "urgent"] };

  return <JsonViewer data={data} />;
}
`,
    snippet: <JsonViewer data={{ id: 1, status: 'active', tags: ['important', 'urgent'] }} />,
  },
  {
    title: 'With Replacer Function',
    desc: 'JSON viewer using a replacer function to modify the output',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = {
    name: "John",
    password: "secret123",
    age: 25,
  };

  const replacer = (key: string, value: unknown) => (key === "password" ? "****" : value);

  return <JsonViewer data={data} replacer={replacer} />;
}
`,
    snippet: (
      <JsonViewer
        data={{
          name: 'John',
          password: 'secret123',
          age: 25,
        }}
        replacer={(key, value) => (key === 'password' ? '****' : value)}
      />
    ),
  },
  {
    title: 'Complex Nested Data',
    desc: 'JSON viewer with complex nested data structure',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = {
    company: "TechCorp",
    employees: [
      { id: 1, name: "Alice", role: "Developer" },
      { id: 2, name: "Bob", role: "Designer" },
    ],
    departments: {
      engineering: { head: "Charlie", budget: 1000000 },
      marketing: { head: "Diana", budget: 500000 },
    },
    founded: new Date("2000-01-01").toISOString(),
  };

  return <JsonViewer data={data} />;
}
`,
    snippet: (
      <JsonViewer
        data={{
          company: 'TechCorp',
          employees: [
            { id: 1, name: 'Alice', role: 'Developer' },
            { id: 2, name: 'Bob', role: 'Designer' },
          ],
          departments: {
            engineering: { head: 'Charlie', budget: 1000000 },
            marketing: { head: 'Diana', budget: 500000 },
          },
          founded: new Date('2000-01-01').toISOString(),
        }}
      />
    ),
  },
  {
    title: 'Custom Node Title',
    desc: 'JSON viewer with a custom React node as title',
    code: `
import { JsonViewer } from "kalki-ui";

export default function Example() {
  const data = { status: "success", message: "Operation completed" };

  return <JsonViewer data={data} />;
}
`,
    snippet: <JsonViewer data={{ status: 'success', message: 'Operation completed' }} />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['data', 'object | array', '-', 'The JSON data to be displayed in the viewer. Required.'],
  ['indentation', 'number', '4', 'The number of spaces used for indentation in the JSON output.'],
  [
    'replacer',
    '((key: string, value: unknown) => unknown) | (string | number)[] | null',
    'null',
    'A function or array that alters the behavior of the stringification process.',
  ],
  ['className', 'string', '-', 'Additional CSS classes for the viewer container.'],
  ['style', 'CSSProperties', '-', 'Inline styles for the viewer container.'],
  ['...rest', 'HTMLDivElement attributes', '-', 'Standard div HTML attributes are forwarded to the root element.'],
];
