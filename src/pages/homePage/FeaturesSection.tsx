import { Card, CardContent, CardTitle, CardHeader } from 'kalki-ui';
import { Boxes, Code2, LayoutTemplate, Puzzle, Smartphone, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeaturesProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const featureList: FeaturesProps[] = [
  {
    id: 'package',
    title: 'Complete UI kit',
    description:
      'Ship polished interfaces faster with a curated set of React components written in TypeScript and styled with Tailwind CSS.',
    icon: Boxes,
  },
  {
    id: 'react',
    title: 'React-first architecture',
    description:
      'Composable, reusable primitives that drop cleanly into existing React apps without fighting your project structure.',
    icon: Code2,
  },
  {
    id: 'tailwind',
    title: 'Tailwind-native styling',
    description:
      'Customize with utility classes and design tokens so every component can match your brand without heavy overrides.',
    icon: LayoutTemplate,
  },
  {
    id: 'interactive',
    title: 'Interactive by default',
    description:
      'Built-in behaviors for common UI patterns help you deliver dynamic experiences with less boilerplate.',
    icon: Zap,
  },
  {
    id: 'coverage',
    title: 'Broad component coverage',
    description: 'From foundational controls to richer widgets, Kalki UI covers the patterns you reach for day to day.',
    icon: Puzzle,
  },
  {
    id: 'responsive',
    title: 'Responsive out of the box',
    description:
      'Layouts and controls are designed to stay usable across breakpoints so products feel consistent on every device.',
    icon: Smartphone,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container px-6 py-20 lg:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Why Kalki UI</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Built for serious product teams</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Everything you need to assemble modern React interfaces with consistency and speed.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureList.map(({ id, title, description, icon: Icon }) => (
          <Card key={id} className="h-full border-border/80 bg-card shadow-none transition-shadow hover:shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted/60 text-foreground">
                <Icon className="size-4" strokeWidth={1.75} />
              </div>
              <CardTitle className="text-left text-base font-semibold tracking-tight text-foreground">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-sm leading-relaxed text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
