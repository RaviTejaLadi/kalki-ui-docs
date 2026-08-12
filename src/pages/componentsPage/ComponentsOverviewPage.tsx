import {
  SectionHeader,
  Link,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  SectionHeaderTitle,
  SectionHeaderSubTitle,
} from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import React, { useState, useMemo } from 'react';
import { categorizedRoutesComponents } from '@/components/Layout/ComponentsLayout/categorizedRoutesComponents';

const searchInputClassName =
  'w-full max-w-md h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-gray-200/10';

const ComponentsOverviewPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categorizedRoutesComponents;
    }

    const query = searchQuery.toLowerCase();
    return categorizedRoutesComponents
      .map((category) => ({
        ...category,
        components: category.components.filter(
          (component) =>
            component.label.toLowerCase().includes(query) || component.description?.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.components.length > 0);
  }, [searchQuery]);

  return (
    <div className="container">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <SectionHeader variant="transparent" size="sm" className="min-w-0 flex-1">
          <SectionHeaderTitle className="tracking-wide">Components overview</SectionHeaderTitle>
          <SectionHeaderSubTitle className="tracking-wide">
            Every Kalki UI component available so far. Accessible, modern and easy to style UI components.
          </SectionHeaderSubTitle>
          <SectionHeaderSubTitle>
            Here&apos;s a list of all the components available in the library.
          </SectionHeaderSubTitle>
        </SectionHeader>
        <div className="w-full shrink-0 lg:mt-2 lg:w-auto">
          <input
            type="search"
            placeholder="Search components..."
            className={searchInputClassName}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search components"
          />
        </div>
      </div>
      <DocsDivider />

      <div className="my-3 w-full">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(({ category, components, id }) => (
            <div className="mb-10 py-4" key={id}>
              <h2 className="font-semibold text-foreground">{category}</h2>
              <DocsDivider className="my-5 h-[0.5px]" />
              <div key={id} id={id} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {components.map(({ path, label, description, Icon }, idx) => (
                  <Link key={idx} to={path}>
                    <Card className="mb-5 h-full rounded-md border border-gray-100 transition hover:shadow-md dark:border-gray-200/10 dark:bg-background/10">
                      <CardHeader>
                        <div className="flex items-center gap-3 align-middle">
                          {Icon ? (
                            <Icon className="size-5 rounded border bg-background p-1 text-[var(--icon-color)] dark:border-gray-200/10 dark:bg-background/10" />
                          ) : null}
                          <CardTitle className="text-sm font-medium text-foreground">{label}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-xs">{description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-muted-foreground">No components found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentsOverviewPage;
