import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
const GridBackgroundPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Grid Background</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Documentation for the Grid Background component is not available yet.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <SectionHeader variant="transparent" size="md" align="center" className="py-16">
        <SectionHeaderTitle className="tracking-wide">Coming Soon</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide max-w-md">
          We are currently working on this component. Stay tuned for updates.
        </SectionHeaderSubTitle>
      </SectionHeader>
    </div>
  );
};

export default GridBackgroundPage;
