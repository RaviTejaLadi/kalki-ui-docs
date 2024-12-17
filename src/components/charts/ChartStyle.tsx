import { ChartConfig, THEMES } from './types';

/**
 * ChartStyle component applies custom styles to charts based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.id - The unique identifier for the chart.
 * @param {ChartConfig} props.config - The configuration object for the chart, containing theme and color settings.
 *
 * @returns {JSX.Element | null} A style element with the custom CSS for the chart, or null if no color configuration is provided.
 */
export const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join('\n')}
}
`
          )
          .join('\n'),
      }}
    />
  );
};
