import { Toggle, ToggleGroup, ToggleGroupItem } from '@/components/common/Toggle';

export const TogglePreviews = {
  basic: (
    <div className="flex flex-col gap-4">
      <Toggle>Toggle</Toggle>
      <ToggleGroup type="multiple" defaultValue={['italic']}>
        <ToggleGroupItem value="bold" aria-label="Bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">I</ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">U</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
