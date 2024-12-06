import React, { memo } from "react";
import { Box, Divider, TableList, SectionHeader, Tabs, Tab } from "react-ui-essentials";
import { data, columns, rows } from "./utils/data";
import DocumintationRenderer from "../../../../components/DocumintationRenderer/DocumintationRenderer";

const ContentScrollablePage = () => {
  return (
    <Box padding="10px" margin="10px">
      <SectionHeader size="lg">
        <SectionHeader.Title>Content Scrollable</SectionHeader.Title>
        <SectionHeader.SubTitle></SectionHeader.SubTitle>
      </SectionHeader>
      <Divider />
      <Tabs headerStyles={{ border: "1px solid #e4e4e7" }}>
        <Tab label="Usage" value="usage">
          <DocumintationRenderer data={data} />
        </Tab>
        <Tab label="Props" value="props">
          <TableList columns={columns} rows={rows} code codeColor="red" CodeColumn={0} />
        </Tab>
      </Tabs>
    </Box>
  );
};

export default memo(ContentScrollablePage);
