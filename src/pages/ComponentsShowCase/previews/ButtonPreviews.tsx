import { Button, ButtonIcon, ButtonText } from 'kalki-ui';
import { ChevronRight, HelpCircle } from 'lucide-react';

export const ButtonPreviews = {
  basic: (
    <Button className="mx-2" variant="help">
      <ButtonIcon className="mr-2">
        <HelpCircle className="size-4 animate-pulse" />
      </ButtonIcon>
      <ButtonText>Help</ButtonText>
      <ButtonIcon className="mr-2">
        <ChevronRight className="size-4" />
      </ButtonIcon>
    </Button>
  ),
};
