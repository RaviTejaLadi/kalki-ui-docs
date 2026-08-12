import { SectionHeader, Separator, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/dropdownData';

const DropdownPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Dropdown</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Dropdown provides a flexible, accessible select experience powered by the Select primitives, ideal for custom
          menus and filter controls.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="Select"
        importCode={`import { Select } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default DropdownPage;
