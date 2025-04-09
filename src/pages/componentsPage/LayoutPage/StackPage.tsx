import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, stackProps, stackItemProps, additionalNotes } from './data/stackData';
import { Heading } from '@/components/common/Typography';
import UnOrderedList from '@/components/common/Lists/UnOrderedList';
import Div from '@/components/common/Div';

const StackPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Stack</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          {additionalNotes.map((note, index) => (
            <UnOrderedList key={index}>
              <UnOrderedList.Item className="text-muted-foreground">{note}</UnOrderedList.Item>
            </UnOrderedList>
          ))}
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">Stack</Heading>
          <TableList columns={columns} rows={stackProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">Stack Item</Heading>
          <TableList columns={columns} rows={stackItemProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default StackPage;
