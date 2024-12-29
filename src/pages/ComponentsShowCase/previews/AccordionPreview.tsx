import { Accordion } from 'kalki-ui';

const AccordionPreview = {
  basic: (
    <Accordion size="sm" className="mb-4" variant="primary">
      <Accordion.Item>
        <Accordion.Header eventKey="1">what is accordion in react ?</Accordion.Header>
        <Accordion.Body eventKey="1" className="tracking-wide">
          An accordion is a UI component that allows users to expand and collapse content sections. It's a great way to
          organize information and make your UI more interactive.
        </Accordion.Body>
        <Accordion.Header eventKey="2">Accordion Example</Accordion.Header>
        <Accordion.Body eventKey="2" className="tracking-wide">
          demonstrates a form divided into three sections using an accordion to show one section at a time.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ),
};

export default AccordionPreview;
