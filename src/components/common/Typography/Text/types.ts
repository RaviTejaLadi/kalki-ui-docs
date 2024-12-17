import { VariantProps } from 'class-variance-authority';
import { CSSProperties } from 'react';
import { textVariants } from './textVariants';

/**
 * Props for the Text component.
 *
 * @extends VariantProps<typeof textVariants>
 *
 * @property {React.ReactNode} children - The content to be displayed within the Text component.
 * @property {string} [className] - Additional CSS class names to apply to the Text component.
 * @property {string} [color] - The color of the text.
 * @property {string} [fontSize] - The font size of the text.
 * @property {string} [fontWeight] - The font weight of the text.
 * @property {CSSProperties} [style] - Inline styles to apply to the Text component.
 * @property {boolean} [underline] - Whether the text should be underlined.
 * @property {boolean} [overline] - Whether the text should have an overline.
 * @property {boolean} [dashed] - Whether the text should have a dashed underline.
 * @property {boolean} [italic] - Whether the text should be italicized.
 * @property {boolean} [strong] - Whether the text should be bold.
 * @property {boolean} [strikethrough] - Whether the text should have a strikethrough.
 * @property {boolean} [marked] - Whether the text should be marked.
 * @property {boolean} [smaller] - Whether the text should be smaller.
 * @property {boolean} [deleted] - Whether the text should be styled as deleted.
 * @property {boolean} [inserted] - Whether the text should be styled as inserted.
 */
interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  style?: CSSProperties;
  underline?: boolean;
  overline?: boolean;
  dashed?: boolean;
  italic?: boolean;
  strong?: boolean;
  strikethrough?: boolean;
  marked?: boolean;
  smaller?: boolean;
  deleted?: boolean;
  inserted?: boolean;
}

export { type TextProps };
