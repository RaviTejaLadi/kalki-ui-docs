import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { Info, AlertCircle, AlertTriangle, CheckCircle, HelpCircle, Star, BellRing, LucideIcon } from 'lucide-react';

const descriptionVariants = cva(
  // Base styles
  'block font-normal transition-colors duration-200',
  {
    variants: {
      variant: {
        default: 'text-gray-500',
        info: 'text-blue-600 bg-blue-50 border border-blue-100 rounded-md',
        warning: 'text-amber-600 bg-amber-50 border border-amber-100 rounded-md',
        error: 'text-red-600 bg-red-50 border border-red-100 rounded-md',
        success: 'text-green-600 bg-green-50 border border-green-100 rounded-md',
        muted: 'text-gray-400 italic',
        highlight: 'text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md',
        accent: 'text-purple-600 bg-purple-50 border border-purple-100 rounded-md',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      padding: {
        default: 'py-0 px-0',
        relaxed: 'py-1 px-2',
        spacious: 'py-2 px-3',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
      },
      alignment: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    compoundVariants: [
      {
        variant: ['info', 'warning', 'error', 'success', 'highlight', 'accent'],
        padding: 'default',
        class: 'py-1 px-2',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'sm',
      padding: 'default',
      weight: 'normal',
      alignment: 'left',
    },
  }
);

// Define the variant type based on the variants object
type VariantType = NonNullable<VariantProps<typeof descriptionVariants>['variant']>;
type SizeType = NonNullable<VariantProps<typeof descriptionVariants>['size']>;

// Icon mapping with proper typing
const variantIcons: Record<VariantType, LucideIcon> = {
  default: HelpCircle,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
  muted: Info,
  highlight: Star,
  accent: BellRing,
};

// Icon sizes with proper typing
const iconSizes: Record<SizeType, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
};

interface FormDescriptionProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof descriptionVariants> {
  id?: string;
  showIcon?: boolean;
  isAnimated?: boolean;
}

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  (
    {
      className,
      children,
      variant = 'default',
      size = 'sm',
      padding,
      weight,
      alignment,
      showIcon = false,
      isAnimated,
      ...props
    },
    ref
  ) => {
    // Get the icon component safely
    const Icon = variant ? variantIcons[variant] : variantIcons.default;
    const iconSize = size ? iconSizes[size] : iconSizes.sm;

    const animationClass = isAnimated ? 'animate-fadeIn transition-all duration-200 ease-in-out' : '';

    return (
      <p
        ref={ref}
        className={cn(
          descriptionVariants({
            variant,
            size,
            padding,
            weight,
            alignment,
          }),
          'flex items-start gap-1.5',
          animationClass,
          className
        )}
        {...props}
      >
        {showIcon && Icon && <Icon size={iconSize} className="flex-shrink-0 mt-0.5" aria-hidden="true" />}
        <span>{children}</span>
      </p>
    );
  }
);

FormDescription.displayName = 'FormDescription';

export { FormDescription, type FormDescriptionProps };
