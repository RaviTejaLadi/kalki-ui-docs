import { useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const BREADCRUMB_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
const SEPARATORS = ['chevron', 'arrow', 'dot', 'slash', 'circle'] as const;

type Size = (typeof BREADCRUMB_SIZES)[number];
type Separator = (typeof SEPARATORS)[number];

const BreadcrumbPlayground = () => {
  const [size, setSize] = useState<Size>('md');
  const [separator, setSeparator] = useState<Separator>('chevron');

  const generateCode = () => `<Breadcrumb size="${size}" separator="${separator}">
  <BreadcrumbItem to="/">Home</BreadcrumbItem>
  <BreadcrumbItem to="/components">Components</BreadcrumbItem>
  <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
</Breadcrumb>`;

  return (
    <PlaygroundShell
      preview={
        <Breadcrumb size={size} separator={separator}>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/components">Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      }
      controls={
        <>
          <OptionGroup label="Size" options={BREADCRUMB_SIZES} value={size} onChange={setSize} />
          <OptionGroup label="Separator" options={SEPARATORS} value={separator} onChange={setSeparator} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default BreadcrumbPlayground;
