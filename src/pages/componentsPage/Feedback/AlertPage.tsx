import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/alertData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const AlertPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Alerts</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
        Alerts are used to capture the user&apos;s attention for various reasons such as informing them of important
        events, errors, warnings, or other significant information.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default AlertPage;
