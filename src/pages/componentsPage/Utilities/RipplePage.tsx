import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/rippleData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import RipplePlayground from '@/components/playground/RipplePlayground';

const RipplePage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Ripple</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          A Ripple effect is a design technique that adds a visual effect to a website that gives the impression that a
          button has been pressed. It&apos;s a visual feedback mechanism that shows the user that an element has been
          touched.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <RipplePlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Ripple" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default RipplePage;
