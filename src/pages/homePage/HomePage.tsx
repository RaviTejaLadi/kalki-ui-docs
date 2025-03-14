import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import Div from '@/components/common/Div';
import Head from '@/components/Head';
import ContactForm from './ContactForm';

export default function Home() {
  return (
    <Div>
      <Head title="Home" />
      <HeroSection />
      <FeaturesSection />
      <ComponentCategoriesSection />
      <FooterSection />
      <ContactForm />
    </Div>
  );
}
