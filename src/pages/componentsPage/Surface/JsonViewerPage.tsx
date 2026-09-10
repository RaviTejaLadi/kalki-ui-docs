import { SectionHeader, TableList, SectionHeaderTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/jsonViewerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import JsonViewerPlayground from '@/components/playground/JsonViewerPlayground';

const JsonViewerPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">JSON Viewer</SectionHeaderTitle>
      </SectionHeader>
      <DocsDivider />
      <JsonViewerPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="JsonViewer" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default JsonViewerPage;
