import Link from '@/components/common/Link';
import { docsData } from '@/types/docsData';
import React from 'react';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple Link component for internal navigation.',
    code: `
import React from 'react';
import Link from './Link';

const BasicExample = () => {
    return (
        <Link to="/home">Go to Home</Link>
    );
};
      `,
    snippet: <Link to="/home">Go to Home</Link>,
  },
  {
    title: 'External Link',
    desc: 'A Link component that opens an external URL in a new tab.',
    code: `
import React from 'react';
import Link from './Link';

const ExternalLinkExample = () => {
    return (
        <Link to="https://www.example.com" target="_blank">
            Visit Example.com
        </Link>
    );
};
      `,
    snippet: (
      <Link to="https://www.example.com" target="_blank">
        Visit Example.com
      </Link>
    ),
  },
  {
    title: 'Styled Link',
    desc: 'A Link component with custom styling.',
    code: `
import React from 'react';
import Link from './Link';

const StyledLinkExample = () => {
    const customStyle = {
        color: 'red',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    return (
        <Link to="/contact" style={customStyle}>
            Contact Us
        </Link>
    );
};
      `,
    snippet: (
      <Link to="/contact" style={{ color: 'red', textDecoration: 'none', fontWeight: 'bold' }}>
        Contact Us
      </Link>
    ),
  },
  {
    title: 'Link with onClick Handler',
    desc: 'A Link component with a custom onClick handler.',
    code: `
import React from 'react';
import Link from './Link';

const LinkWithOnClickExample = () => {
    const handleClick = (event) => {
        console.log('Link clicked!');
        // You can add additional logic here
    };

    return (
        <Link to="/dashboard" onClick={handleClick}>
            Go to Dashboard
        </Link>
    );
};
      `,
    snippet: (
      <Link to="/dashboard" onClick={() => console.log('Link clicked!')}>
        Go to Dashboard
      </Link>
    ),
  },
  {
    title: 'Link with Custom Class',
    desc: 'A Link component with a custom CSS class.',
    code: `
import React from 'react';
import Link from './Link';

const LinkWithCustomClassExample = () => {
    return (
        <Link to="/products" className="custom-link-class">
            View Products
        </Link>
    );
};
      `,
    snippet: (
      <Link to="/products" className="custom-link-class">
        View Products
      </Link>
    ),
  },
  {
    title: 'Link with Ref',
    desc: 'A Link component with a forwarded ref.',
    code: `
import React, { useRef } from 'react';
import Link from './Link';

const LinkWithRefExample = () => {
    const linkRef = useRef(null);

    const handleClick = () => {
        if (linkRef.current) {
            console.log('Link element:', linkRef.current);
        }
    };

    return (
        <Link to="/profile" ref={linkRef} onClick={handleClick}>
            View Profile
        </Link>
    );
};
      `,
    snippet: (
      <Link to="/profile" ref={React.createRef()}>
        View Profile
      </Link>
    ),
  },
  {
    title: 'Link with Additional Attributes',
    desc: 'A Link component with additional HTML attributes.',
    code: `
import React from 'react';
import Link from './Link';

const LinkWithAttributesExample = () => {
    return (
        <Link to="/download" download="file.pdf" title="Download PDF">
            Download File
        </Link>
    );
};
      `,
    snippet: (
      <Link to="/download" download="file.pdf" title="Download PDF">
        Download File
      </Link>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['to', 'string', 'undefined', 'The URL or path that the link should navigate to. Required.'],
  ['children', 'node', 'undefined', 'The content to be rendered inside the link. Required.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the link.'],
  ['rel', 'string', 'undefined', 'The relationship of the linked URL as space-separated link types.'],
  ['target', 'string', 'undefined', 'Specifies where to open the linked document.'],
  ['onClick', 'function', 'undefined', 'Custom click handler for the link.'],
  ['ref', 'ref', 'undefined', 'Ref forwarded to the anchor element.'],
];
