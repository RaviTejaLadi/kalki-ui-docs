import Select from '@/components/common/Select';

export const SelectPreviews = {
  basic: (
    <Select placeholder="Choose..." className="w-[180px]">
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="a">Option A</Select.Item>
        <Select.Item value="b">Option B</Select.Item>
        <Select.Item value="c">Option C</Select.Item>
      </Select.Content>
    </Select>
  ),
};
