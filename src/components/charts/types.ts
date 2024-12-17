const THEMES = { light: '', dark: '.dark' } as const;

/**
 * Represents the configuration for a chart.
 *
 * @typeParam k - A string key representing the chart type.
 *
 * @property {React.ReactNode} [label] - An optional label for the chart.
 * @property {React.ComponentType} [icon] - An optional icon component for the chart.
 * @property {string} [color] - An optional color for the chart. If provided, `theme` must be `never`.
 * @property {Record<keyof typeof THEMES, string>} [theme] - An optional theme for the chart. If provided, `color` must be `never`.
 */
type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

/**
 * Represents the properties for the Chart context.
 *
 * @property {ChartConfig} config - The configuration settings for the chart.
 */
type ChartContextProps = {
  config: ChartConfig;
};

export type { ChartConfig, ChartContextProps };
export { THEMES };
