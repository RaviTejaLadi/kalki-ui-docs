import * as React from 'react';

interface YarnProps extends React.SVGProps<SVGSVGElement> {
  className: string;
}

const Yarn: React.FC<YarnProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="M128 0C57.328 0 0 57.328 0 128s57.328 128 128 128 128-57.328 128-128S198.672 0 128 0" fill="#368FB9" />
    <path />
  </svg>
);
export default Yarn;
