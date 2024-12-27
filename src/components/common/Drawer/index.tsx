import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import type { DrawerProps, DrawerHeaderProps, DrawerTitleProps, DrawerBodyProps } from './types';
import { DrawerTitle } from './DrawerTitle';
import { DrawerHeader } from './DrawerHeader';
import { DrawerBody } from './DrawerBody';
import { drawerVariants } from './drawerVariants';

/**
 * A Drawer component that slides in from a specified position and can be controlled via props.
 *
 * @param {Object} props - The properties object.
 * @param {'left' | 'right' | 'top' | 'bottom'} [props.position='right'] - The position from which the drawer slides in.
 * @param {React.ReactNode} props.children - The content to be displayed inside the drawer.
 * @param {boolean} props.isOpen - A boolean indicating whether the drawer is open or closed.
 * @param {() => void} props.onClose - A callback function to be called when the overlay is clicked to close the drawer.
 * @param {string | number} props.width - The width of the drawer when positioned on the left or right.
 * @param {string | number} props.height - The height of the drawer when positioned on the top or bottom.
 * @param {string} [props.overLayColor=''] - The color of the overlay background.
 * @param {string} [props.className] - Additional class names to apply to the drawer.
 * @param {React.CSSProperties} [props.style] - Additional styles to apply to the drawer.
 * @param {React.Ref<HTMLDivElement>} ref - A ref to be attached to the drawer's root element.
 * @param {Object} rest - Additional props to be spread onto the drawer's root element.
 *
 * @returns {JSX.Element} The rendered Drawer component.
 */
const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    { position = 'right', children, isOpen, onClose, width="300px", height="300px", overLayColor = '', className, style, ...rest },
    ref
  ) => {
    return (
      <div ref={ref} {...rest}>
        <div
          className={`fixed  z-50 inset-0 bg-black/80 bg-opacity-10 transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundColor: overLayColor }}
          onClick={onClose}
        />
        <div
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

export default Object.assign(
  Drawer as React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDialogElement>>,
  {
    Title: DrawerTitle,
    Header: DrawerHeader,
    Body: DrawerBody,
  }
);
export { DrawerTitle, DrawerHeader, DrawerBody, DrawerProps, DrawerHeaderProps, DrawerTitleProps, DrawerBodyProps };
