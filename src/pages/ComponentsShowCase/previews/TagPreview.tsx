import Tag from '@/components/common/Tag';

export const TagPreviews = {
  basic: (
    <div className="flex flex-wrap gap-2">
      <Tag variant="primary" size="sm">
        <Tag.Text>React</Tag.Text>
      </Tag>
      <Tag variant="success" size="sm">
        <Tag.Text>TypeScript</Tag.Text>
        <Tag.Close onClick={() => {}} />
      </Tag>
      <Tag variant="info" size="sm">
        <Tag.Text>Kalki UI</Tag.Text>
      </Tag>
    </div>
  ),
};
