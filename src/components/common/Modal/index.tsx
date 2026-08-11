import React, { forwardRef, ReactNode, useCallback, useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import CloseButton from '../CloseButton';
import { cn } from '@/utils';
import { useMergedRef } from '@/hooks/useMergedRef';

// #region modalVariants
const modalVariants = cva(
  'bg-white dark:bg-[#1b202e] dark:border-gray-200/10 border rounded-md relative flex flex-col justify-start items-stretch shadow-md',
  {
    variants: {
      size: {
        sm: 'w-[350px] max-w-[350px] h-[300px]',
        md: 'w-[500px] max-w-[500px] h-[500px]',
        lg: 'w-[800px] max-w-[800px] h-[500px]',
        xl: 'w-[1040px] max-w-[1040px] h-[500px]',
        '2xl': 'w-[1140px] max-w-[1140px] h-[500px]',
        fullscreen: 'w-full h-full max-w-full max-h-full inset-0',
      },
      position: {
        top: 'top-14 self-start',
        right: 'right-14 ml-auto',
        left: 'left-14 mr-auto',
        bottom: 'bottom-14 self-end',
        center: '',
      },
    },
    defaultVariants: {
      size: 'md',
      position: 'center',
    },
  }
);
// #endregion

// #region types
interface ModalProps extends VariantProps<typeof modalVariants> {
  children?: ReactNode;
  open: boolean;
  className?: string;
  onClose?: () => void;
  overLayColor?: string;
  overlayZIndex?: number;
  modalZIndex?: number;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

interface ModalHeaderProps {
  children?: ReactNode;
  closeButton?: boolean;
  onClose?: () => void;
  height?: string;
  className?: string;
}

interface ModalTitleProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

interface ModalBodyProps {
  children?: ReactNode;
  height?: string;
  className?: string;
  id?: string;
}

interface ModalFooterProps {
  children?: ReactNode;
  height?: string;
  className?: string;
}
// #endregion

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

// #region Modal
const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      open,
      position,
      size,
      className,
      onClose,
      overLayColor = '',
      overlayZIndex = 40,
      modalZIndex = 50,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const mergedDialogRef = useMergedRef(dialogRef, ref);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && onClose) {
        onClose();
      }
    };

    const trapFocus = useCallback((e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
      );

      if (focusable.length === 0) {
        e.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }, []);

    useEffect(() => {
      if (!open) return;

      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const focusTimer = window.setTimeout(() => {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        focusable?.[0]?.focus() ?? dialogRef.current?.focus();
      }, 0);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.();
          return;
        }
        trapFocus(e);
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        window.clearTimeout(focusTimer);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = previousOverflow;
        previousFocusRef.current?.focus?.();
      };
    }, [open, onClose, trapFocus]);

    if (!open) return null;

    return (
      <div
        className="fixed inset-0 flex justify-center items-center transition-opacity"
        style={{
          backgroundColor: overLayColor || 'rgba(0, 0, 0, 0.75)',
          zIndex: overlayZIndex,
        }}
        onClick={handleOverlayClick}
        {...rest}
      >
        <div
          ref={mergedDialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          tabIndex={-1}
          className={cn(modalVariants({ size, position }), className)}
          style={{ zIndex: modalZIndex }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">{children}</div>
        </div>
      </div>
    );
  }
);

const ModalHeader = ({ children, closeButton, onClose, height, className, ...rest }: ModalHeaderProps) => {
  return (
    <div
      className={cn('flex justify-between flex-nowrap items-center p-2.5 w-full', className)}
      style={{ height }}
      {...rest}
    >
      <div>{children}</div>
      {closeButton && (
        <div>
          <CloseButton onClick={onClose} aria-label="Close modal" />
        </div>
      )}
    </div>
  );
};

const ModalTitle = ({ children, className, id, ...rest }: ModalTitleProps) => {
  return (
    <div id={id} className={cn('font-medium text-lg text-foreground', className)} {...rest}>
      {children}
    </div>
  );
};

const ModalBody = ({ children, height, className, id, ...rest }: ModalBodyProps) => {
  return (
    <div
      id={id}
      className={cn('p-2.5 w-full flex-grow overflow-auto text-muted-foreground', className)}
      style={{ height }}
      {...rest}
    >
      {children}
    </div>
  );
};

const ModalFooter = ({ children, height, className, ...rest }: ModalFooterProps) => {
  return (
    <div className={cn('flex justify-end items-center p-2.5 w-full mt-auto', className)} style={{ height }} {...rest}>
      {children}
    </div>
  );
};

Modal.displayName = 'Modal';
// #endregion

// #region export
export default Object.assign(
  Modal as React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>,
  {
    Header: ModalHeader,
    Title: ModalTitle,
    Body: ModalBody,
    Footer: ModalFooter,
  }
);

export { ModalHeader, ModalTitle, ModalBody, ModalFooter, modalVariants };
export type { ModalProps, ModalHeaderProps, ModalTitleProps, ModalBodyProps, ModalFooterProps };
// #endregion
