import { CSSProperties, ReactNode } from 'react';

/**
 * Props for the Drawer component.
 *
 * @interface DrawerProps
 *
 * @property {('top' | 'right' | 'bottom' | 'left')} [position] - The position of the drawer. Can be 'top', 'right', 'bottom', or 'left'.
 * @property {ReactNode} children - The content to be displayed inside the drawer.
 * @property {boolean} isOpen - Indicates whether the drawer is open or closed.
 * @property {() => void} onClose - Callback function to be called when the drawer is requested to be closed.
 * @property {string} [width] - The width of the drawer. Optional.
 * @property {string} [height] - The height of the drawer. Optional.
 * @property {string} [overLayColor] - The color of the overlay behind the drawer. Optional.
 * @property {string} [className] - Additional CSS class names to apply to the drawer. Optional.
 * @property {CSSProperties} [style] - Inline styles to apply to the drawer. Optional.
 */
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
}

/**
 * Props for the DrawerHeader component.
 *
 * @interface DrawerHeaderProps
 *
 * @property {ReactNode} children - The content to be displayed inside the drawer header.
 * @property {boolean} [closeButton] - Optional. If true, a close button will be displayed in the header.
 * @property {() => void} [onClose] - Optional. Callback function to be called when the close button is clicked.
 * @property {string} [className] - Optional. Additional CSS class names to apply to the drawer header.
 * @property {CSSProperties} [style] - Optional. Inline styles to apply to the drawer header.
 * @property {'sm' | 'md' | 'lg'} [closeBtnSize] - Optional. Size of the close button. Can be 'sm', 'md', or 'lg'.
 */
interface DrawerHeaderProps {
  children: ReactNode;
  closeButton?: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  closeBtnSize?: 'sm' | 'md' | 'lg';
}

/**
 * Props for the DrawerTitle component.
 *
 * @interface DrawerTitleProps
 * @property {ReactNode} children - The content to be displayed within the drawer title.
 * @property {string} [className] - Optional additional CSS class names to apply to the drawer title.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the drawer title.
 */
interface DrawerTitleProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Props for the DrawerBody component.
 *
 * @interface DrawerBodyProps
 * @property {ReactNode} children - The content to be displayed inside the drawer body.
 * @property {string} [className] - Optional additional CSS class names to apply to the drawer body.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the drawer body.
 */
interface DrawerBodyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export type { DrawerProps, DrawerHeaderProps, DrawerTitleProps, DrawerBodyProps };
