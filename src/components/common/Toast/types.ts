import React, { ReactNode } from 'react';

/**
 * Available toast variants that determine the visual style
 */
export type ToastVariant = 
  | 'default'   // White background with dark text
  | 'primary'   // Blue theme
  | 'secondary' // Gray theme
  | 'success'   // Green theme
  | 'info'      // Cyan theme
  | 'warning'   // Yellow theme
  | 'danger'    // Red theme
  | 'help'      // Purple theme
  | 'light'     // Light gray theme
  | 'dark';     // Dark theme

/**
 * Properties for individual toast notifications
 */
export interface ToastProps {
  /** Unique identifier for the toast */
  id: number;
  /** Content to display in the toast. Can be text, JSX, or any valid React node */
  message: ReactNode;
  /** Visual style variant of the toast */
  variant?: ToastVariant;
  /** Time in milliseconds before the toast auto-closes. Set to false to disable auto-close */
  autoClose?: number | false;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Icon to display at the start of the toast */
  icon?: ReactNode;
  /** Whether to use more rounded corners */
  rounded?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Callback function to close the toast */
  onClose: () => void;
}

/**
 * Position options for the toast container
 */
export type ToastPosition = 
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';

/**
 * Properties for the toast container component
 */
export interface ToastContainerProps {
  /** Position of the toast container on the screen */
  position?: ToastPosition;
  /** Whether to show close buttons on all toasts */
  showClose?: boolean;
  /** Whether to use more rounded corners on all toasts */
  rounded?: boolean;
  /** Default icon to show on all toasts */
  icon?: ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
  /** Inline styles for the container */
  style?: React.CSSProperties;
}

/**
 * Context value shape for the toast system
 */
export interface ToastContextValue {
  /** Array of active toasts */
  toasts: ToastProps[];
  /** Function to add a new toast */
  addToast: (toast: Omit<ToastProps, 'id' | 'onClose'>) => void;
  /** Function to remove a specific toast */
  removeToast: (id: number) => void;
}