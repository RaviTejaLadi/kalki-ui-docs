import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import {
  docs,
  columns,
  sectionHeaderProps,
  sectionHeaderTitleProps,
  sectionHeaderSubTitleProps,
} from './data/sectionHeaderData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import SectionHeaderPlayground from '@/components/playground/SectionHeaderPlayground';
const SectionHeaderPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Section Header</SectionHeaderTitle>
      </SectionHeader>
      <DocsDivider />
      <SectionHeaderPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="SectionHeader" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Section Header
          </Heading>
          <TableList columns={columns} rows={sectionHeaderProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Section Header Title
          </Heading>
          <TableList columns={columns} rows={sectionHeaderTitleProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Section Header SubTitle
          </Heading>
          <TableList columns={columns} rows={sectionHeaderSubTitleProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default SectionHeaderPage;
