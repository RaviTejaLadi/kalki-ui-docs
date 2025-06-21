import Button from '@/components/common/Button';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card';
import { docsData } from '@/types/docsData';
import { Clock, Eye, Users } from 'lucide-react';

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
  {
    title: 'Stats card type 1',
    code: `
<Card>
  <CardHeader className="pb-2">
    <CardTitle className="text-sm font-medium">Website Analytics</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-blue-500" />
          <span className="text-sm">Visitors</span>
        </div>
        <span className="font-semibold">2,451</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="h-4 w-4 text-green-500" />
          <span className="text-sm">Page Views</span>
        </div>
        <span className="font-semibold">4,832</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-orange-500" />
          <span className="text-sm">Avg. Session</span>
        </div>
        <span className="font-semibold">2m 34s</span>
      </div>
    </div>
  </CardContent>
</Card>

        `,
    snippet: (
      <Card className="w-[30rem]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Website Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Visitors</span>
              </div>
              <span className="font-semibold">2,451</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-green-500" />
                <span className="text-sm">Page Views</span>
              </div>
              <span className="font-semibold">4,832</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Avg. Session</span>
              </div>
              <span className="font-semibold">2m 34s</span>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
];
