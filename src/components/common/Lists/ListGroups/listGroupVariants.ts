import { cva } from 'class-variance-authority';
import { VariantType } from './type';

export const listGroupVariants = cva('flex flex-col rounded-md shadow-xs overflow-hidden bg-white border', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
    },
    variant: {
      primary: 'border-blue-200',
      secondary: 'border-gray-200',
      success: 'border-green-200',
      danger: 'border-red-200',
      warning: 'border-yellow-200',
      info: 'border-cyan-200',
      light: 'border-gray-100',
      dark: 'border-gray-700 bg-gray-800',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'primary',
  },
});

export const itemVariants: Record<VariantType, string> = {
  primary: 'hover:bg-blue-50 focus:bg-blue-100 active:bg-blue-200',
  secondary: 'hover:bg-gray-50 focus:bg-gray-100 active:bg-gray-200',
  success: 'hover:bg-green-50 focus:bg-green-100 active:bg-green-200',
  danger: 'hover:bg-red-50 focus:bg-red-100 active:bg-red-200',
  warning: 'hover:bg-yellow-50 focus:bg-yellow-100 active:bg-yellow-200',
  info: 'hover:bg-cyan-50 focus:bg-cyan-100 active:bg-cyan-200',
  light: 'hover:bg-gray-50 focus:bg-gray-100 active:bg-gray-200',
  dark: 'hover:bg-gray-700 focus:bg-gray-600 active:bg-gray-500',
};

export const textVariants: Record<VariantType, string> = {
  primary: 'text-blue-800',
  secondary: 'text-gray-800',
  success: 'text-green-800',
  danger: 'text-red-800',
  warning: 'text-yellow-800',
  info: 'text-teal-800',
  light: 'text-gray-800',
  dark: 'text-white',
};
