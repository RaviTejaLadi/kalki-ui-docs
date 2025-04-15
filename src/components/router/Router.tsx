import { BrowserRouter, RouteObject, useRoutes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from '@/components/shared/Loading';
import ErrorBoundary from '../Error/ErrorBoundary';
import { AppLayout } from './AppLayout';
const ComponentsShowCase = lazy(() => import('@/pages/ComponentsShowCase/ComponentsShowCase'));

const Home = lazy(() => import('@/pages/homePage/HomePage'));
const GetStarted = lazy(() => import('@/pages/getStartedPage/GetStartedPage'));
const Colors = lazy(() => import('@/pages/Colors'));
const Components = lazy(() => import('@/pages/componentsPage/componentsPage'));
const NotFoundScreen = lazy(() => import('@/pages/NotFound'));
const Blocks = lazy(() => import('@/pages/blocks'));

// const DevOnly = ({ children }: { children: ReactNode }) => {
//   if (import.meta.env.MODE !== 'development') {
//     return null;
//   }
//   return <Fragment>{children}</Fragment>;
// };

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppLayout />,
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
          path: '/components-showcase',
          element: <ComponentsShowCase />,
        },
        {
          path: '/blocks/*',
          element: <Blocks />,
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

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
