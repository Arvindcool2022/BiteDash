import ReactDom from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { LOCATIONS } from './utils/constants';

import Header from './components/Header';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer';

import About from './pages/About';
import FAQ from './pages/FAQ';
import Error from './pages/Error';
import { Suspense, lazy } from 'react';
const ResPage = lazy(() => import('./pages/ResPage'));

const AppLayout = () => (
  <div id="AppLayout">
    <Header locationList={LOCATIONS} />
    <Outlet />
    <Footer />
  </div>
);

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <MainSection /> },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      {
        path: '/res/:id',
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <ResPage />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
