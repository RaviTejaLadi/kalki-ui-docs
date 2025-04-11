import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/spinnerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Spinner',
  description: `A spinner in web development is an animated graphical element that indicates loading or processing activity.
          It provides visual feedback to users, showing that the system is working and they should wait. Spinners help
          improve the user experience by preventing confusion during delays.`,
};
const SpinnerPage = () => {
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
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default SpinnerPage;
