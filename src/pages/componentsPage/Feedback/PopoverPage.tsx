import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
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
        <SectionHeader.Title className="tracking-wide">{metaData.title}</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">{metaData.description}</SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <SectionHeader variant="transparent" size="sm" className="my-8">
        <SectionHeader.Title className="tracking-wide">Coming Soon</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Popover is coming soon. Documentation and interactive examples will appear here when the component is ready.
        </SectionHeader.SubTitle>
      </SectionHeader>
    </div>
  );
};

export default PopoverPage;
