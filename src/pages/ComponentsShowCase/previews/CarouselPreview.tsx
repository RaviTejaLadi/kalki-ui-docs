import Carousel from '@/components/common/Carousel';

export const CarouselPreviews = {
  basic: (
    <Carousel size="sm" className="border rounded-lg overflow-hidden">
      <Carousel.Slides>
        <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800">Slide 1</div>
        <div className="w-full h-full flex items-center justify-center bg-green-100 text-green-800">Slide 2</div>
        <div className="w-full h-full flex items-center justify-center bg-purple-100 text-purple-800">Slide 3</div>
      </Carousel.Slides>
      <Carousel.Controls />
      <Carousel.Dots />
    </Carousel>
  ),
};
