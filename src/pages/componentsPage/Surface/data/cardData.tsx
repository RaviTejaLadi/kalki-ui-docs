import Button from '@/components/common/Button';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic usage',
    desc: 'Displays a card with header, content, and footer.',
    code: `
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi facilis animi ex ducimus
          officiis impedit, perspiciatis deleniti reiciendis qui sapiente cum, aspernatur quibusdam magnam aut!
          Praesentium consectetur voluptate dolore?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
        `,
    snippet: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi facilis animi ex ducimus
          officiis impedit, perspiciatis deleniti reiciendis qui sapiente cum, aspernatur quibusdam magnam aut!
          Praesentium consectetur voluptate dolore?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    ),
  },
];
