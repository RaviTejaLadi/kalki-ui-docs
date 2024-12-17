import * as React from 'react';
import * as RechartsPrimitive from 'recharts';
import { cn } from '@/utils';
import { ChartConfig } from './types';
import { ChartContext } from './context/context';
import { ChartStyle } from './ChartStyle';
import { ChartLegendContent } from './ChartLegendContent';
import { ChartTooltipContent } from './ChartTooltipContent';

/**
 * A container component for rendering charts with a specific configuration.
 * This component uses React's `forwardRef` to pass a ref to the underlying div element.
 * It also provides a context for chart configuration and applies various styles to the chart elements.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.id] - An optional id for the chart. If not provided, a unique id will be generated.
 * @param {string} [props.className] - Additional class names to apply to the container div.
 * @param {ChartConfig} props.config - The configuration object for the chart.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the chart container.
 * @param {React.Ref<HTMLDivElement>} ref - A ref to the underlying div element.
 *
 * @returns {JSX.Element} The rendered chart container component.
 */
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = 'Chart';

/**
 * A Tooltip component from the Recharts library.
 * This component is used to display additional information when hovering over chart elements.
 *
 * @component
 * @example
 * <ChartTooltip />
 */
const ChartTooltip = RechartsPrimitive.Tooltip;

/**
 * A constant that references the Legend component from the Recharts library.
 * This component is used to render a legend for a chart.
 *
 * @constant
 * @type {typeof RechartsPrimitive.Legend}
 */
const ChartLegend = RechartsPrimitive.Legend;

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
