import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

// #region numberRendererVariants
const numberRendererVariants = cva(
  'flex items-center justify-center font-mono font-bold transition-colors border text-muted-foreground',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-900 border-gray-200',
        neon: 'bg-black text-teal-400 border-teal-400',
        metallic: 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800 border-gray-500',
        glass: 'backdrop-blur-sm bg-white/20 text-white border-white/30',
        retro: 'bg-amber-100 text-amber-800 border-amber-300',
        futuristic: 'bg-slate-900 text-emerald-300 border-emerald-400',
        plasma: 'bg-purple-900 text-fuchsia-200 border-fuchsia-500',
        digital: 'bg-blue-950 text-cyan-400 border-cyan-500',
        volcanic: 'bg-gradient-to-br from-red-800 to-orange-600 text-yellow-300 border-red-500',
        frost: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 border-blue-300',
        nature: 'bg-green-50 text-green-800 border-green-300',
        cosmic: 'bg-indigo-900 text-indigo-200 border-indigo-400',
      },
      size: {
        xs: 'w-6 h-8 text-sm',
        sm: 'w-8 h-10 text-lg',
        md: 'w-10 h-12 text-xl',
        lg: 'w-14 h-16 text-3xl',
        xl: 'w-20 h-24 text-5xl',
        xxl: 'w-24 h-32 text-6xl',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        hexagon: 'clip-path-hexagon',
        diamond: 'rotate-45',
      },
      glow: {
        true: 'shadow-lg',
        false: '',
      },
      elevation: {
        flat: '',
        raised: 'shadow-md',
        floating: 'shadow-xl',
      },
      animation: {
        none: '',
        bounce: 'animate-bounce',
        pulse: 'animate-pulse',
        flip: 'animate-flip',
      },
    },
    compoundVariants: [
      {
        variant: 'neon',
        glow: true,
        class: 'shadow-[0_0_8px_2px_rgba(110,231,183,0.6)]',
      },
      {
        variant: 'futuristic',
        glow: true,
        class: 'shadow-[0_0_12px_4px_rgba(110,231,183,0.3)]',
      },
      {
        variant: 'plasma',
        glow: true,
        class: 'shadow-[0_0_15px_3px_rgba(232,121,249,0.5)]',
      },
      {
        variant: 'digital',
        glow: true,
        class: 'shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]',
      },
      {
        variant: 'volcanic',
        glow: true,
        class: 'shadow-[0_0_14px_3px_rgba(254,240,138,0.4)]',
      },
      {
        variant: 'cosmic',
        glow: true,
        class: 'shadow-[0_0_16px_4px_rgba(165,180,252,0.5)]',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'rounded',
      glow: false,
      elevation: 'flat',
      animation: 'none',
    },
  }
);

// #endregion

// #region types
type NumberRendererProps = VariantProps<typeof numberRendererVariants> & {
  number: number | string;
  className?: string;
  animate?: boolean;
  separator?: string;
  duration?: number;
  countUp?: boolean;
  decimal?: number;
  prefix?: string;
  suffix?: string;
  staggered?: boolean;
  staggerDelay?: number;
  // Visual options
  hideSeparator?: boolean;
  separatorChar?: string;
  digitBackground?: boolean;
  // Interactive options
  onClick?: () => void;
  hoverEffect?: 'grow' | 'shrink' | 'glow' | 'shake' | 'none';
};

// #endregion

// #region NumberRenderer
const NumberRenderer: React.FC<NumberRendererProps> = ({
  number,
  variant,
  size,
  shape,
  glow,
  elevation,
  animation,
  className = '',
  duration = 2000,
  countUp = false,
  decimal = 0,
  prefix = '',
  suffix = '',
  staggered = false,
  staggerDelay = 50,
  hideSeparator = false,
  separatorChar = ',',
  digitBackground = true,
  onClick,
  hoverEffect = 'none',
}) => {
  const [displayNumber, setDisplayNumber] = useState<number | string>(countUp ? 0 : number);
  const [staggerIndexes, setStaggerIndexes] = useState<number[]>([]);
  const targetNumber = useRef<number>(typeof number === 'number' ? number : parseFloat(number.toString()) || 0);
  const startTime = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof number === 'number') {
      targetNumber.current = number;
    } else {
      targetNumber.current = parseFloat(number.toString()) || 0;
    }

    if (countUp) {
      // Begin countUp animation
      startTime.current = Date.now();
      const animateCountUp = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime.current;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = progress * targetNumber.current;

        setDisplayNumber(currentValue.toFixed(decimal));

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animateCountUp);
        }
      };
      animateCountUp();
    } else {
      setDisplayNumber(number);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [number, countUp, duration, decimal]);

  const formatNumber = useCallback(
    (value: number | string) => {
      if (typeof value === 'number') {
        return value
          .toLocaleString(undefined, {
            minimumFractionDigits: decimal,
            maximumFractionDigits: decimal,
          })
          .replace(/,/g, separatorChar);
      }
      return value.toString();
    },
    [decimal, separatorChar]
  );

  // Handle staggered animation without framer-motion
  useEffect(() => {
    if (staggered) {
      const formattedValue = formatNumber(displayNumber);
      const totalChars = formattedValue.length + (prefix ? 1 : 0) + (suffix ? 1 : 0);
      //   const indexes: number[] = [];

      // Reset all indexes
      setStaggerIndexes([]);

      // Add indexes one by one with delay
      for (let i = 0; i < totalChars; i++) {
        setTimeout(() => {
          setStaggerIndexes((prev) => [...prev, i]);
        }, i * staggerDelay);
      }
    }
  }, [displayNumber, staggered, staggerDelay, prefix, suffix, formatNumber]);

  const formattedNumber = formatNumber(displayNumber);

  // Apply the correct separator logic
  const displayChars = () => {
    const chars = [];
    const formattedWithSeparators = formattedNumber;

    if (prefix) chars.push({ char: prefix, isSeparator: true });

    for (let i = 0; i < formattedWithSeparators.length; i++) {
      const char = formattedWithSeparators[i];
      const isSeparator = char === separatorChar || char === '.' || char === ' ';

      if (isSeparator && hideSeparator) continue;

      chars.push({
        char,
        isSeparator,
      });
    }

    if (suffix) chars.push({ char: suffix, isSeparator: true });

    return chars;
  };

  // Get hover effect styles
  const getHoverStyles = () => {
    switch (hoverEffect) {
      case 'grow':
        return 'hover:scale-110 transition-transform';
      case 'shrink':
        return 'hover:scale-95 transition-transform';
      case 'glow':
        return 'hover:shadow-lg hover:brightness-125 transition-all';
      case 'shake':
        return 'hover:animate-wiggle';
      default:
        return '';
    }
  };

  const chars = displayChars();

  // Custom animation CSS for staggered reveal
  const getStaggeredAnimationStyle = (index: number) => {
    if (!staggered) return {};

    const isVisible = staggerIndexes.includes(index);

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
    };
  };

  return (
    <div className={cn('inline-flex items-center gap-1', className)} onClick={onClick}>
      {chars.map((item, index) => (
        <div
          key={index}
          style={getStaggeredAnimationStyle(index)}
          className={cn(
            !item.isSeparator && digitBackground
              ? numberRendererVariants({ variant, size, shape, glow, elevation, animation })
              : 'flex items-center justify-center',
            item.isSeparator ? 'px-1' : '',
            getHoverStyles()
          )}
        >
          {item.char}
        </div>
      ))}
    </div>
  );
};

export default NumberRenderer;
// #endregion
