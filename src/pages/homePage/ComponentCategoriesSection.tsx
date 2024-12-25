import Tabs from '@/components/common/VerticalTabs/Tabs';
import Link from '@/components/common/Link';
import { categorizedRoutesComponents } from '@/components/Layout/ComponentsLayout/categorizedRoutesComponents';

export default function ComponentCategoriesSection() {
  return (
    <div className="px-10 ">
      <Tabs defaultTab="layout" >
        <Tabs.List title="All Available Components"  >
          {categorizedRoutesComponents.map((category, index) => (
            <Tabs.Trigger key={index} id={category.id} >
              {category.category}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {categorizedRoutesComponents.map((category, index) => (
          <Tabs.Content key={index} id={category.id}>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.components.map((component, idx) => (
                <Link
                  key={idx}
                  className=" rounded-md p-4 dark:bg-black/10  hover:shadow-md transition"
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
