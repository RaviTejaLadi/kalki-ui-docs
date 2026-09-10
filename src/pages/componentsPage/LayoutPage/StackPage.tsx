import {
  SectionHeader,
  TableList,
  Div,
  Heading,
  SectionHeaderTitle,
  SectionHeaderSubTitle,
  UnOrderedList,
  UnOrderedListItem,
} from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, stackProps, stackItemProps, additionalNotes } from './data/stackData';
import StackPlayground from '@/components/playground/StackPlayground';
const StackPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Stack</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          {additionalNotes.map((note, index) => (
            <UnOrderedList key={index}>
              <UnOrderedListItem className="text-muted-foreground">{note}</UnOrderedListItem>
            </UnOrderedList>
          ))}
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <StackPlayground />
      <DocsDivider />
      <DocumentationRenderer data={docs} componentName="Stack" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Stack
          </Heading>
          <TableList columns={columns} rows={stackProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Stack Item
          </Heading>
          <TableList columns={columns} rows={stackItemProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default StackPage;
