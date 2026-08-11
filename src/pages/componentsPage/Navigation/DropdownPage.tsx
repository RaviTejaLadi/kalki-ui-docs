import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/dropdownData';

const DropdownPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Dropdown</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Dropdown provides a flexible, accessible select experience powered by the Select primitives, ideal for custom
          menus and filter controls.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="Select"
        importCode={`import { Select } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default DropdownPage;
