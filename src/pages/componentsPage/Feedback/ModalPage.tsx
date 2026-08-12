import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
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
import Head from '@/components/Head';
import { IMetaData } from '@/types/metaData';

const metaData: IMetaData = {
  title: 'Modal',
  description:
    'Modal component to inform users about a task or important information that requires decisions, or involves multiple tasks.',
};

const ModalPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="Modal"
        importCode={`import { Modal, Button } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
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

export default ModalPage;
