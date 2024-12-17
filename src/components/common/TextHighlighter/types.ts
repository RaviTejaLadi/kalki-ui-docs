export const defaultColors = [
  // Soft pastels
  '#D0E0E3',
  '#F3E5F5',
  '#E1F5FE',
  '#F0F4C3',
  '#E8F5E9',
  '#FFE0B2',
  '#F8BBD0',
  '#DCEDC8',
  '#CFD8DC',
  '#E0F7FA',

  // Medium tones
  '#90CAF9',
  '#A5D6A7',
  '#FFE082',
  '#FFAB91',
  '#B39DDB',
  '#81C784',
  '#9FA8DA',
  '#80CBC4',
  '#F48FB1',
  '#CE93D8',

  // Muted colors
  '#78909C',
  '#7986CB',
  '#64B5F6',
  '#4DB6AC',
  '#81C784',
  '#DCE775',
  '#FFB74D',
  '#FF8A65',
  '#BA68C8',
  '#4FC3F7',

  // Soft neutrals
  '#B0BEC5',
  '#90A4AE',
  '#78909C',
  '#607D8B',
  '#A1887F',
  '#8D6E63',
  '#BDBDBD',
  '#9E9E9E',
  '#757575',
  '#6D4C41',

  // Original favorites (keeping some from the original list)
  '#a99dfb',
  '#00C9A7',
  '#a8dadc',
  '#a9def9',
  '#84a59d',
  '#76c893',
  '#2ec4b6',
  '#00a5cf',
  '#adc178',
  '#845EC2',
];

type Variant =
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

type Emphasis = 'normal' | 'medium' | 'semibold' | 'bold';

type Sizing = 'inherit' | 'compact' | 'comfortable' | 'relaxed';

interface HighlightContextType {
  colorsList: string[];
  defaultVariant: Variant;
  defaultEmphasis: Emphasis;
  defaultSizing: Sizing;
}

interface TextHighlighterProps {
  children: React.ReactNode;
  colorsList?: string[];
  defaultVariant?: Variant;
  defaultEmphasis?: Emphasis;
  defaultSizing?: Sizing;
}

interface TextHighlighterTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: Variant;
  emphasis?: Emphasis;
  sizing?: Sizing;
  color?: string;
}

interface TextHighlighterInfoProps {
  children: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export type {
  Variant,
  Emphasis,
  Sizing,
  HighlightContextType,
  TextHighlighterProps,
  TextHighlighterTextProps,
  TextHighlighterInfoProps,
};
