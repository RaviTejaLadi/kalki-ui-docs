import { Tab, Tabs } from '@/components/common/Tabs';

export const BasicTabsExample = () => {
  return (
    <Tabs variant="primary" size="md">
      <Tab label="Overview" value="overview">
        <p className="text-muted-foreground">Content for the overview tab.</p>
      </Tab>
      <Tab label="Details" value="details">
        <p className="text-muted-foreground">Content for the details tab.</p>
      </Tab>
      <Tab label="Settings" value="settings">
        <p className="text-muted-foreground">Content for the settings tab.</p>
      </Tab>
    </Tabs>
  );
};
