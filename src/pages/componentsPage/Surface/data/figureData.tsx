import { Figure, FigureCaption, FigureImage } from 'kalki-ui';
import { sampleDog2, sampleDog3 } from '@/assets/samples';
import { docsData } from '@/types/docsData';

const pic = sampleDog2;
const secondaryPic = sampleDog3;

export const docs: docsData[] = [
  {
    title: 'Basic Figure',
    desc: 'A simple figure with an image and caption',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="600px">
      <FigureImage src={IMAGE_URL} alt="Example" className="rounded-md" />
      <FigureCaption>This is a sample image</FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="600px">
        <FigureImage src={pic} alt="Example" className="rounded-md" />
        <FigureCaption>This is a sample image</FigureCaption>
      </Figure>
    ),
  },
  {
    title: 'Custom Dimensions',
    desc: 'Figure with custom width and height',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="300px" height="300px">
      <FigureImage src={IMAGE_URL} alt="Landscape" />
      <FigureCaption>Beautiful landscape</FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="300px" height="300px">
        <FigureImage src={pic} alt="Landscape" />
        <FigureCaption>Beautiful landscape</FigureCaption>
      </Figure>
    ),
  },
  {
    title: 'Custom Margin',
    desc: 'Figure with custom margin',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="500px" height="300px" margin="20px">
      <FigureImage src={IMAGE_URL} alt="Portrait" />
      <FigureCaption>Portrait with extra margin</FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="500px" height="300px" margin="20px">
        <FigureImage src={pic} alt="Portrait" />
        <FigureCaption>Portrait with extra margin</FigureCaption>
      </Figure>
    ),
  },
  {
    title: 'Figure with Node Caption',
    desc: 'Figure with a React node as caption',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="600px" height="400px">
      <FigureImage src={IMAGE_URL} alt="Technology" />
      <FigureCaption>
        <strong>Fig. 1:</strong> Advanced technology in action
      </FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="600px" height="400px">
        <FigureImage src={pic} alt="Technology" />
        <FigureCaption>
          <strong>Fig. 1:</strong> Advanced technology in action
        </FigureCaption>
      </Figure>
    ),
  },
  {
    title: 'Multiple Images in Figure',
    desc: 'Figure containing multiple images',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="98%">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FigureImage
          src={IMAGE_URL}
          alt="Image 1"
          style={{ width: "48%", height: "400px", objectFit: "contain" }}
        />
        <FigureImage
          src={IMAGE_URL}
          alt="Image 2"
          style={{ width: "48%", height: "400px", objectFit: "contain" }}
        />
      </div>
      <FigureCaption>Comparison of two samples</FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="98%">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FigureImage src={pic} alt="Image 1" style={{ width: '48%', height: '400px', objectFit: 'contain' }} />
          <FigureImage
            src={secondaryPic}
            alt="Image 2"
            style={{ width: '48%', height: '400px', objectFit: 'contain' }}
          />
        </div>
        <FigureCaption>Comparison of two samples</FigureCaption>
      </Figure>
    ),
  },
  {
    title: 'Figure with Custom Image Styles',
    desc: 'Figure with custom styles applied to the image',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="200px" height="auto">
      <FigureImage
        src={IMAGE_URL}
        alt="Circular Image"
        style={{ borderRadius: "50%", width: "200px", height: "200px", objectFit: "cover" }}
      />
      <FigureCaption>A circular image</FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="200px" height="auto">
        <FigureImage
          src={pic}
          alt="Circular Image"
          style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <FigureCaption>A circular image</FigureCaption>
      </Figure>
    ),
  },
  {
    title: 'Figure with Additional Content',
    desc: 'Figure with additional content besides image and caption',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="300px">
      <FigureImage src={IMAGE_URL} alt="Chart" />
      <FigureCaption>Monthly Sales Chart</FigureCaption>
      <p style={{ fontSize: "0.8em", color: "#666" }}>Data source: Company sales report, 2023</p>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="300px">
        <FigureImage src={pic} alt="Chart" />
        <FigureCaption>Monthly Sales Chart</FigureCaption>
        <p style={{ fontSize: '0.8em', color: '#666' }}>Data source: Company sales report, 2023</p>
      </Figure>
    ),
  },
  {
    title: 'Responsive Figure',
    desc: 'Figure that adjusts based on screen size',
    code: `
import { Figure, FigureImage, FigureCaption } from "kalki-ui";

const IMAGE_URL =
  "${pic}";

export default function Example() {
  return (
    <Figure width="100%" style={{ maxWidth: "600px" }}>
      <FigureImage src={IMAGE_URL} alt="Responsive Image" />
      <FigureCaption>This figure adjusts to the screen size</FigureCaption>
    </Figure>
  );
}
`,
    snippet: (
      <Figure width="100%" style={{ maxWidth: '600px' }}>
        <FigureImage src={pic} alt="Responsive Image" />
        <FigureCaption>This figure adjusts to the screen size</FigureCaption>
      </Figure>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const figureProps = [
  ['children', 'node', 'Required', 'The content of the figure, typically including FigureImage and FigureCaption.'],
  ['width', 'string', '-', 'Specifies the width of the figure container.'],
  ['height', 'string', '-', 'Specifies the height of the figure container.'],
  ['margin', 'string', '5px', 'Specifies the margin around the figure container.'],
];

export const figureImageProps = [
  ['src', 'string', '-', 'The source URL of the image.'],
  ['alt', 'string', '-', 'Alternative text for the image.'],
];

export const figureCaptionProps = [
  ['children', 'string | node', '-', 'The content of the caption, can be a string or a React node.'],
];
