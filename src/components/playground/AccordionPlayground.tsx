import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'kalki-ui';
import PlaygroundShell, { COLOR_VARIANTS, OptionGroup, SIZES_SM_2XL } from './PlaygroundShell';

const ACCORDION_VARIANTS = COLOR_VARIANTS;

const AccordionPlayground = () => {
  const [variant, setVariant] = useState<(typeof ACCORDION_VARIANTS)[number]>('primary');
  const [size, setSize] = useState<(typeof SIZES_SM_2XL)[number]>('md');

  const generateCode = () => `<Accordion variant="${variant}" size="${size}">
  <AccordionItem>
    <AccordionHeader eventKey="0">What is Kalki UI?</AccordionHeader>
    <AccordionBody eventKey="0">A reusable React component library for building consistent interfaces.</AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader eventKey="1">Is it customizable?</AccordionHeader>
    <AccordionBody eventKey="1">Yes. Components support variants, sizes, and composition.</AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader eventKey="2">Can I compose components?</AccordionHeader>
    <AccordionBody eventKey="2">Yes. The API is designed for compound component patterns.</AccordionBody>
  </AccordionItem>
</Accordion>`;

  return (
    <PlaygroundShell
      preview={
        <Accordion variant={variant} size={size} className="w-full">
          <AccordionItem>
            <AccordionHeader eventKey="0">What is Kalki UI?</AccordionHeader>
            <AccordionBody eventKey="0">
              A reusable React component library for building consistent interfaces.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader eventKey="1">Is it customizable?</AccordionHeader>
            <AccordionBody eventKey="1">Yes. Components support variants, sizes, and composition.</AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader eventKey="2">Can I compose components?</AccordionHeader>
            <AccordionBody eventKey="2">Yes. The API is designed for compound component patterns.</AccordionBody>
          </AccordionItem>
        </Accordion>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={ACCORDION_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES_SM_2XL} value={size} onChange={setSize} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default AccordionPlayground;
