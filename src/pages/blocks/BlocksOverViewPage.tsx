import Card, { CardContent } from '@/components/common/Card';
import { Link } from 'react-router-dom';
import Separator from '@/components/common/Separator';
import { categorizedBlocksRoutesData } from '@/components/Layout/BlocksLayout/categorizedBlocksRoutes';

const BlocksOverViewPage = () => {
  return (
    <div className="container">
      <div className="pl-2 pt-14 mb-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Kalki UI Blocks - Building Blocks for the Web</h1>
        <p className="text-sm text-muted-foreground text-wrap">
          Get started with free and premium UI components.Clean, modern building blocks. Copy and paste into your apps.
          Works with all React frameworks. Open Source. Free forever.
        </p>
      </div>
      <Separator />
      <div className="p-2">
        {categorizedBlocksRoutesData.map((item, index) => {
          return (
            <Card key={index} className="w-fit">
              <CardContent>
                <Link to={item.path}>{item.category}</Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BlocksOverViewPage;
