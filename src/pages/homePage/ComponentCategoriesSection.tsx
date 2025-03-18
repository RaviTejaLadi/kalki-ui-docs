import Tabs from '@/components/common/VerticalTabs/Tabs';
import Link from '@/components/common/Link';
import { categorizedRoutesComponents } from '@/components/Layout/ComponentsLayout/categorizedRoutesComponents';
import { ChevronRight } from 'lucide-react';

export default function ComponentCategoriesSection() {
  return (
    <div className="px-10 ">
      <Tabs defaultTab="buttons">
        <Tabs.List title="✨ Component Showcase ✨">
          {categorizedRoutesComponents.map((category, index) => (
            <Tabs.Trigger key={index} id={category.id} className="dark:border-gray-200/10">
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
                  className=" rounded-md p-4 dark:bg-background/10 border dark:border-gray-200/10  hover:shadow-md transition"
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
      <div className="mt-16 text-center">
        <Link
          to="/components-showcase"
          className="group inline-flex items-center border gap-2 bg-background dark:bg-background/10 dark:border-gray-200/10 text-foreground px-8 py-4 rounded-xl hover:shadow-md transition-colors"
        >
          Components Showcase
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
