
import { docsData } from "@/types/docsData";
import LinkBarWithManyLinks from "../examples/LinkBar/LinkBarWithManyLinks";

export const docs: docsData[] = [
//   {
//     title: "Basic LinkBar",
//     desc: "A simple LinkBar with default settings",
//     code: `
// import React from "react";
// import { LinkBar } from "react-ui-essentials";
    
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
// import { LinkBar, RoundedIcons } from "react-ui-essentials";
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
// import { LinkBar } from "react-ui-essentials";

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
// import { LinkBar } from "react-ui-essentials";

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
// import { LinkBar } from "react-ui-essentials";

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
    title: "LinkBar with Many Links",
    desc: "LinkBar with many links to demonstrate scrolling",
    code: `
import React from "react";
import { LinkBar } from "react-ui-essentials";

const LinkBarWithManyLinks = () => {
  let links = [
    { name: "JavaScript", url: "/javascript", startIcon: "✨" },
    { name: "Python", url: "/python", endIcon: "🐍" },
    { name: "Java", url: "/java" },
    { name: "C++", url: "/cpp", startIcon: "💻" },
    { name: "C#", url: "/csharp", endIcon: "🔧" },
    { name: "Ruby", url: "/ruby", startIcon: "💎" },
    { name: "Swift", url: "/swift" },
    { name: "Go", url: "/go", endIcon: "🚀" },
    { name: "Kotlin", url: "/kotlin" },
    { name: "PHP", url: "/php", startIcon: "🐘" },
    { name: "TypeScript", url: "/typescript" },
    { name: "Scala", url: "/scala", startIcon: "📐" },
    { name: "R", url: "/r", endIcon: "📊" },
    { name: "Perl", url: "/perl" },
    { name: "Haskell", url: "/haskell", startIcon: "🔢" },
    { name: "Rust", url: "/rust", endIcon: "🦀" },
    { name: "Elixir", url: "/elixir" },
    { name: "Dart", url: "/dart", startIcon: "🎯" },
    { name: "Lua", url: "/lua" },
    { name: "Clojure", url: "/clojure", startIcon: "🔗" },
    { name: "F#", url: "/fsharp" },
    { name: "Matlab", url: "/matlab", endIcon: "📈" },
    { name: "Julia", url: "/julia", startIcon: "📊" },
    { name: "Erlang", url: "/erlang" },
    { name: "Objective-C", url: "/objective-c", endIcon: "🍏" },
    { name: "Groovy", url: "/groovy", startIcon: "🎵" },
    { name: "Fortran", url: "/fortran" },
    { name: "Ada", url: "/ada", endIcon: "🏛️" },
    { name: "COBOL", url: "/cobol" },
    { name: "Visual Basic", url: "/visual-basic", startIcon: "🖥️" },
    { name: "Scheme", url: "/scheme" },
    { name: "Prolog", url: "/prolog", endIcon: "🤖" },
    { name: "Lisp", url: "/lisp" },
    { name: "Shell", url: "/shell", startIcon: "🐚" },
    { name: "VHDL", url: "/vhdl" },
    { name: "Verilog", url: "/verilog", endIcon: "🔌" },
    { name: "Racket", url: "/racket" },
    { name: "Smalltalk", url: "/smalltalk", startIcon: "💬" },
    { name: "Pascal", url: "/pascal" },
    { name: "ABAP", url: "/abap", endIcon: "🏢" },
    { name: "SAS", url: "/sas" },
  ];
  return <LinkBar links={links} width="100%" />;
};
    `,
    snippet: <LinkBarWithManyLinks />,
  },
];

export const columns = ["Name", "Type", "Default", "Description"];
export const rows = [
  [
    "links",
    "array",
    "Required",
    "An array of link objects. Each object should have 'name' and 'url' properties, and optionally 'startIcon' and 'endIcon'.",
  ],
  ["activeLinkUrl", "string", "-", "The URL of the currently active link. This link will be highlighted."],
  ["controlsSize", "string", "sm", "Size of the control buttons. Possible values are 'sm', 'md', 'lg'."],
  [
    "controlsVariant",
    "string",
    "light",
    "Variant of the control buttons. Possible values depend on your Button component's variants.",
  ],
  ["showControls", "boolean", "true", "Whether to show the scroll control buttons."],
  ["width", "string", "100%", "Width of the LinkBar container."],
  ["height", "string", "40px", "Height of the LinkBar container."],
];
