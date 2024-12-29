import Button from '@/components/common/Button';
import { ChevronRight, HelpCircle } from 'lucide-react';

export const ButtonPreviews = {
  basic: (
    <Button className="mx-2" variant="help">
      <Button.Icon className="mr-2">
        <HelpCircle className="size-4 animate-pulse" />
      </Button.Icon>
      <Button.Text>Help</Button.Text>
      <Button.Icon className="mr-2">
        <ChevronRight className="size-4" />
      </Button.Icon>
    </Button>
  ),
};
