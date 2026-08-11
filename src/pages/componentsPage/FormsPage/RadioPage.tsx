import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/radioData';

const RadioPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Radio</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Radio is used when users need to select exactly one option from a small set of mutually exclusive choices.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="Radio"
        importCode={`import Form, { FormGroup, Radio } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default RadioPage;
