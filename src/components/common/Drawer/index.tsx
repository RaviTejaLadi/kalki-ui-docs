import React, { CSSProperties, forwardRef, ReactNode, useCallback, useEffect, useRef } from 'react';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import CloseButton from '../CloseButton';
import { useMergedRef } from '@/hooks/useMergedRef';

// #region drawerVariants
const drawerVariants = cva(
  'fixed z-50 p-4 bg-white shadow-lg border bg-background dark:bg-[#1b202e] text-foreground dark:border-gray-200/10 overflow-y-auto flex flex-col transition-all duration-300 ease-in-out transform',
  {
    variants: {
      position: {
        top: 'top-0 left-0 -translate-y-full w-full',
        right: 'top-0 right-0 translate-x-full h-full',
        bottom: 'bottom-0 left-0 translate-y-full w-full',
        left: 'top-0 left-0 -translate-x-full h-full',
      },
      open: {
        true: 'transform-none',
        false: '',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  }
);
// #endregion

// #region types
interface DrawerProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  width?: string;
  height?: string;
  overLayColor?: string;
  className?: string;
  style?: CSSProperties;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

interface DrawerHeaderProps {
  children: ReactNode;
  closeButton?: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  closeBtnSize?: 'sm' | 'md' | 'lg';
}

interface DrawerTitleProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

interface DrawerBodyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
// #endregion

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

// #region Drawer Component
const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      position = 'right',
      children,
      isOpen,
      onClose,
      width = '300px',
      height = '300px',
      overLayColor = '',
      className,
      style,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRef(panelRef, ref);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const trapFocus = useCallback((e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
      );

      if (focusable.length === 0) {
        e.preventDefault();
        panelRef.current.focus();
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
      if (!isOpen) return;

      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const focusTimer = window.setTimeout(() => {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        focusable?.[0]?.focus() ?? panelRef.current?.focus();
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
    }, [isOpen, onClose, trapFocus]);

    return (
      <div {...rest}>
        <div
          className={cn(
            'fixed z-40 inset-0 bg-black/80 transition-opacity',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          style={overLayColor ? { backgroundColor: overLayColor } : undefined}
          onClick={onClose}
          aria-hidden={!isOpen}
        />
        <div
          ref={mergedRef}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          tabIndex={-1}
          className={cn(drawerVariants({ position, open: isOpen }), className)}
          style={{
            width: position === 'left' || position === 'right' ? width : '100%',
            height: position === 'top' || position === 'bottom' ? height : '100%',
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

const DrawerTitle = forwardRef<HTMLDivElement, DrawerTitleProps>(({ children, className, style, id, ...rest }, ref) => {
  return (
    <div ref={ref} id={id} className={cn('text-xl font-semibold', className)} style={style} {...rest}>
      {children}
    </div>
  );
});

DrawerTitle.displayName = 'DrawerTitle';

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, closeButton, onClose, className, closeBtnSize = 'sm', style, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('flex justify-between items-center px-4 py-2', className)} style={style} {...rest}>
        <div>{children}</div>
        {closeButton && <CloseButton size={closeBtnSize} onClick={onClose} aria-label="Close drawer" />}
      </div>
    );
  }
);

DrawerHeader.displayName = 'DrawerHeader';

const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(({ children, className, style, ...rest }, ref) => {
  return (
    <div ref={ref} className={cn('px-4 py-2', className)} style={style} {...rest}>
      {children}
    </div>
  );
});

DrawerBody.displayName = 'DrawerBody';
// #endregion

// #region Export
export default Object.assign(
  Drawer as React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>,
  {
    Title: DrawerTitle,
    Header: DrawerHeader,
    Body: DrawerBody,
  }
);
export { DrawerTitle, DrawerHeader, DrawerBody, drawerVariants };
export type { DrawerProps, DrawerHeaderProps, DrawerTitleProps, DrawerBodyProps };
// #endregion
