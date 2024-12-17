import { cva } from 'class-variance-authority';

export const alertVariants = cva('rounded-md p-4 w-full mb-4 border', {
  variants: {
    variant: {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      secondary: 'bg-gray-100 text-gray-700 border-gray-200',
      success: 'bg-green-100 text-green-700 border-green-200',
      info: 'bg-teal-100 text-teal-700 border-teal-200',
      warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      danger: 'bg-red-100 text-red-700 border-red-200',
      help: 'bg-purple-100 text-purple-700 border-purple-200',
      light: 'bg-gray-50 text-gray-800 border-gray-100',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
