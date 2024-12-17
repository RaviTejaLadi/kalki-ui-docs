import { VariantProps } from 'class-variance-authority';
import { highlightedTextVariants } from './highlightedTextVariants';

const defaultColors: string[] = [
  '#D65DB1',
  '#a99dfb',
  '#00C9A7',
  '#a8dadc',
  '#a9def9',
  '#ef476f',
  '#FF9671',
  '#FFC75F',
  '#F9F871',
  '#84a59d',
  '#76c893',
  '#2ec4b6',
  '#e27396',
  '#00a5cf',
  '#ffff3f',
  '#C34A36',
  '#ffb703',
  '#ee6c4d',
  '#adc178',
  '#a6e22d',
  '#845EC2',
];

/**
 * Props for the Highlighter component.
 * 
 * @extends React.HTMLAttributes<HTMLSpanElement>
 * @extends VariantProps<typeof highlightedTextVariants>
 * 
 * @property {string} children - The text content to be highlighted.
 * @property {string[]} [highlightText] - An array of strings to be highlighted within the children text.
 * @property {string[]} [colorsList] - An array of colors to be used for highlighting.
 * @property {string} [className] - Additional class names to apply to the highlighter component.
 * @property {string} [textClassName] - Additional class names to apply to the text within the highlighter component.
 * @property {'solid' | 'outlined' | 'underline' | 'pill' | 'gradient' | 'glass' | 'shadow' | 'floating' | 'minimal' | 'tag'} [variant] - The visual style variant of the highlighter.
 * @property {'normal' | 'medium' | 'semibold' | 'bold'} [emphasis] - The emphasis level of the highlighted text.
 * @property {'inherit' | 'compact' | 'comfortable' | 'relaxed'} [sizing] - The sizing of the highlighter component.
 */
interface HighlighterProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof highlightedTextVariants> {
  children: string;
  highlightText?: string[];
  colorsList?: string[];
  className?: string;
  textClassName?: string;
  variant?:
    | 'solid'
    | 'outlined'
    | 'underline'
    | 'pill'
    | 'gradient'
    | 'glass'
    | 'shadow'
    | 'floating'
    | 'minimal'
    | 'tag';
  emphasis?: 'normal' | 'medium' | 'semibold' | 'bold';
  sizing?: 'inherit' | 'compact' | 'comfortable' | 'relaxed';
}

export { type HighlighterProps, defaultColors };
