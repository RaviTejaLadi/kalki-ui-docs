import { Dropdown } from 'kalki-ui';

export const DropdownPreviews = {
  basic: (
    <Dropdown placeholder="Choose..." className="w-[180px]">
      <Dropdown.Trigger>
        <Dropdown.Value />
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="a">Option A</Dropdown.Item>
        <Dropdown.Item value="b">Option B</Dropdown.Item>
        <Dropdown.Item value="c">Option C</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};
