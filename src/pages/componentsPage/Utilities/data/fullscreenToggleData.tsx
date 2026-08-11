import FullScreenToggle from '@/components/common/FullScreenToggle';
import { Heading } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Website FullScreenToggle',
    desc: 'A simple implementation of the FullScreenToggle in the website header',
    code: `
import { FullScreenToggle, Heading } from "kalki-ui";

export default function Example() {
  return (
    <header className=" w-[900px] flex justify-between items-center px-4 py-2 border dark:border-gray-200/10 rounded-lg">
      <Heading as="h5">My Website</Heading>
      <FullScreenToggle className="text-sm">Toggle Fullscreen</FullScreenToggle>
    </header>
  );
}
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
  ['size', "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", "'xs'", 'Defines the size of the toggle button.'],
  [
    'variant',
    "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'help' | 'light' | 'dark'",
    "'light'",
    'Specifies the visual style of the toggle button.',
  ],
  ['children', 'node', '-', 'Optional label text rendered beside the fullscreen icon.'],
  ['className', 'string', '-', 'Additional CSS classes for the toggle button.'],
];
