import { useState } from 'react';
import { Tab, Tabs } from '@/components/common/Tabs';
import { cn } from '@/utils';

const VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'help', 'info', 'dark', 'light'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

type TabsVariant = (typeof VARIANTS)[number];
type TabsSize = (typeof SIZES)[number];

export const DynamicTabsExample = () => {
  const [variant, setVariant] = useState<TabsVariant>('primary');
  const [size, setSize] = useState<TabsSize>('md');

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-border bg-muted/30 p-4 mb-2 space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Variant
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {VARIANTS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  variant === v
                    ? 'bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/30'
                    : 'bg-background border border-border text-foreground hover:border-primary/50 hover:bg-muted/50'
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-1 border-t border-border">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Size
          </label>
          <div className="flex gap-2">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={cn(
                  'min-w-[4rem] px-4 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  size === s
                    ? 'bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/30'
                    : 'bg-background border border-border text-foreground hover:border-primary/50 hover:bg-muted/50'
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Tabs variant={variant} size={size}>
        <Tab label="Overview" value="overview">
          <p className="text-muted-foreground">
            Active variant: <span className="font-medium text-foreground">{variant}</span>, size:{' '}
            <span className="font-medium text-foreground">{size}</span>.
          </p>
        </Tab>
        <Tab label="Details" value="details">
          <p className="text-muted-foreground">Switch variant and size above to see the tabs update.</p>
        </Tab>
        <Tab label="Settings" value="settings">
          <p className="text-muted-foreground">All 9 variants and 3 sizes are available to try.</p>
        </Tab>
      </Tabs>
    </div>
  );
};
