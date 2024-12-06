import React, { memo } from "react";
import { Box, Divider, TableList, SectionHeader, Tabs, Tab } from "react-ui-essentials";
import { data, columns, rows } from "./utils/data";
import DocumintationRenderer from "@/components/DocumintationRenderer/DocumintationRenderer";
import BadgePlayground from "@/Playgrounds/BadgePlayground";

const BadgePage = () => {
  return (
    <Box padding="10px" margin="10px">
      <SectionHeader size="lg">
        <SectionHeader.Title>Badge</SectionHeader.Title>
        <SectionHeader.SubTitle>Badge is a small status indicator for another element.</SectionHeader.SubTitle>
      </SectionHeader>
      <Divider />
      <Tabs headerStyles={{ border: "1px solid #e4e4e7" }}>
        <Tab label="Usage" value="usage">
          <DocumintationRenderer data={data} />
        </Tab>
        <Tab label="Props" value="props">
          <TableList columns={columns} rows={rows} code codeColor="red" CodeColumn={0} />
        </Tab>
        <Tab label="Playground" value="playground">
          <BadgePlayground />
        </Tab>
      </Tabs>
    </Box>
  );
};

export default memo(BadgePage);
