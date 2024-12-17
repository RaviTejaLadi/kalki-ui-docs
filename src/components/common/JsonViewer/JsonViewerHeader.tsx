import { Fragment } from 'react/jsx-runtime';
import { JsonViewerHeaderProps } from './interface';
import { useJsonViewer } from './JsonViewer';
import Button, { ButtonIcon } from '../Button';
import { cn } from '@/utils';

export const JsonViewerHeader = ({
  children,
  className,
}: JsonViewerHeaderProps) => {
  const { copyToClipboard, copyButtonText } = useJsonViewer();

  return (
    <Fragment>
      <div className="flex items-center justify-between px-2 py-1">
        <div className={cn('text-lg font-semibold text-left', className)}>
          {children}
        </div>
        <Button variant="light" size="xs" onClick={copyToClipboard}>
          <ButtonIcon>{copyButtonText}</ButtonIcon>
        </Button>
      </div>
    </Fragment>
  );
};
