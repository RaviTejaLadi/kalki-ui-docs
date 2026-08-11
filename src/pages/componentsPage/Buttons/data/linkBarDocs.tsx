import { docsData } from '@/types/docsData';
import BasicLinkBar from '../examples/LinkBar/BasicLinkBar';
import CustomSizedLinkBar from '../examples/LinkBar/CustomSizedLinkBar';
import LinkBarWithCustomControlButtons from '../examples/LinkBar/LinkBarWithCustomControlButtons';
import LinkBarWithIcons from '../examples/LinkBar/LinkBarWithIcons';
import LinkBarWithManyLinks from '../examples/LinkBar/LinkBarWithManyLinks';
import LinkBarWithoutControls from '../examples/LinkBar/LinkBarWithoutControls';

export const docs: docsData[] = [
  {
    title: 'Basic LinkBar',
    desc: 'A simple LinkBar with default settings.',
    code: `
import React, { useState } from "react";
import { LinkBar } from "kalki-ui";

const BasicLinkBar = () => {
  const [activeUrl, setActiveUrl] = useState("/home");

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/home">Home</LinkBar.Link>
        <LinkBar.Link to="/about">About</LinkBar.Link>
        <LinkBar.Link to="/contact">Contact</LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default BasicLinkBar;
`,
    snippet: <BasicLinkBar />,
  },
  {
    title: 'LinkBar with Icons',
    desc: 'LinkBar links with start and end icons.',
    code: `
import React, { useState } from "react";
import { LinkBar } from "kalki-ui";

const LinkBarWithIcons = () => {
  const [activeUrl, setActiveUrl] = useState("/settings");

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/home" icon="🏠">
          Home
        </LinkBar.Link>
        <LinkBar.Link to="/settings" icon="⚙️" iconPosition="end">
          Settings
        </LinkBar.Link>
        <LinkBar.Link to="/profile" icon="👤">
          Profile
        </LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default LinkBarWithIcons;
`,
    snippet: <LinkBarWithIcons />,
  },
  {
    title: 'Custom Sized LinkBar',
    desc: 'LinkBar with custom width, size, and rounded corners.',
    code: `
import React, { useState } from "react";
import { LinkBar } from "kalki-ui";

const CustomSizedLinkBar = () => {
  const [activeUrl, setActiveUrl] = useState("/option1");

  return (
    <LinkBar
      variant="outline"
      size="md"
      rounded="md"
      activeUrl={activeUrl}
      onUrlChange={setActiveUrl}
      className="w-[300px]"
    >
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/option1">Option 1</LinkBar.Link>
        <LinkBar.Link to="/option2">Option 2</LinkBar.Link>
        <LinkBar.Link to="/option3">Option 3</LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default CustomSizedLinkBar;
`,
    snippet: <CustomSizedLinkBar />,
  },
  {
    title: 'LinkBar without Controls',
    desc: 'LinkBar without scroll control buttons.',
    code: `
import React, { useState } from "react";
import { LinkBar } from "kalki-ui";

const LinkBarWithoutControls = () => {
  const [activeUrl, setActiveUrl] = useState("/tab1");

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/tab1">Tab 1</LinkBar.Link>
        <LinkBar.Link to="/tab2">Tab 2</LinkBar.Link>
        <LinkBar.Link to="/tab3">Tab 3</LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default LinkBarWithoutControls;
`,
    snippet: <LinkBarWithoutControls />,
  },
  {
    title: 'LinkBar with Custom Control Buttons',
    desc: 'LinkBar with custom size and variant for control buttons.',
    code: `
import React, { useState } from "react";
import { LinkBar } from "kalki-ui";

const LinkBarWithCustomControlButtons = () => {
  const [activeUrl, setActiveUrl] = useState("/product-a");

  return (
    <LinkBar
      variant="default"
      size="sm"
      rounded="none"
      activeUrl={activeUrl}
      onUrlChange={setActiveUrl}
      className="w-[20rem]"
    >
      <LinkBar.Control position="left" size="md" variant="primary" />
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/product-a">Product A</LinkBar.Link>
        <LinkBar.Link to="/product-b">Product B</LinkBar.Link>
        <LinkBar.Link to="/product-c">Product C</LinkBar.Link>
        <LinkBar.Link to="/product-d">Product D</LinkBar.Link>
        <LinkBar.Link to="/product-e">Product E</LinkBar.Link>
      </LinkBar.Content>
      <LinkBar.Control position="right" size="md" variant="primary" />
    </LinkBar>
  );
};

export default LinkBarWithCustomControlButtons;
`,
    snippet: <LinkBarWithCustomControlButtons />,
  },
  {
    title: 'LinkBar with Many Links',
    desc: 'LinkBar with many links to demonstrate scrolling.',
    code: `
import React, { useState } from "react";
import { LinkBar } from "kalki-ui";

const LinkBarWithManyLinks = () => {
  const [activeUrl, setActiveUrl] = useState("/home");

  const handleUrlChange = (to: string) => {
    setActiveUrl(to);
  };

  interface Link {
    label: string;
    to: string;
    icon?: string;
  }

  const links: Link[] = [
    { label: "JavaScript", to: "/javascript", icon: "✨" },
    { label: "Python", to: "/python", icon: "🐍" },
    { label: "Java", to: "/java" },
    { label: "C++", to: "/cpp", icon: "💻" },
    { label: "C#", to: "/csharp", icon: "🔧" },
    { label: "Ruby", to: "/ruby", icon: "💎" },
    { label: "Swift", to: "/swift" },
    { label: "Go", to: "/go", icon: "🚀" },
    { label: "Kotlin", to: "/kotlin" },
    { label: "PHP", to: "/php", icon: "🐘" },
    { label: "TypeScript", to: "/typescript" },
    { label: "Scala", to: "/scala", icon: "📐" },
    { label: "R", to: "/r", icon: "📊" },
    { label: "Perl", to: "/perl" },
    { label: "Haskell", to: "/haskell", icon: "🔢" },
    { label: "Rust", to: "/rust", icon: "🦀" },
    { label: "Elixir", to: "/elixir" },
    { label: "Dart", to: "/dart", icon: "🎯" },
    { label: "Lua", to: "/lua" },
    { label: "Clojure", to: "/clojure", icon: "🔗" },
    { label: "F#", to: "/fsharp" },
    { label: "Matlab", to: "/matlab", icon: "📈" },
    { label: "Julia", to: "/julia", icon: "📊" },
    { label: "Erlang", to: "/erlang" },
    { label: "Objective-C", to: "/objective-c", icon: "🍏" },
    { label: "Groovy", to: "/groovy", icon: "🎵" },
    { label: "Fortran", to: "/fortran" },
    { label: "Ada", to: "/ada", icon: "🏛️" },
    { label: "COBOL", to: "/cobol" },
    { label: "Visual Basic", to: "/visual-basic", icon: "🖥️" },
    { label: "Scheme", to: "/scheme" },
    { label: "Prolog", to: "/prolog", icon: "🤖" },
    { label: "Lisp", to: "/lisp" },
    { label: "Shell", to: "/shell", icon: "🐚" },
    { label: "VHDL", to: "/vhdl" },
    { label: "Verilog", to: "/verilog", icon: "🔌" },
    { label: "Racket", to: "/racket" },
    { label: "Smalltalk", to: "/smalltalk", icon: "💬" },
    { label: "Pascal", to: "/pascal" },
    { label: "ABAP", to: "/abap", icon: "🏢" },
    { label: "SAS", to: "/sas" },
  ];

  return (
    <LinkBar
      variant="default"
      size="sm"
      rounded="none"
      activeUrl={activeUrl}
      onUrlChange={handleUrlChange}
      className="w-[50rem]"
    >
      <LinkBar.Control position="left" />
      <LinkBar.Content className="px-2">
        {links.map((link, index) => (
          <LinkBar.Link key={index} to={\`#-\${link.to}\`} icon={link.icon}>
            {link.label}
          </LinkBar.Link>
        ))}
      </LinkBar.Content>
      <LinkBar.Control position="right" />
    </LinkBar>
  );
};

export default LinkBarWithManyLinks;
`,
    snippet: <LinkBarWithManyLinks />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'variant',
    'string',
    'default',
    'Visual style of the LinkBar. [primary, secondary, success, danger, warning, info, help, light, dark, default, outline]',
  ],
  ['size', 'string', 'sm', "Height of the LinkBar. ['sm', 'md', 'lg']"],
  ['rounded', 'string', 'none', "Border radius of the LinkBar. ['xs', 'sm', 'md', 'lg', 'none']"],
  ['activeUrl', 'string', '-', 'URL of the currently active link.'],
  ['onUrlChange', '(url: string) => void', '-', 'Called when a link is clicked.'],
  ['className', 'string', '-', 'Additional CSS classes for the LinkBar container.'],
  ['children', 'node', '-', 'Compound children such as LinkBar.Content, LinkBar.Link, and LinkBar.Control.'],
];

export const componentHierarchyCode = `
  <LinkBar>
    <LinkBar.Control position="left" />
    <LinkBar.Content>
         <LinkBar.Link>
           
        </LinkBar.Link>
    </LinkBar.Content>
    <LinkBar.Control position="right" />
  </LinkBar>
`;
