import React, { memo } from "react";
import TagPlayground from "@/Playgrounds/TagPlayground";
import { Box, Divider, TableList, SectionHeader, Tabs, Tab, UnOrderedList, Heading } from "react-ui-essentials";
import {
  data,
  columns,
  tagProps,
  tagIconProps,
  tagTextProps,
  tagCloseButtonProps,
  additionalNotes,
} from "./utils/data";
import DocumintationRenderer from "@/components/DocumintationRenderer/DocumintationRenderer";

const TagPage = () => {
  return (
    <Box padding="10px" margin="10px">
      <SectionHeader size="lg">
        <SectionHeader.Title>Tag</SectionHeader.Title>
        <SectionHeader.SubTitle>
          {additionalNotes.map((note, index) => (
            <UnOrderedList key={index}>
              <UnOrderedList.Item>{note}</UnOrderedList.Item>
            </UnOrderedList>
          ))}
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Divider />
      <Tabs headerStyles={{ border: "1px solid #e4e4e7" }}>
        <Tab label="Usage" value="usage">
          <DocumintationRenderer data={data} />
        </Tab>
        <Tab label="Props" value="props">
          <Heading type="h3">Tag</Heading>
          <TableList columns={columns} rows={tagProps} code codeColor="red" CodeColumn={0} />
          <Heading type="h3">Tag Icon</Heading>
          <TableList columns={columns} rows={tagIconProps} code codeColor="red" CodeColumn={0} />
          <Heading type="h3">Tag Text</Heading>
          <TableList columns={columns} rows={tagTextProps} code codeColor="red" CodeColumn={0} />
          <Heading type="h3">Tag Close Button</Heading>
          <TableList columns={columns} rows={tagCloseButtonProps} code codeColor="red" CodeColumn={0} />
        </Tab>
        <Tab label="Playground" value="playground">
          <TagPlayground />
        </Tab>
      </Tabs>
    </Box>
  );
};

export default memo(TagPage);
