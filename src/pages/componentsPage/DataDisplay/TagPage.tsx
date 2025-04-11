import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
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
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';
import UnOrderedList from '@/components/common/Lists/UnOrderedList';
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
        <SectionHeader.Title className="tracking-wide">{metaData.title}</SectionHeader.Title>
        <SectionHeader.SubTitle>
          {additionalNotes.map((note, index) => (
            <UnOrderedList key={index}>
              <UnOrderedList.Item className="text-muted-foreground tracking-wide">{note}</UnOrderedList.Item>
            </UnOrderedList>
          ))}
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
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
