import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import Div from '@/components/common/Div';
import Head from '@/components/Head';
// import  NumberRenderer  from '@/components/common/NumberRenderer/NumberRenderer';
// import { useState } from 'react';

export default function Home() {
  // const [count, setCount] = useState(12345);
  return (
    <Div>
      {/* <div className="space-y-8 p-8 bg-gray-100">
        <div>
          <h3 className="text-lg font-bold mb-2">Default</h3>
          <NumberRenderer number={count} />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Neon with Glow</h3>
          <NumberRenderer number={count} variant="neon" glow size="lg" />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Plasma with Staggered Animation</h3>
          <NumberRenderer number={count} variant="plasma" glow size="lg" staggered />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Countup Animation</h3>
          <NumberRenderer
            number={count}
            variant="futuristic"
            countUp
            duration={3000}
            decimal={1}
            prefix="$"
            suffix=" USD"
            size="lg"
            glow
          />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Cosmic with Hexagon Shape</h3>
          <NumberRenderer number={count} variant="cosmic" shape="hexagon" glow size="lg" hoverEffect="grow" />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Volcanic with Diamond Shape & Bounce</h3>
          <NumberRenderer number={count} variant="volcanic" shape="diamond" glow size="lg" animation="bounce" />
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setCount((prev) => prev + 1000)}>
          Increase Count
        </button>
      </div> */}
      <Head title="Home" />
      <HeroSection />
      <FeaturesSection />
      <ComponentCategoriesSection />
      <FooterSection />
    </Div>
  );
}
