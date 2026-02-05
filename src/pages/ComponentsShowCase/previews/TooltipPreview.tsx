import Tooltip from '@/components/common/Tooltip/Tooltip';
import Button from '@/components/common/Button';

export const TooltipPreviews = {
  basic: (
    <Tooltip content="Tooltip message" position="top">
      <Button variant="outline" size="sm">Hover me</Button>
    </Tooltip>
  ),
};
