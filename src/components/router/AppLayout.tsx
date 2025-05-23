import { Suspense } from 'react';
// import TopBar from '../shared/TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../common/ScrollToTop';
import Loading from '../shared/Loading';
import { Navbar } from '../shared/TopBar/NavBar';

export const AppLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col ">
      <div className="fixed top-0 left-0 right-0 z-50 h-11">
        <Navbar />
      </div>
      <main className="flex-grow pt-11 ">
        <Suspense fallback={<Loading />}>
          <Outlet />
          <ScrollToTop variant="outline" />
        </Suspense>
      </main>
    </div>
  );
};
