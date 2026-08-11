import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';

const GridBackgroundPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Grid Background</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Documentation for the Grid Background component is not available yet.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <SectionHeader variant="transparent" size="md" align="center" className="py-16">
        <SectionHeader.Title className="tracking-wide">Coming Soon</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide max-w-md">
          We are currently working on this component. Stay tuned for updates.
        </SectionHeader.SubTitle>
      </SectionHeader>
    </div>
  );
};

export default GridBackgroundPage;
