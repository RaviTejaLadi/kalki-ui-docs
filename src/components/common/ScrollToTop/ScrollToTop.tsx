import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronUp } from 'lucide-react';

const buttonVariants = cva(
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
          'bg-blue-500 hover:bg-blue-600 text-white focus:ring-2 focus:ring-blue-300',
        secondary:
          'bg-gray-500 hover:bg-gray-600 text-white focus:ring-2 focus:ring-gray-300',
        success:
          'bg-green-500 hover:bg-green-600 text-white focus:ring-2 focus:ring-green-300',
        danger:
          'bg-red-500 hover:bg-red-600 text-white focus:ring-2 focus:ring-red-300',
        warning:
          'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-2 focus:ring-yellow-300',
        info: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-2 focus:ring-cyan-300',
        help: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-2 focus:ring-purple-300',
        light:
          'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-2 focus:ring-gray-200',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-2 focus:ring-gray-600',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      size: 'sm',
      position: 'right',
      variant: 'primary',
    },
  }
);

interface ScrollToTopProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  threshold?: number;
  smooth?: boolean;
}

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
      className={buttonVariants({ size, position, variant })}
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

export default ScrollToTop;
