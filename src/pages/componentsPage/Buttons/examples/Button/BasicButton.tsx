import Button from '@/components/common/Button';
import { useToast } from 'kalki-ui-toast';
import { BoxIcon } from 'lucide-react';

const BasicButton = () => {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      message: 'Button clicked!',
      variant: 'default',
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    });
  };
  return <Button onClick={showToast}>Click me</Button>;
};

export default BasicButton;
