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
