import Tabs from '@/components/common/VerticalTabs/Tabs';
import { Link } from 'kalki-ui';
import { categorizedRoutesComponents } from '@/components/Layout/ComponentsLayout/categorizedRoutesComponents';
import { ChevronRight } from 'lucide-react';

export default function ComponentCategoriesSection() {
  return (
    <section className="container px-6 py-16 lg:px-10">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Library</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Component categories</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Browse the catalog by category and jump straight into documentation for each component.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/80 bg-card">
        <Tabs defaultTab="buttons" className="rounded-none">
          <Tabs.List title="Categories">
            {categorizedRoutesComponents.map((category, index) => (
              <Tabs.Trigger key={index} id={category.id} className="dark:border-border">
                {category.category}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {categorizedRoutesComponents.map((category, index) => (
            <Tabs.Content key={index} id={category.id}>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.components.map((component, idx) => (
                  <Link
                    key={idx}
                    className="rounded-lg border border-border/70 bg-background/50 p-4 transition-colors hover:border-border hover:bg-muted/40"
                    to={component.path}
                  >
                    <h3 className="text-sm font-semibold text-foreground">{component.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{component.description}</p>
                  </Link>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/components-showcase"
          className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
        >
          Open components showcase
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
