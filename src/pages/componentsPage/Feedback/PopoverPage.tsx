import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import Head from '@/components/Head';
import { IMetaData } from '@/types/metaData';

const metaData: IMetaData = {
  title: 'Popover',
  description:
    'A floating container that appears next to a trigger element, often used for tooltips or contextual information.',
};

const PopoverPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <SectionHeader variant="transparent" size="sm" className="my-8">
        <SectionHeaderTitle className="tracking-wide">Coming Soon</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Popover is coming soon. Documentation and interactive examples will appear here when the component is ready.
        </SectionHeaderSubTitle>
      </SectionHeader>
    </div>
  );
};

export default PopoverPage;
