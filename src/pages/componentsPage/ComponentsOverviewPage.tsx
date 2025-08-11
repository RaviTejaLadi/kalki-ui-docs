import { SectionHeader } from '@/components/common/SectionHeader';
import React, { useState, useMemo } from 'react';
import Link from '@/components/common/Link';
import Separator from '@/components/common/Separator';
import Card, { CardContent, CardDescription, CardTitle, CardHeader } from '@/components/common/Card';
import { categorizedRoutesComponents } from '@/components/Layout/ComponentsLayout/categorizedRoutesComponents';
import { Input } from '@/components/common/Form';

const ComponentsOverviewPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and components based on search query
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
      <div className="flex items-center justify-between mb-6">
        <SectionHeader variant="transparent" size="sm">
          <SectionHeader.Title className="tracking-wide">Components overview</SectionHeader.Title>
          <SectionHeader.SubTitle className="tracking-wide">
            Every Kalki UI component available so far. Accessible, modern and easy to style UI components.
          </SectionHeader.SubTitle>
          <SectionHeader.SubTitle>
            Here&apos;s a list of all the components available in the library.
          </SectionHeader.SubTitle>
        </SectionHeader>{' '}
        <div className="my-6 ">
          <Input
            type="search"
            placeholder="Search components..."
            className="pl-10 w-[25rem] "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <Separator />

      <div className="container my-3">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(({ category, components, id }) => (
            <div className="mb-10 py-4" key={id}>
              <h2 className="text-foreground font-semibold">{category}</h2>
              <Separator className="h-[0.5px] my-5" />
              <div key={id} id={id} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {components.map(({ path, label, description, Icon }, idx) => (
                  <Link key={idx} to={path}>
                    <Card className="border h-full border-gray-100 mb-5 rounded-md hover:shadow-md transition dark:border-gray-200/10 dark:bg-background/10">
                      <CardHeader>
                        <div className="flex gap-3 items-center align-middle">
                          {Icon ? (
                            <Icon className="size-5 text-[var(--icon-color)] border p-1 rounded bg-background dark:border-gray-200/10 dark:bg-background/10" />
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
          <div className="text-center py-10">
            <p className="text-muted-foreground">No components found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentsOverviewPage;
