import { Bug, Building } from 'lucide-react';
import Accordion from './Accordion';
import Alert from './Alert';
import Avatar from './Avatar';
import Badge from './Badge';
import Box from './Box';
import Banner from './Banner';
import Breadcrumb from './Breadcrumb';
import Button from './Button';
import Card from './Card';
import Carousel, { CarouselSlides } from './Carousel';
import CloseButton from './CloseButton';
import Code from './Code';
import ContentScrollable from './ContentScrollable';
import Drawer from './Drawer';
import { Fragment, useState } from 'react';
import Figure from './Figure';
import Form from './Form';
import LabelExt from './Form/LabelExt/LabelExt';
import { InputField } from './Form/InputField/InputField';

const Usage = () => {
  const [rightDrawer, setRightDrawer] = useState(false);
  const [topDrawer, setTopDrawer] = useState(false);
  const [bottomDrawer, setBottomDrawer] = useState(false);
  const [leftDrawer, setLeftDrawer] = useState(false);
  const drawerPositions = ['right', 'top', 'bottom', 'left'] as const;
  const drawerStates = {
    right: rightDrawer,
    top: topDrawer,
    bottom: bottomDrawer,
    left: leftDrawer,
  } as const;
  const setDrawerStates = {
    right: setRightDrawer,
    top: setTopDrawer,
    bottom: setBottomDrawer,
    left: setLeftDrawer,
  } as const;
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

      <Box outlined rounded padding="10px" margin="10px">
        <p>Breadcrumb</p>
        <Breadcrumb size="xs">
          <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item to="/about">About</Breadcrumb.Item>
          <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
        </Breadcrumb>
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Button</p>
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
          'ghost' as const,
          'link' as const,
        ].map((item) => (
          <Button variant={item} isPending={false} size="xs">
            {item}
          </Button>
        ))}
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Card</p>
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Card Content</p>
          </Card.Content>
          <Card.Footer>
            <p>Card Footer</p>
          </Card.Footer>
        </Card>
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Carousel</p>
        <Carousel outlined size="sm" width="400px" height="300px" borderRadius="10px" padding="sm">
          <CarouselSlides>
            <img src="https://picsum.photos/300/200" className="w-full" alt="Random image 1" />
            <img src="https://picsum.photos/300/200?random=2" className="w-full" alt="Random image 2" />
            <img src="https://picsum.photos/300/200?random=3" className="w-full" alt="Random image 3" />
          </CarouselSlides>
          <Carousel.Content>
            <p>Content</p>
          </Carousel.Content>
          <Carousel.Dots />
          <Carousel.Controls>
            <Button>Previous</Button>
            <Button>Next</Button>
          </Carousel.Controls>
        </Carousel>
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Close Button</p>
        <CloseButton onClick={() => console.log('Close button clicked')} />
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Code</p>
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
          <Code variant={item} size="sm">
            {`() => console.log('Close button clicked')`}
          </Code>
        ))}
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Content scrollable</p>
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
          <ContentScrollable height="200px" width="200px" variant={item}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit reprehenderit laboriosam facere
            deserunt voluptate illum amet tenetur voluptatibus architecto quaerat aliquam quia excepturi eos eius modi,
            obcaecati consequatur. Numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit
            reprehenderit laboriosam facere deserunt voluptate illum amet tenetur voluptatibus architecto quaerat
            aliquam quia excepturi eos eius modi, obcaecati consequatur. Numquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur impedit reprehenderit laboriosam facere deserunt voluptate illum amet tenetur
            voluptatibus architecto quaerat aliquam quia excepturi eos eius modi, obcaecati consequatur. Numquam?
          </ContentScrollable>
        ))}
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Drawer</p>

        {drawerPositions.map((position) => (
          <Fragment key={position}>
            <Button onClick={() => setDrawerStates[position](true)} className="mx-2">
              Open Drawer {position}
            </Button>
            <Drawer
              isOpen={drawerStates[position]}
              onClose={() => setDrawerStates[position](false)}
              position={position}
            >
              <Drawer.Header closeButton onClose={() => setDrawerStates[position](false)}>
                <Drawer.Title>{position.charAt(0).toUpperCase() + position.slice(1)} Drawer</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>{position.charAt(0).toUpperCase() + position.slice(1)} Drawer Content</Drawer.Body>
            </Drawer>
          </Fragment>
        ))}
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>figure</p>
        <Figure className="w-fit">
          <Figure.Image src="https://picsum.photos/300/200" alt="Random image" />
          <Figure.Caption>Random image</Figure.Caption>
        </Figure>
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Form</p>
        <Form onSubmit={() => console.log('Form submitted')}>
          <LabelExt label="Name" htmlFor="name" info="Name info" />
          <Form.Input name='test' size='sm' type="tel" placeholder="Text input" />
          <InputField  name='test' size='sm' placeholder="placeholder" label="test" info="text2"/>
        </Form>
      </Box>
    </div>
  );
};

export default Usage;
