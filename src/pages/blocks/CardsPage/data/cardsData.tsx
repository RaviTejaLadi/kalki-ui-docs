import CardFive from '@/components/Blocks/Cards/CardFive';
import CardFour from '@/components/Blocks/Cards/CardFour';
import CardOne from '@/components/Blocks/Cards/CardOne';
import CardThree from '@/components/Blocks/Cards/CardThree';
import CardTwo from '@/components/Blocks/Cards/CardTwo';
import { docsData } from '@/types/docsData';

export const data: docsData[] = [
  {
    title: 'HeroSectionOne',
    code: `
import Button from '@/components/common/Button';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';

const CardOne = () => {
  return (
    <Card className="m-4 w-[500px]">
      <CardHeader>
        <CardTitle>Card Title 1</CardTitle>
        <CardDescription>Some brief description about the card content.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        <p>
          This is an example of a card with purely textual content. It can be used to display information in a concise
          and clean manner.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button size="sm">Action 1</Button>
        <Button size="sm" variant="outline">
          Action 2
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardOne;

          `,
    snippet: <CardOne />,
  },
  {
    title: 'HeroSectionTwo',
    code: `
import Badge from '@/components/common/Badge';
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';
import { Link } from 'react-router-dom';
import placeholder from '../../../assets/placeholder.svg';
import Image from '@/components/common/Image';

const CardTwo = () => {
  return (
    <Card className="m-4 w-[500px]">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Card Title 2</CardTitle>
        <Badge>Featured</Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        <Image
          src={placeholder}
          alt="Placeholder"
          imgClassName="w-full h-[200px] rounded-md object-cover"
          style={{ aspectRatio: '200/200', objectFit: 'cover' }}
        />
        <p className="text-sm">This card features an image and a badge along with some textual content.</p>
      </CardContent>
      <CardFooter>
        <Link to="#">Read more</Link>
      </CardFooter>
    </Card>
  );
};

export default CardTwo;

          `,
    snippet: <CardTwo />,
  },
  {
    title: 'HeroSectionOne',
    code: `
import Avatar, { AvatarFallback, AvatarImage } from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';

const CardThree = () => {
  return (
    <Card className="m-4 w-[500px]">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>UA</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>User Name</CardTitle>
            <CardDescription>@username</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        <p>This card includes an avatar, making it suitable for user-related information.</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size="sm">Follow</Button>
      </CardFooter>
    </Card>
  );
};

export default CardThree;
          `,
    snippet: <CardThree />,
  },
  {
    title: 'HeroSectionOne',
    code: `
import Button from '@/components/common/Button';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';
import { StarIcon } from 'lucide-react';

const CardFour = () => {
  return (
    <Card className="m-4 w-[500px]">
      <CardHeader>
        <CardTitle>Product Highlights</CardTitle>
        <CardDescription>Check out our latest features</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <p className="text-sm">Feature 1: Improved User Interface</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <p className="text-sm">Feature 2: Enhanced Performance</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <p className="text-sm">Feature 3: Advanced Security</p>
        </div>
      </CardContent>
      <CardFooter className="py-4">
        <Button variant="outline">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default CardFour;
          `,
    snippet: <CardFour />,
  },
  {
    title: 'HeroSectionOne',
    code: `
import Avatar, { AvatarFallback, AvatarImage } from '@/components/common/Avatar';
import Badge from '@/components/common/Badge';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';
import { Link } from 'react-router-dom';

const CardFive = () => {
  return (
    <Card className="m-4 w-[500px]">
      <CardHeader className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="@kalkiui" />
          <AvatarFallback>Ku</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>@kalkiui</CardTitle>
          <CardDescription>Front-end Developer</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <p className="text-sm text-center">
          I am a front-end developer who specializes in building performant and scalable web applications.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between py-4">
        <Badge variant="success">Active</Badge>
        <Link to="#">View Profile</Link>
      </CardFooter>
    </Card>
  );
};

export default CardFive;
          `,
    snippet: <CardFive />,
  },
];
