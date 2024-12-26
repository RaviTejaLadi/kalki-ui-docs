import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import React from 'react';
import Link from '@/components/common/Link';
import Separator from '@/components/common/Separator/Separator';
import Card, { CardContent, CardDescription, CardTitle, CardHeader } from '@/components/common/Card';
import { categorizedRoutesComponents } from '@/components/Layout/ComponentsLayout/categorizedRoutesComponents';

const ComponentsOverviewPage: React.FC = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Components overview</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Every UI Essentials component available so far. Accessible, modern and easy to style UI components.
        </SectionHeader.SubTitle>
        <SectionHeader.SubTitle>Here's a list of all the components available in the library.</SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <div className="container my-3">
        {categorizedRoutesComponents.map(({ category, components, id }) => (
          <div className="mb-5">
            <h2 className="text-foreground font-semibold">{category}</h2>
            <Separator className="h-[0.5px] my-2" />
            <div key={id} id={id} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.map(({ path, label, description, Icon }, idx) => (
                <Link key={idx} to={path}>
                  <Card className="border border-gray-100 mb-5 rounded-md hover:shadow-md transition dark:border-gray-200/10 dark:bg-background/10">
                    <CardHeader>
                      <div className="flex gap-3 items-center align-middle">
                        {Icon ? <Icon className="size-5 text-[var(--icon-color)] border p-1 rounded bg-background dark:border-gray-200/10 dark:bg-background/10" /> : null}
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
        ))}
      </div>
    </div>
  );
};

export default ComponentsOverviewPage;
