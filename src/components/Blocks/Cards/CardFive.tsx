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
