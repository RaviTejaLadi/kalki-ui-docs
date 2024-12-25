import { Fragment, lazy, ReactNode, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes, Navigate } from 'react-router-dom';

import TopBar from '@/components/shared/TopBar/TopBar';
import Loading from '@/components/shared/Loading';
import ErrorBoundary from '../Error/ErrorBoundary';
import TurboUtilities from '@/pages/TurboUtilities/TurboUtilities';

const Home = lazy(() => import('@/pages/homePage/HomePage'));
const GetStarted = lazy(() => import('@/pages/getStartedPage/GetStartedPage'));
const Colors = lazy(() => import('@/pages/Colors'));
const Components = lazy(() => import('@/pages/componentsPage/componentsPage'));
const NotFoundScreen = lazy(() => import('@/pages/NotFound'));

function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col ">
      <div className="fixed top-0 left-0 right-0 z-50 h-11">
        <TopBar />
      </div>
      <main className="flex-grow pt-11 ">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'get-started',
          element: <GetStarted />,
        },
        {
          path: 'colors',
          element: <Colors />,
        },
        {
          path: 'components/*',
          element: <Components />,
        },
        {
          path: 'turbo-utilities',
          element: <TurboUtilities />,
        },
        {
          path: '404',
          element: <NotFoundScreen />,
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

const DevOnly = ({ children }: { children: ReactNode }) => {
  if (import.meta.env.MODE === 'development') {
    return <Fragment>{children}</Fragment>;
  }
  return <Fragment>{children}</Fragment>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <DevOnly>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </DevOnly>
      </Suspense>
    </BrowserRouter>
  );
};
export default Router;
