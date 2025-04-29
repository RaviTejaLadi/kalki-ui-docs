import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/inputData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const InputPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Input</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Input is used to create interactive form elements that allow users to enter or select data. It is one of the
          most versatile and commonly used HTML elements and is essential for creating forms that capture user input for
          various purposes such as login forms, search bars, contact forms, and more.
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

export default InputPage;
