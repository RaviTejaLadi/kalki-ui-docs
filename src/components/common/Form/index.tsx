import React, { forwardRef, ReactNode, FormEvent, CSSProperties } from 'react';
import FormGroup from './FormGroup/FormGroup';
import Label from './Label/Label';
import Input from './Input/Input';
import Textarea from './Textarea/Textarea';
import Checkbox from './Checkbox/Checkbox';
import Radio from './Radio/Radio';
import Submit from './Submit/Submit';
import { cn } from '@/utils';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: () => void;
  className?: string;
  style?: CSSProperties;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, className = '', style = {}, ...rest }, ref) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit();
    };

    return (
      <form ref={ref} className={cn('space-y-2',className)} style={style} onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    );
  }
);

export default Object.assign(
  Form as React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>,
  {
    Group: FormGroup,
    Label: Label,
    Input: Input,
    Textarea: Textarea,
    Checkbox: Checkbox,
    Radio: Radio,
    Submit: Submit,
  }
);

export { FormGroup, Label, Input, Textarea, Checkbox, Radio, Submit };
