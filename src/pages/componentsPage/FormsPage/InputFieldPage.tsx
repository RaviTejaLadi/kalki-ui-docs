import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/inputFieldData';

const InputFieldPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">InputField</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          InputField is a composite component that combines LabelExt, Input and FormErrorMessage into a single,
          accessible form field.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="InputField"
        importCode={`import { InputField } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default InputFieldPage;
