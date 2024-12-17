import { cn } from '@/utils';
import { forwardRef, useContext, useMemo } from 'react';
import { HighlightContext } from './HighlightContext';
import { TextHighlighterTextProps } from './types';
import { TextHighlighterVariants } from './TextHighlighterVariants';

export const TextHighlighterText = forwardRef<HTMLSpanElement, TextHighlighterTextProps>(
  ({ children, variant, emphasis, sizing, color, className, style, ...props }, ref) => {
    const context = useContext(HighlightContext);
    const finalVariant = variant || context.defaultVariant;
    const finalEmphasis = emphasis || context.defaultEmphasis;
    const finalSizing = sizing || context.defaultSizing;

    const highlightStyle = useMemo(() => {
      if (!color) return style;

      const baseStyle = { ...style };
      switch (finalVariant) {
        case 'outlined':
        case 'underline':
        case 'minimal':
          baseStyle.borderColor = color;
          baseStyle.color = color;
          break;
        case 'gradient':
          baseStyle.backgroundImage = `linear-gradient(to right, ${color}, ${color}cc)`;
          break;
        case 'glass':
          baseStyle.backgroundColor = `${color}33`;
          baseStyle.color = color;
          baseStyle.borderColor = `${color}33`;
          break;
        default:
          baseStyle.backgroundColor = color;
      }
      return baseStyle;
    }, [color, finalVariant, style]);

    return (
      <span
        ref={ref}
        className={cn(
          TextHighlighterVariants({
            variant: finalVariant,
            emphasis: finalEmphasis,
            sizing: finalSizing,
          }),
          className
        )}
        style={highlightStyle}
        {...props}
      >
        {children}
      </span>
    );
  }
);

TextHighlighterText.displayName = 'TextHighlighterText';
