import { Bug, Building } from 'lucide-react';

import {
  GalleryImage as Gallery,
  Accordion,
  Alert,
  Avatar,
  Badge,
  Box,
  Banner,
  Breadcrumb,
  Button,
  Card,
  CloseButton,
  Code,
  ContentScrollable,
  Drawer,
  Figure,
  FullScreenToggle,
  Carousel,
  CarouselSlides,
  CarouselControls,
  CarouselContent,
  CarouselDots,
  BreadcrumbItem,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
  AlertHeader,
  AlertFooter,
  AlertBody,
  AvatarFallback,
  AvatarImage,
  BannerSubTitle,
  BannerTitle,
  CardDescription,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  FigureCaption,
  FigureImage,
  BadgeIcon,
  Image,
} from 'kalki-ui';
import { Fragment, useState } from 'react';

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
          <Accordion size="sm" className="mb-4" variant={item} key={item}>
            <AccordionItem>
              <AccordionHeader eventKey="1">Header 1</AccordionHeader>
              <AccordionBody eventKey="1">
                lore m ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nib
              </AccordionBody>
              <AccordionHeader eventKey="2">Header 1</AccordionHeader>
              <AccordionBody eventKey="2">
                lore m ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nib
              </AccordionBody>
            </AccordionItem>
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
          <Alert className="mb-4 " variant={item} key={item}>
            <AlertHeader>Header 1</AlertHeader>
            <AlertBody>
              lore m ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nib
            </AlertBody>
            <AlertFooter>Footer 1</AlertFooter>
          </Alert>
        ))}
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Avatar</p>

        <Avatar size="md" shape="circle">
          <AvatarImage src="" alt="User avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <Avatar size="lg" shape="square" className="border-2 border-blue-500">
          <AvatarImage src="/path/to/image.jpg" className="grayscale hover:grayscale-0 transition-all" />
          <AvatarFallback className="bg-blue-100">
            <span className="text-blue-600">JD</span>
          </AvatarFallback>
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
          <Badge variant={item} size="sm" key={item}>
            <BadgeIcon>
              <Bug className="size-4" />
            </BadgeIcon>
            <div>{item}</div>
            <BadgeIcon>
              <Building className="size-4" />
            </BadgeIcon>
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
          <Banner variant={item} size="sm" key={item}>
            <BannerTitle>{item}</BannerTitle>
            <BannerSubTitle>Subtitle</BannerSubTitle>
          </Banner>
        ))}
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Breadcrumb</p>
        <Breadcrumb size="xs">
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/about">About</BreadcrumbItem>
          <BreadcrumbItem active>Current Page</BreadcrumbItem>
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
          <Button variant={item} isPending={false} size="xs" key={item}>
            {item}
          </Button>
        ))}
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>Card</p>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
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
          <CarouselContent>
            <p>Content</p>
          </CarouselContent>
          <CarouselDots />
          <CarouselControls>
            <Button>Previous</Button>
            <Button>Next</Button>
          </CarouselControls>
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
          <Code variant={item} size="sm" key={item}>
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
          <ContentScrollable height="200px" width="200px" variant={item} key={item}>
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
              <DrawerHeader closeButton onClose={() => setDrawerStates[position](false)}>
                <DrawerTitle>{position.charAt(0).toUpperCase() + position.slice(1)} Drawer</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>{position.charAt(0).toUpperCase() + position.slice(1)} Drawer Content</DrawerBody>
            </Drawer>
          </Fragment>
        ))}
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>figure</p>
        <Figure className="w-fit">
          <FigureImage src="https://picsum.photos/300/200" alt="Random image" />
          <FigureCaption>Random image</FigureCaption>
        </Figure>
      </Box>

      <Box outlined rounded padding="10px" margin="10px">
        <p>FullScreenToggle</p>
        <FullScreenToggle />
      </Box>
      <Box outlined rounded padding="10px" margin="10px">
        <p>Gallery</p>
        <Gallery pattern="compact">
          <Image src="https://picsum.photos/300/200" alt="Random image 1" />
          <Image src="https://picsum.photos/300/200?random=2" alt="Random image 2" />
          <Image src="https://picsum.photos/300/200?random=3" alt="Random image 3" />
          <Image src="https://picsum.photos/300/200?random=4" alt="Random image 4" />
          <Image src="https://picsum.photos/300/200?random=5" alt="Random image 5" />
          <Image src="https://picsum.photos/300/200?random=6" alt="Random image 6" />
          <Image src="https://picsum.photos/300/200?random=7" alt="Random image 7" />
          <Image src="https://picsum.photos/300/200?random=8" alt="Random image 8" />
          <Image src="https://picsum.photos/300/200?random=9" alt="Random image 9" />
        </Gallery>
      </Box>
    </div>
  );
};

export default Usage;
