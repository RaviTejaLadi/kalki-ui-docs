import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'kalki-ui';
import { Link } from 'react-router-dom';

const CardFive = () => {
  return (
    <Card className="m-2 sm:m-4 w-full max-w-[500px]">
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
