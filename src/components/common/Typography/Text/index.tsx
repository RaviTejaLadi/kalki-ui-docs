import { forwardRef, CSSProperties } from 'react';
import { cn } from '@/utils';
import { TextProps } from './types';
import { textVariants } from './textVariants';

/**
 * A flexible text component that supports various text styles and decorations.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {'default' | string} [props.variant='default'] - Text variant style
 * @param {'md' | string} [props.size='md'] - Text size
 * @param {string} [props.fontSize=''] - Custom font size
 * @param {string} [props.color=''] - Text color
 * @param {boolean} [props.underline] - Applies underline decoration
 * @param {boolean} [props.overline] - Applies overline decoration
 * @param {boolean} [props.dashed] - Applies line-through decoration
 * @param {boolean} [props.italic] - Applies italic style
 * @param {boolean} [props.strong] - Applies bold font weight
 * @param {boolean} [props.strikethrough] - Applies line-through decoration
 * @param {boolean} [props.marked] - Highlights text with yellow background
 * @param {boolean} [props.smaller] - Reduces font size to 0.8em
 * @param {boolean} [props.deleted] - Applies line-through decoration
 * @param {boolean} [props.inserted] - Applies underline decoration
 * @param {ReactNode} props.children - Content to be rendered
 * @param {string | number} [props.fontWeight] - Custom font weight
 * @param {CSSProperties} [props.style] - Additional CSS styles
 * @param {string} [props.className] - Additional CSS classes
 *
 * @returns {JSX.Element} A paragraph element with the specified text styling
 */
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      variant = 'default',
      size = 'md',
      fontSize = '',
      color = '',
      underline,
      overline,
      dashed,
      italic,
      strong,
      strikethrough,
      marked,
      smaller,
      deleted,
      inserted,
      children,
      fontWeight,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    const textDecoration = underline
      ? 'underline'
      : overline
      ? 'overline'
      : dashed || strikethrough || deleted
      ? 'line-through'
      : inserted
      ? 'underline'
      : undefined;

    const dynamicStyle: CSSProperties = {
      fontSize: fontSize || (smaller ? '0.8em' : ''),
      color: color || undefined,
      fontWeight: fontWeight || (strong ? 'bold' : undefined),
      fontStyle: italic ? 'italic' : undefined,
      textDecoration,
      backgroundColor: marked ? 'yellow' : undefined,
      width: 'fit-content',
      ...style,
    };


    return (
      <p ref={ref} className={cn(textVariants({ variant, size }), className)} style={dynamicStyle} {...rest}>
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

export default Text;
