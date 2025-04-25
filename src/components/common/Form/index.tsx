import React, { forwardRef, ReactNode, CSSProperties, FormEvent } from 'react';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Submit from './Submit';
import { cn } from '@/utils';
import Slider from './Slider';
import FileInput from './FileInput';
import Select from './Select';
import Switch from './Switch';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
  style?: CSSProperties;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, className = '', style = {}, ...rest }, ref) => {
    return (
      <form ref={ref} className={cn('space-y-2', className)} style={style} onSubmit={onSubmit} {...rest}>
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';

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
    Slider: Slider,
    Switch: Switch,
    Select: Select,
    FileInput: FileInput,
  }
);

export { FormGroup, Label, Input, Textarea, Checkbox, Radio, Slider, Select, Switch, FileInput, Submit };
