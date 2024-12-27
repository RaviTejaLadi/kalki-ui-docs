import Accordion from './Accordion';
import Box from './Box';

const Usage = () => {
  return (
    <div>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Accordion</p>
        {[
          'primary' as const,
          'secondary' as const,
          'warning' as const,
          'danger' as const,
          'help' as const,
          'success' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <Accordion size="sm" className="mb-4" variant={item}>
            <Accordion.Item>
              <Accordion.Header eventKey="1">Header 1</Accordion.Header>
              <Accordion.Body eventKey="1">
                lore m ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nib
              </Accordion.Body>
              <Accordion.Header eventKey="2">Header 1</Accordion.Header>
              <Accordion.Body eventKey="2">
                lore m ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nib
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Box>
    </div>
  );
};

export default Usage;
