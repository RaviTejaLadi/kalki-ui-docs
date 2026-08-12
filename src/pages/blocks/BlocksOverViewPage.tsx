import { Card, CardContent } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { Link } from 'react-router-dom';
import { categorizedBlocksRoutesData } from '@/components/Layout/BlocksLayout/categorizedBlocksRoutes';

const BlocksOverViewPage = () => {
  return (
    <div className="container py-6">
      <div className="mb-4 max-w-2xl px-1">
        <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
          Kalki UI Blocks - Building Blocks for the Web
        </h1>
        <p className="text-sm text-muted-foreground text-wrap">
          Get started with free and premium UI components. Clean, modern building blocks. Copy and paste into your apps.
          Works with all React frameworks. Open Source. Free forever.
        </p>
      </div>
      <DocsDivider />
      <div className="flex flex-wrap items-stretch gap-3 p-2 sm:gap-4">
        {categorizedBlocksRoutesData.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="w-full sm:w-auto">
              <Card className="w-full sm:w-[15rem] transition hover:shadow-md">
                <CardContent className="w-auto truncate font-medium">{item.category}</CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlocksOverViewPage;
