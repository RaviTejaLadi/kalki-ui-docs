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
