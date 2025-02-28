import Figure from '@/components/common/Figure';
import { docsData } from '@/types/docsData';
const pic =
  'https://images.unsplash.com/photo-1739993655680-4b7050ed2896?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const docs: docsData[] = [
  {
    title: 'Basic Figure',
    desc: 'A simple figure with an image and caption',
    code: `
<Figure>
  <Figure.Image src="https://example.com/image.jpg" alt="Example" />
  <Figure.Caption>This is a sample image</Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="600px">
        <Figure.Image src={pic} alt="Example" />
        <Figure.Caption>This is a sample image</Figure.Caption>
      </Figure>
    ),
  },
  {
    title: 'Custom Dimensions',
    desc: 'Figure with custom width and height',
    code: `
<Figure width="300px" height="300px">
  <Figure.Image src="https://example.com/landscape.jpg" alt="Landscape" />
  <Figure.Caption>Beautiful landscape</Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="300px" height="300px">
        <Figure.Image src={pic} alt="Landscape" />
        <Figure.Caption>Beautiful landscape</Figure.Caption>
      </Figure>
    ),
  },
  {
    title: 'Custom Margin',
    desc: 'Figure with custom margin',
    code: `
<Figure width="500px" height="300px" margin="20px">
  <Figure.Image src="https://example.com/portrait.jpg" alt="Portrait" />
  <Figure.Caption>Portrait with extra margin</Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="500px" height="300px" margin="20px">
        <Figure.Image src={pic} alt="Portrait" />
        <Figure.Caption>Portrait with extra margin</Figure.Caption>
      </Figure>
    ),
  },
  {
    title: 'Figure with Node Caption',
    desc: 'Figure with a React node as caption',
    code: `
<Figure width="600px" height="400px">
  <Figure.Image src="https://example.com/tech.jpg" alt="Technology" />
  <Figure.Caption>
    <strong>Fig. 1:</strong> Advanced technology in action
  </Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="600px" height="400px">
        <Figure.Image src={pic} alt="Technology" />
        <Figure.Caption>
          <strong>Fig. 1:</strong> Advanced technology in action
        </Figure.Caption>
      </Figure>
    ),
  },
  {
    title: 'Multiple Images in Figure',
    desc: 'Figure containing multiple images',
    code: `
<Figure width="100%">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Figure.Image src="https://example.com/image1.jpg" alt="Image 1" style={{ width: '48%',height:"400px",objectFit:'contain' }} />
    <Figure.Image src="https://example.com/image2.jpg" alt="Image 2" style={{ width: '48%',height:"400px",objectFit:'contain' }} />
  </div>
  <Figure.Caption>Comparison of two samples</Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="98%">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Figure.Image src={pic} alt="Image 1" style={{ width: '48%', height: '400px', objectFit: 'contain' }} />
          <Figure.Image src={pic} alt="Image 2" style={{ width: '48%', height: '400px', objectFit: 'contain' }} />
        </div>
        <Figure.Caption>Comparison of two samples</Figure.Caption>
      </Figure>
    ),
  },
  {
    title: 'Figure with Custom Image Styles',
    desc: 'Figure with custom styles applied to the image',
    code: `
<Figure>
  <Figure.Image 
    src="https://example.com/circle.jpg" 
    alt="Circular Image" 
    style={{ borderRadius: '50%', width: '200px', height: '200px',objectFit:"cover" }}
  />
  <Figure.Caption>A circular image</Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="200px" height="auto">
        <Figure.Image
          src={pic}
          alt="Circular Image"
          style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <Figure.Caption>A circular image</Figure.Caption>
      </Figure>
    ),
  },
  {
    title: 'Figure with Additional Content',
    desc: 'Figure with additional content besides image and caption',
    code: `
<Figure width="300px">
  <Figure.Image src="https://example.com/chart.jpg" alt="Chart" />
  <Figure.Caption>Monthly Sales Chart</Figure.Caption>
  <p style={{ fontSize: '0.8em', color: '#666' }}>Data source: Company sales report, 2023</p>
</Figure>
      `,
    snippet: (
      <Figure width="300px">
        <Figure.Image src={pic} alt="Chart" />
        <Figure.Caption>Monthly Sales Chart</Figure.Caption>
        <p style={{ fontSize: '0.8em', color: '#666' }}>Data source: Company sales report, 2023</p>
      </Figure>
    ),
  },
  {
    title: 'Responsive Figure',
    desc: 'Figure that adjusts based on screen size',
    code: `
<Figure width="100%" style={{ maxWidth: '600px' }}>
  <Figure.Image src="https://example.com/responsive.jpg" alt="Responsive Image" />
  <Figure.Caption>This figure adjusts to the screen size</Figure.Caption>
</Figure>
      `,
    snippet: (
      <Figure width="100%" style={{ maxWidth: '600px' }}>
        <Figure.Image src={pic} alt="Responsive Image" />
        <Figure.Caption>This figure adjusts to the screen size</Figure.Caption>
      </Figure>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const figureProps = [
  ['children', 'node', 'Required', 'The content of the figure, typically including Figure.Image and Figure.Caption.'],
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
