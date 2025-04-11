import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import {
  docs,
  columns,
  modalProps,
  modalHeaderProps,
  modalBodyProps,
  modalFooterProps,
  modalTitleProps,
} from './data/modalData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';
import Head from '@/components/Head';
import { IMetaData } from '@/types/metaData';

const metaData: IMetaData = {
  title: 'Modal',
  description: `Modal component to inform users about a task or important information that requires decisions, or involves multiple tasks.`,
};
const ModelPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">{metaData.title}</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">{metaData.description}</SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Modal
          </Heading>
          <TableList columns={columns} rows={modalProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Modal Header
          </Heading>
          <TableList columns={columns} rows={modalHeaderProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Modal Body
          </Heading>
          <TableList columns={columns} rows={modalBodyProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Modal Footer
          </Heading>
          <TableList columns={columns} rows={modalFooterProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Modal Title
          </Heading>
          <TableList columns={columns} rows={modalTitleProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default ModelPage;
