import React, { memo } from "react";
import { Box, Divider, SectionHeader, Tabs, Tab, TableList, Heading } from "react-ui-essentials";
import DocumintationRenderer from "../../../../components/DocumintationRenderer/DocumintationRenderer";
import { columns, listGroupsData, listGroupsRows } from "./utils/ListGroupData";
import { orderedListData, orderedListProps, listItemProps } from "./utils/OrderedListData";
import { unOrderedListData, unOrderedListProps, UnOrderedlistItemProps } from "./utils/UnOrderedListData";

const ListsPage = () => {
  return (
    <Box padding="10px" margin="10px">
      <SectionHeader size="lg">
        <SectionHeader.Title>Lists</SectionHeader.Title>
        <SectionHeader.SubTitle>
          Lists are used to group related content in a structured, easy-to-read manner. The main types of lists are
          unordered lists, ordered lists , and list groups (custom styled).
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Divider />
      <Tabs headerStyles={{ border: "1px solid #e4e4e7" }}>
        <Tab label="Usage" value="usage">
          <Tabs>
            <Tab label="ListGroup" value="listGroups">
              <DocumintationRenderer data={listGroupsData} />
            </Tab>
            <Tab label="OrderedList" value="orderedList">
              <DocumintationRenderer data={orderedListData} />
            </Tab>
            <Tab label="UnOrderedList" value="unOrderedList">
              <DocumintationRenderer data={unOrderedListData} />
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Props" value="props">
          <Tabs>
            <Tab label="ListGroup" value="listGroups">
              <TableList columns={columns} rows={listGroupsRows} code codeColor="red" CodeColumn={0} />
            </Tab>
            <Tab label="OrderedList" value="orderedList">
              <Heading type="h4">ordered List</Heading>
              <TableList columns={columns} rows={orderedListProps} code codeColor="red" CodeColumn={0} />
              <Heading type="h4">List Item</Heading>
              <TableList columns={columns} rows={listItemProps} code codeColor="red" CodeColumn={0} />
            </Tab>
            <Tab label="UnOrderedList" value="unOrderedList">
              <Heading type="h4">Un ordered List</Heading>
              <TableList columns={columns} rows={unOrderedListProps} code codeColor="red" CodeColumn={0} />
              <Heading type="h4">List Item</Heading>
              <TableList columns={columns} rows={UnOrderedlistItemProps} code codeColor="red" CodeColumn={0} />
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default memo(ListsPage);
