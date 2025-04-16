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
