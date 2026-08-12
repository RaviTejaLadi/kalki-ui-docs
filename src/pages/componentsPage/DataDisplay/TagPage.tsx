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
import {
  docs,
  columns,
  tagProps,
  tagIconProps,
  tagTextProps,
  tagCloseButtonProps,
  additionalNotes,
} from './data/tagDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Tag',
  description: additionalNotes[0],
};
const TagPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle>
          {additionalNotes.map((note, index) => (
            <UnOrderedList key={index}>
              <UnOrderedListItem className="text-muted-foreground tracking-wide">{note}</UnOrderedListItem>
            </UnOrderedList>
          ))}
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Tag" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Tag
          </Heading>
          <TableList columns={columns} rows={tagProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Tag Icon
          </Heading>
          <TableList columns={columns} rows={tagIconProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Tag Text
          </Heading>
          <TableList columns={columns} rows={tagTextProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Tag Close Button
          </Heading>
          <TableList columns={columns} rows={tagCloseButtonProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default TagPage;
