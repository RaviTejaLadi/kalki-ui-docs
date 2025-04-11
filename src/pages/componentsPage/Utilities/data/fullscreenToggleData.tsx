import FullScreenToggle from '@/components/common/FullScreenToggle';
import { Heading } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Website FullScreenToggle',
    desc: 'A simple implementation of the FullScreenToggle in the website header',
    code: `
      <header className=" w-[900px] flex justify-between items-center px-4 py-2 border dark:border-gray-200/10 rounded-lg">
        <Heading as="h5">My Website</Heading>
        <FullScreenToggle className="text-sm">Toggle Fullscreen</FullScreenToggle>
      </header>
      `,
    snippet: (
      <header className=" w-[900px] flex justify-between items-center px-4 py-2 border dark:border-gray-200/10 rounded-lg">
        <Heading as="h5">My Website</Heading>
        <FullScreenToggle className="text-sm">Toggle Fullscreen</FullScreenToggle>
      </header>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['size', 'string', 'sm', 'Defines size of the button. [sm, md, lg, xl, 2xl] '],
  [
    'variant',
    'string',
    'primary',
    'It specifies the visual style of the badge. [ primary, secondary, success, danger, warning, info, help, light, dark]',
  ],
  ['children', 'node', 'null', 'Used to get the child elements of the component.'],
  ['className', 'string', 'null', 'to declare class of button component.'],
];
