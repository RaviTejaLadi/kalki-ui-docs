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
