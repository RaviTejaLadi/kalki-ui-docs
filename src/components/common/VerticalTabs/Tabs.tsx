import { cva, type VariantProps } from 'class-variance-authority';
import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/utils';

// Variants definition using cva
const tabListVariants = cva('transition-all duration-200', {
  variants: {
    variant: {
      default: 'w-80 bg-white',
    },
    size: {
      default: 'min-h-[500px]',
      full: 'min-h-screen',
      auto: 'min-h-fit',
    },
    mobile: {
      true: 'w-full border-r-0 border-b',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    mobile: false,
  },
});

const tabTriggerVariants = cva(
  'relative flex items-center border mx-2 my-1 rounded px-4 py-1 text-left transition-all duration-150 hover:bg-gray-50 border-b border-gray-200 cursor-pointer',
  {
    variants: {
      variant: {
        default: [
          'hover:bg-gray-50 ',
          'data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600',
          'data-[state=active]:before:absolute data-[state=active]:before:left-0',
          'data-[state=active]:before:h-1/2  data-[state=active]:before:w-1',
          'data-[state=active]:before:bg-purple-600',
          'data-[state=active]:before:rounded',
        ],
      },
      mobile: {
        true: 'border-r border-gray-200',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      mobile: false,
    },
  }
);

type TabListVariantProps = VariantProps<typeof tabListVariants>;

// Types
type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: TabListVariantProps['variant'];
  size: TabListVariantProps['size'];
  isMobile: boolean;
};

interface TabsProps extends TabListVariantProps {
  defaultTab: string;
  children: React.ReactNode;
  className?: string;
}

interface TabListProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

interface TabTriggerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

interface TabContentProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

// Context and default values
const defaultTabsContext: TabsContextType = {
  activeTab: '',
  setActiveTab: () => {},
  variant: 'default',
  size: 'default',
  isMobile: false,
};

const TabsContext = createContext<TabsContextType>(defaultTabsContext);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within a Tabs component');
  }
  return context;
};

// Components
const Tabs = ({ defaultTab, children, variant = 'default', size = 'default', className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, variant, size, isMobile }}>
      <div className={cn('flex w-full border-none rounded-md', isMobile ? 'flex-col' : 'flex-row', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children, title, className }: TabListProps) => {
  const { variant, size, isMobile } = useTabs();

  return (
    <div className={cn(tabListVariants({ variant, size, mobile: isMobile }), className)}>
      {title && <div className={cn('px-4 py-3 font-medium text-foreground text-sm')}>{title}</div>}
      <nav className={cn('flex', isMobile ? 'flex-row overflow-x-auto' : 'flex-col')}>{children}</nav>
    </div>
  );
};

const TabTrigger = ({ id, children, className, icon }: TabTriggerProps) => {
  const { activeTab, setActiveTab, variant, isMobile } = useTabs();

  return (
    <button
      onClick={() => setActiveTab(id)}
      data-state={activeTab === id ? 'active' : 'inactive'}
      className={cn(tabTriggerVariants({ variant, mobile: isMobile }), className)}
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span className={cn('whitespace-nowrap text-foreground')}>{children}</span>
    </button>
  );
};

const TabContent = ({ id, children, className }: TabContentProps) => {
  const { activeTab } = useTabs();

  if (activeTab !== id) return null;

  return (
    <div className={cn('flex-1 p-6  mx-2 animate-in fade-in-50 duration-200 text-muted-foreground', className)}>
      {children}
    </div>
  );
};

Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs;
