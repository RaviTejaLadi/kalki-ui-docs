import { Tag, TagClose, TagText } from 'kalki-ui';
export const TagPreviews = {
  basic: (
    <div className="flex flex-wrap gap-2">
      <Tag variant="primary" size="sm">
        <TagText>React</TagText>
      </Tag>
      <Tag variant="success" size="sm">
        <TagText>TypeScript</TagText>
        <TagClose onClick={() => {}} />
      </Tag>
      <Tag variant="info" size="sm">
        <TagText>Kalki UI</TagText>
      </Tag>
    </div>
  ),
};
