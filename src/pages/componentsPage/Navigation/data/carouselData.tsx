import Carousel from '@/components/common/Carousel';
import Button from '@/components/common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { dog1, dog2, dog3, dog4 } from '../assets';
import { docsData } from '@/types/docsData';
import Image from '@/components/common/Image';

export const docs: docsData[] = [
  {
    title: 'Basic Carousel',
    desc: 'A simple carousel with images and navigation controls',
    code: `
        <Carousel size="md">
          <Carousel.Slides>
            <img src={dog1} alt="Slide 1" />
            <img src={dog2} alt="Slide 2" />
            <img src={dog3} alt="Slide 3" />
            <img src={dog4} alt="Slide 4" />
          </Carousel.Slides>
          <Carousel.Controls>
            <Button>
              <Button.Icon>
                <ChevronLeft width="20px" height="20px" />
              </Button.Icon>
              <Button.Text>Previous</Button.Text>
            </Button>
            <Button>
              <Button.Text>Next</Button.Text>
              <Button.Icon>
                <ChevronRight width="20px" height="20px" />
              </Button.Icon>
            </Button>
          </Carousel.Controls>
        </Carousel>
    `,
    snippet: (
      <Carousel size="md">
        <Carousel.Slides>
          <Image src={dog1} alt="Slide 1" />
          <Image src={dog2} alt="Slide 2" />
          <Image src={dog3} alt="Slide 3" />
          <Image src={dog4} alt="Slide 4" />
        </Carousel.Slides>
        <Carousel.Controls>
          <Button>
            <Button.Icon>
              <ChevronLeft width="20px" height="20px" />
            </Button.Icon>
            <Button.Text>Previous</Button.Text>
          </Button>
          <Button>
            <Button.Text>Next</Button.Text>
            <Button.Icon>
              <ChevronRight width="20px" height="20px" />
            </Button.Icon>
          </Button>
        </Carousel.Controls>
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
