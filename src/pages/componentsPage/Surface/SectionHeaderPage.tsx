import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import {
  docs,
  columns,
  sectionHeaderProps,
  sectionHeaderTitleProps,
  sectionHeaderSubTitleProps,
} from './data/sectionHeaderData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';

const SectionHeaderPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Section Header</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
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
