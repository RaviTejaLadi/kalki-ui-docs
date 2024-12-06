// SectionHeader.tsx
import React, { createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

type Size = 'sm' | 'md' | 'lg';

// Context for sharing size prop
type SectionHeaderContextType = {
  size: Size;
};

const SectionHeaderContext = createContext<SectionHeaderContextType>({
  size: 'md',
});

const useSectionHeaderContext = () => {
  const context = useContext(SectionHeaderContext);
  if (!context) {
    throw new Error('Section Header compound components cannot be rendered outside the Section Header component');
  }
  return context;
};

const sectionHeaderVariants = cva('w-full flex', {
  variants: {
    variant: {
      default: 'bg-background border-b',
      transparent: 'bg-transparent',
      outline: 'bg-background border rounded-lg shadow-sm',
    },
    size: {
      sm: 'p-4 gap-3',
      md: 'p-6 py-4 gap-4',
      lg: 'px-8 py-4 gap-4',
    },
    align: {
      left: 'flex-col items-start',
      center: 'flex-col items-center text-center',
      right: 'flex-col items-end text-right',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    align: 'left',
  },
});

const titleVariants: Record<Size, string> = {
  sm: 'text-lg font-semibold tracking-tight',
  md: 'text-xl font-semibold tracking-tight',
  lg: 'text-2xl font-semibold tracking-tight',
};

const subtitleVariants: Record<Size, string> = {
  sm: 'text-xs text-muted-foreground',
  md: 'text-sm text-muted-foreground',
  lg: 'text-md text-muted-foreground',
};

// Props interfaces
interface SectionHeaderRootProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: VariantProps<typeof sectionHeaderVariants>['variant'];
  size?: Size;
  align?: VariantProps<typeof sectionHeaderVariants>['align'];
  asChild?: boolean;
}

interface SectionHeaderTitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'size'> {}

interface SectionHeaderSubTitleProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'size'> {}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderRootProps>(
  ({ className, variant, size = 'md', align, children, ...props }, ref) => {
    return (
      <SectionHeaderContext.Provider value={{ size }}>
        <div ref={ref} className={cn(sectionHeaderVariants({ variant, size, align, className }))} {...props}>
          {children}
        </div>
      </SectionHeaderContext.Provider>
    );
  }
);
SectionHeader.displayName = 'SectionHeader';

const SectionHeaderTitle = React.forwardRef<HTMLHeadingElement, SectionHeaderTitleProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useSectionHeaderContext();
    return (
      <h2 ref={ref} className={cn(titleVariants[size], className)} {...props}>
        {children}
      </h2>
    );
  }
);
SectionHeaderTitle.displayName = 'SectionHeaderTitle';

const SectionHeaderSubTitle = React.forwardRef<HTMLParagraphElement, SectionHeaderSubTitleProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useSectionHeaderContext();
    return (
      <p ref={ref} className={cn(subtitleVariants[size], className)} {...props}>
        {children}
      </p>
    );
  }
);
SectionHeaderSubTitle.displayName = 'SectionHeaderSubTitle';

const SectionHeaderRoot = Object.assign(SectionHeader, {
  Title: SectionHeaderTitle,
  SubTitle: SectionHeaderSubTitle,
});

export {
  SectionHeaderRoot as SectionHeader,
  type SectionHeaderRootProps as SectionHeaderProps,
  type SectionHeaderTitleProps,
  type SectionHeaderSubTitleProps,
};
