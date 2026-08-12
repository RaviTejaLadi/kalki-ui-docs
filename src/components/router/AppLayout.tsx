import { Suspense } from 'react';
// import TopBar from '../shared/TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Loading from '../shared/Loading';
import { Navbar } from '../shared/TopBar/NavBar';

export const AppLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="fixed left-0 right-0 top-0 z-50 h-14">
        <Navbar />
      </div>
      <main className="flex-grow pt-14">
        <Suspense fallback={<Loading />}>
          <Outlet />
          <ScrollToTop variant="outline" />
        </Suspense>
      </main>
    </div>
  );
};
