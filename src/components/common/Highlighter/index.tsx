import { cn } from '@/utils';
import React, { forwardRef, useMemo } from 'react';
import { highlightedTextVariants } from './highlightedTextVariants';
import { defaultColors, HighlighterProps } from './types';

/**
 * Highlighter component that highlights specified text within its children.
 * 
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be highlighted.
 * @param {string[]} [props.highlightText=[]] - Array of text strings to be highlighted.
 * @param {string[]} [props.colorsList=[]] - List of colors to use for highlighting.
 * @param {string} [props.className=''] - Additional class names for the container span.
 * @param {string} [props.textClassName=''] - Additional class names for the text spans.
 * @param {'solid' | 'outlined' | 'underline' | 'minimal' | 'gradient' | 'glass'} [props.variant='solid'] - The variant of highlighting style.
 * @param {'low' | 'medium' | 'high'} [props.emphasis='medium'] - The emphasis level of the highlighting.
 * @param {'inherit' | 'small' | 'medium' | 'large'} [props.sizing='inherit'] - The sizing of the highlighted text.
 * @param {React.CSSProperties} [props.style] - Additional inline styles for the container span.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to be forwarded to the container span.
 * @param {Object} rest - Additional properties to be spread onto the container span.
 * 
 * @returns {JSX.Element} The Highlighter component.
 */
const Highlighter = forwardRef<HTMLSpanElement, HighlighterProps>(
  (
    {
      children,
      highlightText = [],
      colorsList = [],
      className = '',
      textClassName = '',
      variant = 'solid',
      emphasis = 'medium',
      sizing = 'inherit',
      style,
      ...rest
    },
    ref
  ) => {
    const highlightedText = useMemo(() => {
      if (!highlightText.length) {
        return children;
      }

      const colors = [...colorsList, ...defaultColors];
      const colorMap = Object.fromEntries(
        highlightText.map((text, index) => [
          text,
          colors[index % colors.length],
        ])
      );

      const escapeRegExp = (str: string): string =>
        str?.toString()?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') || '';
      const highlightRegex = new RegExp(
        `\\b(${highlightText.map(escapeRegExp).join('|')})\\b`,
        'gi'
      );

      return children.split(highlightRegex).map((part, index) => {
        const baseColor = colorMap[part];

        if (baseColor) {
          let style: React.CSSProperties = {};

          switch (variant) {
            case 'outlined':
            case 'underline':
            case 'minimal':
              style = { borderColor: baseColor, color: baseColor };
              break;
            case 'gradient':
              style = {
                backgroundImage: `linear-gradient(to right, ${baseColor}, ${baseColor}cc)`,
              };
              break;
            case 'glass':
              style = {
                backgroundColor: `${baseColor}33`,
                color: baseColor,
                borderColor: `${baseColor}33`,
              };
              break;
            default:
              style = { backgroundColor: baseColor };
          }

          return (
            <span
              key={index}
              className={cn(
                highlightedTextVariants({ variant, emphasis, sizing }),
                'transform-gpu px-1.5 py-0'
              )}
              style={style}
            >
              {part}
            </span>
          );
        }

        return (
          <span key={index} className={cn('align-baseline', textClassName)}>
            {part}
          </span>
        );
      });
    }, [
      children,
      highlightText,
      colorsList,
      variant,
      emphasis,
      sizing,
      textClassName,
    ]);

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex flex-wrap items-center leading-relaxed',
          className
        )}
        style={style}
        {...rest}
      >
        {highlightedText}
      </span>
    );
  }
);

Highlighter.displayName = 'Highlighter';

export default Highlighter;
