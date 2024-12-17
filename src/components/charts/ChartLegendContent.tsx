import React from 'react';
import { getPayloadConfigFromPayload } from './getPayloadConfigFromPayload';
import { useChart } from './useChart';
import { cn } from '@/utils';
import * as RechartsPrimitive from 'recharts';

/**
 * A React component that renders the content of a chart legend.
 * 
 * @component
 * @param {object} props - The properties object.
 * @param {string} [props.className] - Additional class names to apply to the legend container.
 * @param {boolean} [props.hideIcon=false] - Whether to hide the icon in the legend items.
 * @param {Array} props.payload - The payload data for the legend items.
 * @param {string} [props.verticalAlign='bottom'] - The vertical alignment of the legend ('top' or 'bottom').
 * @param {string} [props.nameKey] - The key to use for the name of the legend items.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to attach to the legend container.
 * 
 * @returns {JSX.Element | null} The rendered legend content or null if there is no payload.
 */
export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> &
    Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-center gap-4', verticalAlign === 'top' ? 'pb-3' : 'pt-3', className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn('flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground')}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = 'ChartLegend';
