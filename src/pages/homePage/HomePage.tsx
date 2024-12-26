import Head from '@/components/SeoMetaData/SeoMetaData';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import Div from '@/components/common/Div';
import Usage from '@/components/common/Usage';

export default function Home() {
  return (
    <Div>
      <Usage/>
      <Head title="Home" />
      <HeroSection />
      <FeaturesSection />
      <ComponentCategoriesSection />
      <FooterSection />
    </Div>
  );
}
