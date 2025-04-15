// import HeroSectionOne from '@/components/Blocks/HeroSection/HeroSectionOne';
// import HeroSectionThree from '@/components/Blocks/HeroSection/HeroSectionThree';
// import HeroSectionTwo from '@/components/Blocks/HeroSection/HeroSectionTwo';
// import CardFive from '@/components/Blocks/Cards/CardFive';
// import CardFour from '@/components/Blocks/Cards/CardFour';
// import CardOne from '@/components/Blocks/Cards/CardOne';
// import CardThree from '@/components/Blocks/Cards/CardThree';
// import CardTwo from '@/components/Blocks/Cards/CardTwo';
import Separator from '@/components/common/Separator';

const Blocks = () => {
  return (
    <div className="container">
      <div className="pl-2 pt-14 mb-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Kalki UI Blocks - Building Blocks for the Web</h1>
        <p className="text-sm text-muted-foreground text-wrap">
          Get started with free and premium UI components.Clean, modern building blocks. Copy and paste into your apps.
          Works with all React frameworks. Open Source. Free forever.
        </p>
      </div>
      <Separator />
      {/* <HeroSectionOne /> */}
      {/* <HeroSectionTwo /> */}
      {/* <HeroSectionThree /> */}
      {/* <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive /> */}
    </div>
  );
};

export default Blocks;
