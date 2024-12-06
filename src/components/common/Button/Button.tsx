import React, { forwardRef } from 'react';
import { buttonVariants } from './buttonVariants';
import { ButtonProps } from './interfaces';
import { ButtonIcon } from './ButtonIcon';
import { ButtonText } from './ButtonText';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      onClick = () => {},
      variant,
      size,
      raised,
      rounded,
      className = '',
      style = {},
      children,
      ...rest
    },
    ref
  ) => {
    const buttonClasses = buttonVariants({
      variant,
      size,
      raised,
      rounded,
      className,
    });

    return (
        <button className={buttonClasses} style={style} onClick={onClick} disabled={disabled} ref={ref} {...rest}>
          {children}
        </button>
    );
  }
);

Button.displayName = 'Button';

export default Object.assign(
  Button as React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>,
  {
    Icon: ButtonIcon,
    Text: ButtonText,
  }
);

export { ButtonIcon, ButtonText };
