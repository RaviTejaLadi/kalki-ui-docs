import { Badge } from 'kalki-ui';
export const BadgePreviews = {
  basic: (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success" pill>
        Success
      </Badge>
      <Badge variant="danger" size="sm">
        Danger
      </Badge>
    </div>
  ),
};
