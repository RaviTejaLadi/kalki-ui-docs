import JsonViewer from '@/components/common/JsonViewer';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic JsonViewer',
    desc: 'A simple JSON viewer with default settings',
    code: `
const data = { name: "John Doe", age: 30, city: "New York" };

<JsonViewer data={data} />
      `,
    snippet: <JsonViewer data={{ name: 'John Doe', age: 30, city: 'New York' }} />,
  },
  {
    title: 'Custom Title',
    desc: 'JSON viewer with a custom title',
    code: `
const data = { fruits: ["apple", "banana", "orange"], count: 3 };

<JsonViewer data={data} />
      `,
    snippet: <JsonViewer data={{ fruits: ['apple', 'banana', 'orange'], count: 3 }} />,
  },
  {
    title: 'Custom Dimensions',
    desc: 'JSON viewer with specified width and height',
    code: `
const data = { key1: "value1", key2: "value2", key3: "value3" };

<JsonViewer data={data}  />
      `,
    snippet: <JsonViewer data={{ key1: 'value1', key2: 'value2', key3: 'value3' }} />,
  },
  {
    title: 'Custom Indentation',
    desc: 'JSON viewer with custom indentation',
    code: `
const data = { 
  user: { 
    name: "Alice", 
    email: "alice@example.com" 
  },
  settings: {
    theme: "dark",
    notifications: true
  }
};

<JsonViewer data={data} indentation={2} />
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
const data = { id: 1, status: "active", tags: ["important", "urgent"] };

<JsonViewer data={data} />
      `,
    snippet: <JsonViewer data={{ id: 1, status: 'active', tags: ['important', 'urgent'] }} />,
  },
  {
    title: 'With Replacer Function',
    desc: 'JSON viewer using a replacer function to modify the output',
    code: `
const data = { 
  name: "John", 
  password: "secret123", 
  age: 25 
};

const replacer = (key, value) => 
  key === "password" ? "****" : value;

<JsonViewer data={data} replacer={replacer} />
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
const data = {
  company: "TechCorp",
  employees: [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" }
  ],
  departments: {
    engineering: { head: "Charlie", budget: 1000000 },
    marketing: { head: "Diana", budget: 500000 }
  },
  founded: new Date("2000-01-01").toISOString()
};

<JsonViewer data={data} />
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
const data = { status: "success", message: "Operation completed" };
             
<JsonViewer data={data}  />
      `,
    snippet: <JsonViewer data={{ status: 'success', message: 'Operation completed' }} />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['data', 'object | array', 'Required', 'The JSON data to be displayed in the viewer.'],
  ['width', 'string', 'auto', 'Specifies the width of the JSON viewer container.'],
  ['height', 'string', 'auto', 'Specifies the height of the JSON viewer container.'],
  ['indentation', 'number', '4', 'The number of spaces used for indentation in the JSON output.'],
  ['replacer', 'function', 'null', 'A function that alters the behavior of the stringification process.'],
  ['title', 'string | node', 'Title', 'The title displayed at the top of the JSON viewer.'],
  ['margin', 'string', '10px', 'Specifies the margin around the JSON viewer container.'],
  ['padding', 'string', '5px', 'Specifies the padding inside the JSON viewer container.'],
  ['copy', 'bool', 'true', 'Whether to display a button to copy the JSON data to the clipboard.'],
];
