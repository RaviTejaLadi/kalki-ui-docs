import { Code, SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/boxData';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import BoxPlayground from '@/components/playground/BoxPlayground';

const metaData: IMetaData = {
  title: 'Box',
  description: `Box component is a versatile container that provides several customization
          options, including size ,padding ,margin ,elevation (box-shadow) ,border radius,border styles, and
          colors. It can be used to create consistent and styled containers across your
          application.`,
};

const BoxPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          The <Code variant="light">Box</Code> component is a versatile container that provides several customization
          options, including <Code variant="light">size</Code> ,<Code variant="light">padding</Code>,
          <Code variant="light">margin</Code> ,<Code variant="light">elevation (box-shadow)</Code> ,{' '}
          <Code variant="light">border radius</Code>, <Code variant="light">border styles</Code> , and{' '}
          <Code variant="light">colors</Code> . It can be used to create consistent and styled containers across your
          application.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <BoxPlayground />
      <DocsDivider />
      <DocumentationRenderer data={docs} componentName="Box" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default BoxPage;
