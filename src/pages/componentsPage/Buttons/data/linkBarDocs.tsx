import { docsData } from '@/types/docsData';
import LinkBarWithManyLinks from '../examples/LinkBar/LinkBarWithManyLinks';

export const docs: docsData[] = [
  //   {
  //     title: "Basic LinkBar",
  //     desc: "A simple LinkBar with default settings",
  //     code: `
  // import React from "react";
  // import { LinkBar } from "kalki-ui";

  // const BasicLinkBar = () => {
  //   const links = [
  //     { name: "Home", url: "/" },
  //     { name: "About", url: "/about" },
  //     { name: "Contact", url: "/contact" },
  //   ];
  //   return <LinkBar links={links} currentPath="/" />;
  // };
  //     `,
  //     snippet: <BasicLinkBar />,
  //   },
  //   {
  //     title: "LinkBar with Icons",
  //     desc: "LinkBar with start and end icons for links",
  //     code: `
  // import React from "react";
  // import { LinkBar, RoundedIcons } from "kalki-ui";
  // const { Home, Settings, Person } = RoundedIcons;

  // const LinkBarwithIcons = () => {
  //   links = [
  //     { name: "Home", url: "/", startIcon: <Home /> },
  //     { name: "Settings", url: "/settings", endIcon: <Settings /> },
  //     { name: "Profile", url: "/profile", startIcon: <Person /> },
  //   ];
  //   return <LinkBar links={links} activeLinkUrl="/settings" />;
  // };
  //     `,
  //     snippet: <LinkBarwithIcons />,
  //   },
  //   {
  //     title: "Custom Sized LinkBar",
  //     desc: "LinkBar with custom width and height",
  //     code: `
  // import React from "react";
  // import { LinkBar } from "kalki-ui";

  // const CustomSizedLinkBar = () => {
  //   let links = [
  //     { name: "Option 1", url: "/option1" },
  //     { name: "Option 2", url: "/option2" },
  //     { name: "Option 3", url: "/option3" },
  //   ];
  //   return <LinkBar links={links} width="300px" height="50px" />;
  // };
  //     `,
  //     snippet: <CustomSizedLinkBar />,
  //   },
  //   {
  //     title: "LinkBar without Controls",
  //     desc: "LinkBar with scroll controls hidden",
  //     code: `
  // import React from "react";
  // import { LinkBar } from "kalki-ui";

  // const LinkBarWithoutControls = () => {
  //   return (
  //     <LinkBar
  //       links={[
  //         { name: "Tab 1", url: "/tab1" },
  //         { name: "Tab 2", url: "/tab2" },
  //         { name: "Tab 3", url: "/tab3" },
  //       ]}
  //       showControls={false}
  //     />
  //   );
  // };
  //     `,
  //     snippet: <LinkBarWithoutControls />,
  //   },
  //   {
  //     title: "LinkBar with Custom Control Buttons",
  //     desc: "LinkBar with custom size and variant for control buttons",
  //     code: `
  // import React from "react";
  // import { LinkBar } from "kalki-ui";

  // const LinkBarWithCustomControlButtons = () => {
  //   return (
  //     <LinkBar
  //       links={[
  //         { name: "Product A", url: "/product-a" },
  //         { name: "Product B", url: "/product-b" },
  //         { name: "Product C", url: "/product-c" },
  //       ]}
  //       controlsSize="md"
  //       controlsVariant="primary"
  //     />
  //   );
  // };
  //     `,
  //     snippet: <LinkBarWithCustomControlButtons />,
  //   },
  {
    title: 'LinkBar with Many Links',
    desc: 'LinkBar with many links to demonstrate scrolling',
    code: `
import React,{ useState } from "react";
import { LinkBar } from "kalki-ui";

const LinkBarWithManyLinks = () => {
  const [activeUrl, setActiveUrl] = useState('/home');

  const handleUrlChange = (to: string) => {
    setActiveUrl(to);
  };

  interface Link {
    label: string;
    to: string;
    icon?: string;
  }
    
  const links: Link[] = [
    { label: 'JavaScript', to: '/javascript', icon: '✨' },
    { label: 'Python', to: '/python', icon: '🐍' },
    { label: 'Java', to: '/java' },
    { label: 'C++', to: '/cpp', icon: '💻' },
    { label: 'C#', to: '/csharp', icon: '🔧' },
    { label: 'Ruby', to: '/ruby', icon: '💎' },
    { label: 'Swift', to: '/swift' },
    { label: 'Go', to: '/go', icon: '🚀' },
    { label: 'Kotlin', to: '/kotlin' },
    { label: 'PHP', to: '/php', icon: '🐘' },
    { label: 'TypeScript', to: '/typescript' },
    { label: 'Scala', to: '/scala', icon: '📐' },
    { label: 'R', to: '/r', icon: '📊' },
    { label: 'Perl', to: '/perl' },
    { label: 'Haskell', to: '/haskell', icon: '🔢' },
    { label: 'Rust', to: '/rust', icon: '🦀' },
    { label: 'Elixir', to: '/elixir' },
    { label: 'Dart', to: '/dart', icon: '🎯' },
    { label: 'Lua', to: '/lua' },
    { label: 'Clojure', to: '/clojure', icon: '🔗' },
    { label: 'F#', to: '/fsharp' },
    { label: 'Matlab', to: '/matlab', icon: '📈' },
    { label: 'Julia', to: '/julia', icon: '📊' },
    { label: 'Erlang', to: '/erlang' },
    { label: 'Objective-C', to: '/objective-c', icon: '🍏' },
    { label: 'Groovy', to: '/groovy', icon: '🎵' },
    { label: 'Fortran', to: '/fortran' },
    { label: 'Ada', to: '/ada', icon: '🏛️' },
    { label: 'COBOL', to: '/cobol' },
    { label: 'Visual Basic', to: '/visual-basic', icon: '🖥️' },
    { label: 'Scheme', to: '/scheme' },
    { label: 'Prolog', to: '/prolog', icon: '🤖' },
    { label: 'Lisp', to: '/lisp' },
    { label: 'Shell', to: '/shell', icon: '🐚' },
    { label: 'VHDL', to: '/vhdl' },
    { label: 'Verilog', to: '/verilog', icon: '🔌' },
    { label: 'Racket', to: '/racket' },
    { label: 'Smalltalk', to: '/smalltalk', icon: '💬' },
    { label: 'Pascal', to: '/pascal' },
    { label: 'ABAP', to: '/abap', icon: '🏢' },
    { label: 'SAS', to: '/sas' },
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
          <LinkBar.Link key={index} to={"#-{link.to}"} icon={link.icon}>
            {link.label}
          </LinkBar.Link>
        ))}
      </LinkBar.Content>

      <LinkBar.Control position="right" />
    </LinkBar>
  );
};
    `,
    snippet: <LinkBarWithManyLinks />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'links',
    'array',
    'Required',
    "An array of link objects. Each object should have 'name' and 'url' properties, and optionally 'startIcon' and 'endIcon'.",
  ],
  ['activeLinkUrl', 'string', '-', 'The URL of the currently active link. This link will be highlighted.'],
  ['controlsSize', 'string', 'sm', "Size of the control buttons. Possible values are 'sm', 'md', 'lg'."],
  [
    'controlsVariant',
    'string',
    'light',
    "Variant of the control buttons. Possible values depend on your Button component's variants.",
  ],
  ['showControls', 'boolean', 'true', 'Whether to show the scroll control buttons.'],
  ['width', 'string', '100%', 'Width of the LinkBar container.'],
  ['height', 'string', '40px', 'Height of the LinkBar container.'],
];
