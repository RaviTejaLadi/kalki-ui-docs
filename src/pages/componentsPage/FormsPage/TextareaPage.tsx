import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/textareaData';

const TextareaPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Textarea</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Textarea is a multi-line input field designed for capturing longer user input such as comments, feedback, or
          messages.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="Textarea"
        importCode={`import Form, { FormGroup, Textarea } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default TextareaPage;
