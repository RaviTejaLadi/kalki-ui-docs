import { Toggle, ToggleGroup, ToggleGroupItem } from '@/components/common/Toggle';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['pressed', 'boolean', '-', 'Controlled pressed state for Toggle.'],
  ['onPressedChange', '(pressed: boolean) => void', '-', 'Callback fired when the pressed state changes.'],
  ['variant', "'default' | 'outline'", 'default', 'Visual style of the toggle.'],
  ['size', "'sm' | 'md' | 'lg'", 'md', 'Size of the toggle.'],
  ['type', "'single' | 'multiple'", 'multiple', 'Selection mode for ToggleGroup.'],
  ['value', 'string[]', '-', 'Controlled selected values for ToggleGroup.'],
  ['defaultValue', 'string[]', '[]', 'Initial selected values for uncontrolled ToggleGroup.'],
  ['onValueChange', '(value: string[]) => void', '-', 'Callback when ToggleGroup selection changes.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Toggle',
    desc: 'A standalone toggle button that can be pressed on or off.',
    code: `
import { Toggle } from "kalki-ui";

export default function BasicToggle() {
  return <Toggle>Toggle</Toggle>;
}
`,
    snippet: <Toggle>Toggle</Toggle>,
  },
  {
    title: 'Toggle Group (Multiple)',
    desc: 'Group related toggles and allow selecting multiple options.',
    code: `
import { ToggleGroup, ToggleGroupItem } from "kalki-ui";

export default function MultipleToggleGroup() {
  return (
    <ToggleGroup type="multiple" defaultValue={["italic"]}>
      <ToggleGroupItem value="bold" aria-label="Bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">U</ToggleGroupItem>
    </ToggleGroup>
  );
}
`,
    snippet: (
      <ToggleGroup type="multiple" defaultValue={['italic']}>
        <ToggleGroupItem value="bold" aria-label="Bold">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          I
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          U
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  },
  {
    title: 'Toggle Group (Single)',
    desc: 'Restrict selection to a single option within the group.',
    code: `
import { ToggleGroup, ToggleGroupItem } from "kalki-ui";

export default function SingleToggleGroup() {
  return (
    <ToggleGroup type="single" defaultValue={["center"]}>
      <ToggleGroupItem value="left" aria-label="Align left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}
`,
    snippet: (
      <ToggleGroup type="single" defaultValue={['center']}>
        <ToggleGroupItem value="left" aria-label="Align left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  },
];
