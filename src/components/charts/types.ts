const THEMES = { light: '', dark: '.dark' } as const;

type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};
export type { ChartConfig, ChartContextProps };
export { THEMES };