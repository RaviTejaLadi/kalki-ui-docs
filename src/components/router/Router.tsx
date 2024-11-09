import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import TopBar from '~/components/shared/TopBar/TopBar';
import Loading from '~/components/shared/Loading';

const Home = lazy(() => import('~/pages/Home'));
const GetStarted = lazy(() => import('~/pages/getStarted/GetStarted'));
const NotFoundScreen = lazy(() => import('~/pages/NotFound'));

function Layout() {
  return (
    <Fragment>
      <TopBar />
      <Outlet />
    </Fragment>
  );
}

function Routes() {
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
          path: '/getStarted',
          element: <GetStarted />,
        },
        {
          path: '*',
          element: <NotFoundScreen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
