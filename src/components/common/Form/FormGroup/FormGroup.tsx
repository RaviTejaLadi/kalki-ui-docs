import { cn } from '@/utils';
import { CSSProperties, forwardRef, ReactNode } from 'react';
import Box from '../../Box';

interface FormGroupProps {
  children: ReactNode;
  className?: string;
  margin?: string;
  padding?: string;
  style?: CSSProperties;
  [key: string]: any;
}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ children, className = '', style = {}, margin = '0 0 20px 0', padding, ...props }, ref) => {
    return (
      <Box ref={ref} margin={margin} padding={padding} className={cn(className)} style={style} {...props}>
        {children}
      </Box>
    );
  }
);

FormGroup.displayName = 'FormGroup';

export default FormGroup;
