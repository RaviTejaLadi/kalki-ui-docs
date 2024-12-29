import Card from '@/components/common/Card';
import { Box, Calculator, Disc3 } from 'lucide-react';

export const CardPreviews = {
  basic: (
    <Card className="bg-white">
      <Card.Header>
        <div className="flex items-center gap-4">
          <img src="https://github.com/github.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <Card.Title>John Doe</Card.Title>
            <Card.Description>Software Engineer</Card.Description>
          </div>
        </div>
      </Card.Header>
      <Card.Content>
        <p className="text-muted-foreground">
          Passionate about building great user experiences and solving complex problems. Specializes in React and
          TypeScript development.
        </p>
      </Card.Content>
      <Card.Footer className="w-full flex flex-col justify-start items-start gap-3 ">
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
      </Card.Footer>
    </Card>
  ),
};
