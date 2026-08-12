import {
  Carousel,
  Button,
  Image,
  CarouselControls,
  CarouselContent,
  CarouselSlides,
  CarouselDots,
  ButtonIcon,
  ButtonText,
} from 'kalki-ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { dog1, dog2, dog3, dog4 } from '../assets';
import { docsData } from '@/types/docsData';
export const docs: docsData[] = [
  {
    title: 'Basic Carousel',
    desc: 'A simple carousel with images and navigation controls',
    code: `
import { Carousel, Button, Image, ButtonIcon, ButtonText, CarouselSlides, CarouselControls } from "kalki-ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Example() {
  return (
    <Carousel size="md">
      <CarouselSlides>
        <Image src="https://picsum.photos/seed/carousel1/800/400" objectFit="cover" alt="Slide 1" />
        <Image src="https://picsum.photos/seed/carousel2/800/400" objectFit="cover" alt="Slide 2" />
        <Image src="https://picsum.photos/seed/carousel3/800/400" objectFit="cover" alt="Slide 3" />
        <Image src="https://picsum.photos/seed/carousel4/800/400" objectFit="cover" alt="Slide 4" />
      </CarouselSlides>
      <CarouselControls>
        <Button variant="light">
          <ButtonIcon>
            <ChevronLeft width="20px" height="20px" />
          </ButtonIcon>
          <ButtonText>Previous</ButtonText>
        </Button>
        <Button variant="light">
          <ButtonText>Next</ButtonText>
          <ButtonIcon>
            <ChevronRight width="20px" height="20px" />
          </ButtonIcon>
        </Button>
      </CarouselControls>
    </Carousel>
  );
}
`,
    snippet: (
      <Carousel size="md">
        <CarouselSlides>
          <Image src={dog1} objectFit="cover" alt="Slide 1" />
          <Image src={dog2} objectFit="cover" alt="Slide 2" />
          <Image src={dog3} objectFit="cover" alt="Slide 3" />
          <Image src={dog4} objectFit="cover" alt="Slide 4" />
        </CarouselSlides>
        <CarouselControls>
          <Button variant="light">
            <ButtonIcon>
              <ChevronLeft width="20px" height="20px" />
            </ButtonIcon>
            <ButtonText>Previous</ButtonText>
          </Button>
          <Button variant="light">
            <ButtonText>Next</ButtonText>
            <ButtonIcon>
              <ChevronRight width="20px" height="20px" />
            </ButtonIcon>
          </Button>
        </CarouselControls>
      </Carousel>
    ),
  },
  {
    title: 'Carousel with Content',
    desc: 'A carousel with images and corresponding text content',
    code: `
import { Carousel, Button, Image, ButtonText, CarouselSlides, CarouselContent, CarouselControls } from "kalki-ui";

export default function Example() {
  return (
    <Carousel size="md">
      <CarouselSlides>
        <Image src="https://picsum.photos/seed/carousel1/800/400" objectFit="cover" alt="Slide 1" />
        <Image src="https://picsum.photos/seed/carousel2/800/400" objectFit="cover" alt="Slide 2" />
        <Image src="https://picsum.photos/seed/carousel3/800/400" objectFit="cover" alt="Slide 3" />
      </CarouselSlides>
      <CarouselContent>
        <h3>Dog 1</h3>
        <h3>Dog 2</h3>
        <h3>Dog 3</h3>
      </CarouselContent>
      <CarouselControls>
        <Button variant="light">
          <ButtonText>Previous</ButtonText>
        </Button>
        <Button variant="light">
          <ButtonText>Next</ButtonText>
        </Button>
      </CarouselControls>
    </Carousel>
  );
}
`,
    snippet: (
      <Carousel size="md">
        <CarouselSlides>
          <Image src={dog1} objectFit="cover" alt="Slide 1" />
          <Image src={dog2} objectFit="cover" alt="Slide 2" />
          <Image src={dog3} objectFit="cover" alt="Slide 3" />
        </CarouselSlides>
        <CarouselContent>
          <h3>Dog 1</h3>
          <h3>Dog 2</h3>
          <h3>Dog 3</h3>
        </CarouselContent>
        <CarouselControls>
          <Button variant="light">
            <ButtonText>Previous</ButtonText>
          </Button>
          <Button variant="light">
            <ButtonText>Next</ButtonText>
          </Button>
        </CarouselControls>
      </Carousel>
    ),
  },
  {
    title: 'Carousel with Dots',
    desc: 'A carousel with navigation dots for direct slide selection',
    code: `
import { Carousel, Image, CarouselSlides, CarouselDots } from "kalki-ui";

export default function Example() {
  return (
    <Carousel size="md">
      <CarouselSlides>
        <Image src="https://picsum.photos/seed/carousel1/800/400" objectFit="cover" alt="Slide 1" />
        <Image src="https://picsum.photos/seed/carousel2/800/400" objectFit="cover" alt="Slide 2" />
        <Image src="https://picsum.photos/seed/carousel3/800/400" objectFit="cover" alt="Slide 3" />
      </CarouselSlides>
      <CarouselDots />
    </Carousel>
  );
}
`,
    snippet: (
      <Carousel size="md">
        <CarouselSlides>
          <Image src={dog1} objectFit="cover" alt="Slide 1" />
          <Image src={dog2} objectFit="cover" alt="Slide 2" />
          <Image src={dog3} objectFit="cover" alt="Slide 3" />
        </CarouselSlides>
        <CarouselDots />
      </Carousel>
    ),
  },
  {
    title: 'Custom Styled Carousel',
    desc: 'A carousel with custom styling applied to its components',
    code: `
import { Carousel, Button, Image, CarouselSlides, CarouselContent, CarouselControls } from "kalki-ui";

export default function Example() {
  return (
    <Carousel className="bg-[#9b9999] border">
      <CarouselSlides className="border rounded-md shadow-lg">
        <Image src="https://picsum.photos/seed/carousel1/800/400" objectFit="cover" alt="Slide 1" />
        <Image src="https://picsum.photos/seed/carousel2/800/400" objectFit="cover" alt="Slide 2" />
      </CarouselSlides>
      <CarouselContent className="text-foreground p-2 text-center">
        <p>Content 1</p>
        <p>Content 2</p>
      </CarouselContent>
      <CarouselControls className="border p-2 rounded-md">
        <Button>Previous</Button>
        <Button>Next</Button>
      </CarouselControls>
    </Carousel>
  );
}
`,
    snippet: (
      <Carousel className="bg-[#9b9999] border">
        <CarouselSlides className="border rounded-md shadow-lg">
          <Image src={dog1} objectFit="cover" alt="Slide 1" />
          <Image src={dog2} objectFit="cover" alt="Slide 2" />
        </CarouselSlides>
        <CarouselContent className="text-foreground p-2 text-center">
          <p>Content 1</p>
          <p>Content 2</p>
        </CarouselContent>
        <CarouselControls className="border p-2 rounded-md">
          <Button>Previous</Button>
          <Button>Next</Button>
        </CarouselControls>
      </Carousel>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const carouselRows = [
  ['size', 'string', '"sm"', "Predefined size of the carousel. Options are 'sm', 'md', 'lg', 'xl'."],
  ['width', 'string', 'Based on size', 'Custom width of the carousel. Overrides the width set by size.'],
  ['height', 'string', 'Based on size', 'Custom height of the carousel. Overrides the height set by size.'],
  ['borderRadius', 'string', '"5px"', 'Border radius of the carousel container.'],
  ['padding', 'string', '"10px"', 'Padding of the carousel container.'],
  ['className', 'string', '""', 'Additional CSS class for the carousel container.'],
  ['style', 'object', '{}', 'Additional inline styles for the carousel container.'],
  ['children', 'node', 'Required', 'Child components of the carousel (Slides, Content, Controls, Dots).'],
  [
    'elevation',
    'number',
    '0',
    'Box-shadow level for the Box component. Acceptable values range from 0,1,2,3,4,6,8,12,16,24.',
  ],
  ['margin', 'string', "'0'", 'Margin around the Box component.'],
  ['outlined', 'bool', 'false', 'If true, the Box component will have a border outline.'],
  ['rounded', 'bool', 'false', 'If true, the Box component will have rounded corners.'],
  ['color', 'string', 'null', 'Text color for the content inside the Box component.'],
  ['backgroundColor', 'string', 'null', 'Background color for the Box component.'],
];

export const carouselSlides = [
  ['className', 'string', '""', 'Additional CSS class for the carousel container.'],
  ['style', 'object', '{}', 'Additional inline styles for the carousel container.'],
  ['children', 'node', 'Required', 'React nodes to be displayed as content.'],
];

export const carouselContent = [
  ['className', 'string', '""', 'Additional CSS class for the carousel container.'],
  ['style', 'object', '{}', 'Additional inline styles for the carousel container.'],
  ['children', 'node', 'Required', 'React nodes to be displayed as content.'],
];

export const carouselControls = [
  ['className', 'string', '""', 'Additional CSS class for the carousel container.'],
  ['style', 'object', '{}', 'Additional inline styles for the carousel container.'],
  ['children', 'node', 'Required', 'React nodes to be displayed as content.'],
];

export const carouselDots = [
  ['className', 'string', '""', 'Additional CSS class for the carousel container.'],
  ['style', 'object', '{}', 'Additional inline styles for the carousel container.'],
];
