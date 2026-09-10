import { useState } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonText,
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselSlides,
  Image,
} from 'kalki-ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PlaygroundShell, { CheckboxGrid, OptionGroup, SIZES_SM_XL } from './PlaygroundShell';

type Size = (typeof SIZES_SM_XL)[number];

const SLIDES = [
  { src: 'https://picsum.photos/seed/kalki-1/800/400', alt: 'Mountain lake', caption: 'Mountain lake at dawn' },
  { src: 'https://picsum.photos/seed/kalki-2/800/400', alt: 'Forest path', caption: 'Forest trail in autumn' },
  { src: 'https://picsum.photos/seed/kalki-3/800/400', alt: 'Ocean sunset', caption: 'Ocean sunset horizon' },
];

const CarouselPlayground = () => {
  const [size, setSize] = useState<Size>('md');
  const [showDots, setShowDots] = useState(true);
  const [showCaptions, setShowCaptions] = useState(true);

  const generateCode = () => `<Carousel size="${size}">
  <CarouselSlides>
    <Image src="..." objectFit="cover" alt="Mountain lake" />
    <Image src="..." objectFit="cover" alt="Forest path" />
    <Image src="..." objectFit="cover" alt="Ocean sunset" />
  </CarouselSlides>${
    showCaptions
      ? `
  <CarouselContent>
    <p>Mountain lake at dawn</p>
    <p>Forest trail in autumn</p>
    <p>Ocean sunset horizon</p>
  </CarouselContent>`
      : ''
  }
  <CarouselControls>
    <Button variant="light" size="sm">
      <ButtonIcon><ChevronLeft /></ButtonIcon>
      <ButtonText>Previous</ButtonText>
    </Button>
    <Button variant="light" size="sm">
      <ButtonText>Next</ButtonText>
      <ButtonIcon><ChevronRight /></ButtonIcon>
    </Button>
  </CarouselControls>${showDots ? '\n  <CarouselDots />' : ''}
</Carousel>`;

  return (
    <PlaygroundShell
      preview={
        <Carousel size={size} className="max-w-full w-full">
          <CarouselSlides>
            {SLIDES.map((slide) => (
              <Image key={slide.src} src={slide.src} objectFit="cover" alt={slide.alt} />
            ))}
          </CarouselSlides>
          {showCaptions && (
            <CarouselContent>
              {SLIDES.map((slide) => (
                <p key={slide.caption} className="text-sm text-muted-foreground mt-2">
                  {slide.caption}
                </p>
              ))}
            </CarouselContent>
          )}
          <CarouselControls>
            <Button variant="light" size="sm">
              <ButtonIcon>
                <ChevronLeft className="size-4" />
              </ButtonIcon>
              <ButtonText>Previous</ButtonText>
            </Button>
            <Button variant="light" size="sm">
              <ButtonText>Next</ButtonText>
              <ButtonIcon>
                <ChevronRight className="size-4" />
              </ButtonIcon>
            </Button>
          </CarouselControls>
          {showDots && <CarouselDots />}
        </Carousel>
      }
      controls={
        <>
          <OptionGroup label="Size" options={SIZES_SM_XL} value={size} onChange={setSize} />
          <CheckboxGrid
            options={[
              { label: 'Captions', checked: showCaptions, onChange: setShowCaptions },
              { label: 'Dots', checked: showDots, onChange: setShowDots },
            ]}
          />
        </>
      }
      code={generateCode()}
      previewClassName="min-h-72 overflow-hidden w-full"
    />
  );
};

export default CarouselPlayground;
