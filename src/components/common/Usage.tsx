import { Bug, Building } from 'lucide-react';
import Accordion from './Accordion';
import Alert from './Alert';
import Avatar from './Avatar';
import Badge from './Badge';
import Box from './Box';
import Banner from './Banner';

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
      <Box outlined rounded padding="10px" margin="10px">
        <p>Alert</p>
        {[
          'primary' as const,
          'secondary' as const,
          'warning' as const,
          'danger' as const,
          'help' as const,
          'success' as const,
          'light' as const,
        ].map((item) => (
          <Alert className="mb-4 " variant={item}>
            <Alert.Header>Header 1</Alert.Header>
            <Alert.Body>
              lore m ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nib
            </Alert.Body>
            <Alert.Footer>Footer 1</Alert.Footer>
          </Alert>
        ))}
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Avatar</p>

        <Avatar size="md" shape="circle">
          <Avatar.Image src="" alt="User avatar" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>

        <Avatar size="lg" shape="square" className="border-2 border-blue-500">
          <Avatar.Image src="/path/to/image.jpg" className="grayscale hover:grayscale-0 transition-all" />
          <Avatar.Fallback className="bg-blue-100">
            <span className="text-blue-600">JD</span>
          </Avatar.Fallback>
        </Avatar>
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Badge</p>
        {[
          'primary' as const,
          'secondary' as const,
          'warning' as const,
          'danger' as const,
          'help' as const,
          'success' as const,
          'light' as const,
          'dark' as const,
          'outline' as const,
        ].map((item) => (
          <Badge variant={item} size="sm">
            <Badge.Icon>
              <Bug className="size-4" />
            </Badge.Icon>
            <div>{item}</div>
            <Badge.Icon>
              <Building className="size-4" />
            </Badge.Icon>
          </Badge>
        ))}
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Banner</p>
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
          <Banner variant={item} size="sm">
            <Banner.Title>{item}</Banner.Title>
            <Banner.SubTitle>Subtitle</Banner.SubTitle>
          </Banner>
        ))}
      </Box>
    </div>
  );
};

export default Usage;
