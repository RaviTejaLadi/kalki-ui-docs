import { cn } from '@/utils';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Context type
type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  isMobile: boolean;
};

// Props types
interface TabsProps {
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

// Context setup
const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within a Tabs component');
  }
  return context;
};

// Components
const Tabs = ({ defaultTab, children, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isMobile }}>
      <div className={cn(
        'flex w-full rounded-md',
        isMobile ? 'flex-col' : 'flex-row',
        className
      )}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children, title, className }: TabListProps) => {
  const { isMobile } = useTabs();

  return (
    <div className={cn(
      'bg-inherit transition-all duration-200',
      isMobile ? 'w-full' : 'w-80',
      className
    )}>
      {title && (
        <div className="px-4 py-3 font-medium text-sm text-foreground dark:text-gray-200">
          {title}
        </div>
      )}
      <nav className={cn(
        'flex',
        isMobile ? 'flex-row overflow-x-auto scrollbar-hide' : 'flex-col'
      )}>
        {children}
      </nav>
    </div>
  );
};

const TabTrigger = ({ id, children, className, icon }: TabTriggerProps) => {
  const { activeTab, setActiveTab, isMobile } = useTabs();
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={cn(
        'relative rounded-sm h-8 text-sm flex items-center transition-all duration-150',
        'border border-gray-200 dark:border-gray-700',
        'hover:bg-gray-50 dark:hover:bg-gray-800',
        'text-foreground dark:text-foreground',
        isMobile
          ? 'mx-1 my-2 px-3 py-2 text-sm whitespace-nowrap'
          : 'mx-2 my-1 px-4 py-2',
        isActive && [
          'bg-purple-50 dark:bg-gray-900/10',
          'text-foreground dark:text-foreground', 
        ],
        isActive && !isMobile && 'before:absolute before:left-0 before:h-1/2 before:w-1 before:bg-gray-600 dark:before:bg-gray-400 before:rounded',
        isActive && isMobile && 'border-b-2 border-b-gray-600 dark:border-b-gray-400',
        className
      )}
    >
      {icon && <span className={cn('inline-flex', isMobile ? 'mr-2' : 'mr-3')}>{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </button>
  );
};

const TabContent = ({ id, children, className }: TabContentProps) => {
  const { activeTab, isMobile } = useTabs();

  if (activeTab !== id) return null;

  return (
    <div
      className={cn(
        'animate-in fade-in-50 duration-200',
        'text-gray-700 dark:text-gray-300',
        isMobile ? 'p-4' : 'flex-1 p-6 mx-2',
        className
      )}
    >
      {children}
    </div>
  );
};

Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs;