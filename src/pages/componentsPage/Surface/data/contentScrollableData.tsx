import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import ContentScrollable from '@/components/common/ContentScrollable';
import { docsData } from '@/types/docsData';
import { useState } from 'react';

function DynamicContentScrollable() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  return (
    <div>
      <Button onClick={addItem}>Add Item</Button>
      <ContentScrollable variant="success" height="300px" width="700px">
        {items.map((item) => (
          <Box key={item} width="90%" outlined padding="10px" margin="10px">
            Item {item}
          </Box>
        ))}
      </ContentScrollable>
    </div>
  );
}

const variants = [
  'primary' as const,
  'secondary' as const,
  'success' as const,
  'danger' as const,
  'warning' as const,
  'info' as const,
  'light' as const,
  'dark' as const,
];

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'This example demonstrates the most basic usage of the ContentScrollable component. It creates a scrollable container with a fixed height.',
    code: `
import { ContentScrollable } from "kalki-ui";

function BasicContentScrollable() {
  return (
    <ContentScrollable height="200px">
      <p>This is some content that will be scrollable.</p>
      <p>If the content exceeds the height of 200px, a scrollbar will appear.</p>
      {/* Add more content here to see the scrolling effect */}
    </ContentScrollable>
  );
}
      `,
    snippet: (
      <ContentScrollable variant="info" height="200px">
        <p>This is some content that will be scrollable.</p>
        <p>If the content exceeds the height of 200px, a scrollbar will appear.</p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quibusdam dolorum, qui dicta, distinctio
        odio dignissimos commodi aliquid facilis molestiae sapiente vel ut excepturi? Id nulla repellendus laborum
        corrupti excepturi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quibusdam dolorum, qui
        dicta, distinctio odio dignissimos commodi aliquid facilis molestiae sapiente vel ut excepturi? Id nulla
        repellendus laborum corrupti excepturi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        quibusdam dolorum, qui dicta, distinctio odio dignissimos commodi aliquid facilis molestiae sapiente vel ut
        excepturi? Id nulla repellendus laborum corrupti excepturi! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Architecto quibusdam dolorum, qui dicta, distinctio odio dignissimos commodi aliquid facilis molestiae
        sapiente vel ut excepturi? Id nulla repellendus laborum corrupti excepturi! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Architecto quibusdam dolorum, qui dicta, distinctio odio dignissimos commodi
        aliquid facilis molestiae sapiente vel ut excepturi? Id nulla repellendus laborum corrupti excepturi! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Architecto quibusdam dolorum, qui dicta, distinctio odio
        dignissimos commodi aliquid facilis molestiae sapiente vel ut excepturi? Id nulla repellendus laborum corrupti
        excepturi!
      </ContentScrollable>
    ),
  },
  {
    title: 'Custom Width and Height',
    desc: 'This example shows how to set both custom width and height for the scrollable container.',
    code: `
import { ContentScrollable } from "kalki-ui";

function CustomSizeContentScrollable() {
  return (
    <ContentScrollable height="300px" width="50%">
      <h2>Custom Size Scrollable Content</h2>
      <p>This container has a height of 300px and a width of 50% of its parent.</p>
      {/* Add more content here */}
    </ContentScrollable>
  );
}
      `,
    snippet: (
      <ContentScrollable height="300px" width="50%">
        <h2>Custom Size Scrollable Content</h2>
        <p>This container has a height of 300px and a width of 50% of its parent.</p>
        {/* Imagine more content here */}
      </ContentScrollable>
    ),
  },
  {
    title: 'With Variant',
    desc: 'This example demonstrates how to use the variant prop to apply different styles to the scrollable container.',
    code: `
import { ContentScrollable } from "kalki-ui";

function VariantContentScrollable() {
  return (
    <ContentScrollable height="250px" variant="primary">
      <h3>Primary Variant Scrollable Content</h3>
      <p>This container uses the 'primary' variant styling.</p>
      {/* Add more content here */}
    </ContentScrollable>
  );
}
      `,
    snippet: (
      <ContentScrollable height="250px" variant="primary">
        <h3>Primary Variant Scrollable Content</h3>
        <p>This container uses the &apos;primary&apos; variant styling.</p>
        {/* Imagine more content here */}
      </ContentScrollable>
    ),
  },
  {
    title: 'With Custom Styling',
    desc: 'This advanced example shows how to apply custom styles to the ContentScrollable component using inline styles and custom CSS classes.',
    code: `
import { ContentScrollable } from "kalki-ui";
import styles from './CustomStyles.module.css';

function CustomStyledContentScrollable() {
  return (
    <ContentScrollable 
      height="400px" 
      width="300px"
      className={styles.customScrollable}
      style={{ 
        border: '2px solid #007bff', 
        borderRadius: '8px',
        padding: '16px'
      }}
    >
      <h2>Custom Styled Scrollable Content</h2>
      <p>This container has custom styles applied using both inline styles and a custom CSS class.</p>
      {/* Add more content here */}
    </ContentScrollable>
  );
}

// In CustomStyles.module.css
.customScrollable {
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.customScrollable::-webkit-scrollbar {
  width: 8px;
}
.customScrollable::-webkit-scrollbar-thumb {
  background-color: #007bff;
  border-radius: 4px;
}
      `,
    snippet: (
      <ContentScrollable
        height="400px"
        width="300px"
        className="customScrollable"
        style={{
          border: '2px solid #007bff',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <h2>Custom Styled Scrollable Content</h2>
        <p>This container has custom styles applied using both inline styles and a custom CSS class.</p>
        {/* Imagine more content here */}
      </ContentScrollable>
    ),
  },
  {
    title: 'Dynamic Content with State',
    desc: 'This advanced example demonstrates how to use the ContentScrollable component with dynamic content controlled by React state.',
    code: `
import React, { useState } from 'react';
import { ContentScrollable } from "kalki-ui";

function DynamicContentScrollable() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  return (
    <div>
      <Button onClick={addItem}>Add Item</Button>
      <ContentScrollable variant="success" height="300px" width="700px">
        {items.map((item) => (
          <Box key={item} width="98%" outlined padding="10px" margin="10px">
            Item {item}
          </Box>
        ))}
      </ContentScrollable>
    </div>
  );
}
      `,
    snippet: <DynamicContentScrollable />,
  },
  {
    title: 'Color Palette Viewer',
    desc: 'This example demonstrates using ContentScrollable to display a color palette, utilizing multiple variants.',
    code: `
import React from 'react';
import { ContentScrollable } from "kalki-ui";

function ColorPaletteViewer() {
  const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  return (
    <ContentScrollable height="300px" width="200px" variant="light">
      {variants.map(variant => (
        <div key={variant} style={{padding: '20px', textAlign: 'center'}}>
          <ContentScrollable height="50px" width="90%" variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </ContentScrollable>
        </div>
      ))}
    </ContentScrollable>
  );
}
    `,
    snippet: (
      <ContentScrollable height="300px" width="200px" variant="light">
        {variants.map((variant) => (
          <div key={variant} style={{ padding: '20px', textAlign: 'center' }}>
            <ContentScrollable height="50px" width="90%" variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </ContentScrollable>
          </div>
        ))}
      </ContentScrollable>
    ),
  },
];
export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'height',
    'string',
    'undefined',
    "Specifies the height of the scrollable container. Can be any valid CSS height value (e.g., '200px', '50vh').",
  ],
  [
    'width',
    'string',
    'undefined',
    "Specifies the width of the scrollable container. Can be any valid CSS width value (e.g., '300px', '100%').",
  ],
  ['children', 'node', 'required', 'The content to be rendered inside the scrollable container.'],
  [
    'variant',
    'string',
    'undefined',
    'Specifies a variant for styling. The available variants depend on your CSS implementation.',
  ],
  ['ref', 'Ref', 'undefined', 'Allows getting a ref to the DOM node of the scrollable container.'],
  ['...rest', 'object', '{}', 'Any additional props will be spread onto the root div element.'],
];
