import React from "react";
interface NpmProps extends React.SVGProps<SVGSVGElement> {}

const Npm: React.FC<NpmProps> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="M0 10v10h9v2h7v-2h16V10z" fill="#CB3837" />
    <path
      d="M5.462 12H2v6h3.462v-4.389h1.761V18h1.762v-6zm5.284 0v8h3.523v-2h3.462v-6zm5.224 4.389h-1.701V13.61h1.7zM22.954 12h-3.462v6h3.462v-4.389h1.762V18h1.761v-4.389h1.762V18H30v-6z"
      fill="#fff"
    />
  </svg>
);
export default Npm;
