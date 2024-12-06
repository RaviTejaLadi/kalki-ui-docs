import React, { memo, useRef } from "react";
import { Box, Divider, Heading, SectionHeader, Tab, TableList, Tabs } from "react-ui-essentials";
import DocumintationRenderer from "@/components/DocumintationRenderer/DocumintationRenderer";
import {
  data,
  tableBodyRows,
  tableCellRows,
  tableFooterRows,
  tableHeadRows,
  tableRowRows,
  tableRows,
  columns,
} from "./utils/data";
import EditableTable from "./EditableTable";
const TablePage = () => {
  const tableRef = useRef(null);

  const headers = ["Name", "Age", "Country"];
  const rows = [
    ["John Doe", "30", "USA"],
    ["Jane Smith", "25", "Canada"],
    ["Carlos Ruiz", "35", "Mexico"],
  ];
  const handleSubmit = (data) => {
    console.log("Submitted data:", data);
    // Process the submitted data
  };
  return (
    <Box padding="10px" margin="10px">
      <SectionHeader size="lg">
        <SectionHeader.Title>Tables</SectionHeader.Title>
        <SectionHeader.SubTitle>
          Table is used to display data in a structured, grid-like format consisting of rows and columns.
          <br />
          Tables are ideal for presenting data that is best understood in a row-column format, such as statistics,
          schedules, comparisons, financial information, and any data that needs to be organized clearly.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Divider />
      {/* <EditableTable ref={tableRef} initialHeaders={headers} initialRows={rows} onSubmit={handleSubmit} /> */}
      <Tabs headerStyles={{ border: "1px solid #e4e4e7" }}>
        <Tab label="Table" value="table">
          <DocumintationRenderer data={data} />
        </Tab>
        <Tab label="Props" value="props">
          <Heading type="h4">Table</Heading>
          <TableList columns={columns} rows={tableRows} code codeColor="red" CodeColumn={0} />
          <Heading type="h4">Table Header</Heading>
          <TableList columns={columns} rows={tableHeadRows} code codeColor="red" CodeColumn={0} />
          <Heading type="h4">Table Body</Heading>
          <TableList columns={columns} rows={tableBodyRows} code codeColor="red" CodeColumn={0} />
          <Heading type="h4">Table Footer</Heading>
          <TableList columns={columns} rows={tableFooterRows} code codeColor="red" CodeColumn={0} />
          <Heading type="h4">Table Row</Heading>
          <TableList columns={columns} rows={tableRowRows} code codeColor="red" CodeColumn={0} />
          <Heading type="h4">Table Cell</Heading>
          <TableList columns={columns} rows={tableCellRows} code codeColor="red" CodeColumn={0} />
        </Tab>
      </Tabs>
    </Box>
  );
};

export default memo(TablePage);
