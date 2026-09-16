import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/dropdownData';
import DropdownPlayground from '@/components/playground/DropdownPlayground';

const DropdownPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Dropdown</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Dropdown provides a flexible, accessible single-select menu for filters, form controls, and option pickers.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DropdownPlayground />
      <DocsDivider />
      <DocumentationRenderer
        className="my-4"
        data={docs}
        componentName="Dropdown"
        importCode={`import { Dropdown } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default DropdownPage;
