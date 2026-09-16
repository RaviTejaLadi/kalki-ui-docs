import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from 'kalki-ui';
import { Box, Calculator, Disc3 } from 'lucide-react';
import { sampleDog2 } from '@/assets/samples';

export const CardPreviews = {
  basic: (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center gap-4">
          <img src={sampleDog2} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Passionate about building great user experiences and solving complex problems. Specializes in React and
          TypeScript development.
        </p>
      </CardContent>
      <CardFooter className="w-full flex flex-col justify-start items-start gap-3 ">
        <div className="w-full flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span>📍 San Francisco, CA</span>
          </div>
          <div className="flex gap-1">
            <Box className="size-4" />
            <Calculator className="size-4" />
            <Disc3 className="size-4" />
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <span>🔗 github.com/johndoe</span>
        </div>
      </CardFooter>
    </Card>
  ),
};
