import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import { docs } from './data/cardData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const CardsPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Card</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
    </div>
  );
};

export default CardsPage;
