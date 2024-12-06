import Tabs from '@/components/common/VerticalTabs/Tabs';
import { categorizedComponents } from './utils/categorizedComponents';
import Link from '@/components/common/Link';

export default function ComponentCategoriesSection() {
  return (
    <div className="px-10">
      <Tabs defaultTab="layout" variant="default" size="default">
        <Tabs.List title="All Available Components">
          {categorizedComponents.map((category, index) => (
            <Tabs.Trigger key={index} id={category.id} className="text-sm">
              {category.category}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {categorizedComponents.map((category, index) => (
          <Tabs.Content key={index} id={category.id}>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.components.map((component, idx) => (
                <Link
                  key={idx}
                  className="border border-gray-100 rounded-md p-4  hover:shadow-sm transition"
                  to={component.path}
                >
                  <h3 className="text-sm font-medium text-purple-500">{component.label}</h3>
                  <p className="text-xs py-1 text-muted-foreground">{component.description}</p>
                </Link>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs>
    </div>
  );
}
