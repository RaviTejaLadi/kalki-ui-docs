import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronUp } from 'lucide-react';

// #region scrollButtonVariants
const scrollButtonVariants = cva(
  'fixed z-100 rounded-md shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      size: {
        xs: 'h-8 w-8 py-[0.5px] px-1',
        sm: 'h-9 w-9 py-1 px-2',
        md: 'h-10 w-10 py-1 px-2',
        lg: 'h-11 w-11 py-2 px-2',
        xl: 'h-12 w-12 py-3 px-3',
      },
      position: {
        right: 'bottom-6 right-6',
        left: 'bottom-6 left-6',
        center: 'bottom-6 left-1/2 transform -translate-x-1/2',
      },
      variant: {
        primary:
          'bg-primary hover:bg-primary/90 border-primary text-primary-foreground focus:ring-2 focus:ring-ring/40',
        secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground focus:ring-2 focus:ring-ring/30',
        success: 'bg-success hover:bg-success/90 text-success-foreground focus:ring-2 focus:ring-success/40',
        danger: 'bg-danger hover:bg-danger/90 text-danger-foreground focus:ring-2 focus:ring-danger/40',
        warning: 'bg-warning hover:bg-warning/90 text-warning-foreground focus:ring-2 focus:ring-warning/40',
        info: 'bg-info hover:bg-info/90 text-info-foreground focus:ring-2 focus:ring-info/40',
        help: 'bg-help hover:bg-help/90 text-help-foreground focus:ring-2 focus:ring-help/40',
        light: 'bg-light hover:bg-muted text-light-foreground focus:ring-2 focus:ring-ring/30',
        dark: 'bg-dark hover:bg-dark/90 text-dark-foreground focus:ring-2 focus:ring-ring/40',
        outline: 'border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      size: 'sm',
      position: 'right',
      variant: 'primary',
    },
  }
);

// #endregion

// #region types
interface ScrollToTopProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof scrollButtonVariants> {
  threshold?: number;
  smooth?: boolean;
}
// #endregion

// #region ScrollToTop
const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 400,
  smooth = true,
  size = 'sm',
  position = 'right',
  variant = 'primary',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [threshold]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={scrollButtonVariants({ size, position, variant })}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.8}) ${position === 'center' ? 'translateX(-50%)' : ''}`,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      aria-label="Scroll to top"
      {...rest}
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
};
// #endregion

// #region exports
export default ScrollToTop;
export { scrollButtonVariants };
