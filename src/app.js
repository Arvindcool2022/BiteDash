import ReactDom from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { LOCATIONS } from './utils/constants';

import Header from './components/Header';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer';

import About from './pages/About';
import FAQ from './pages/FAQ';
import Error from './pages/Error';
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
const ResPage = lazy(() => import('./pages/ResPage'));

const AppLayout = () => {
  const { LoggedInUser: defaultName } = useContext(UserContext);
  const [userName, setUserName] = useState(defaultName);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    //! api call logic
    const data = { user: 'arvind' };

    if (login) setUserName(data.user);
    else setUserName(defaultName);
  }, [login]);

  return (
    <UserContext.Provider value={{ LoggedInUser: userName }}>
      <div id="AppLayout">
        <Header
          locationList={LOCATIONS}
          loggedIn={login}
          loginFunc={() => setLogin(!login)}
        />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

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
