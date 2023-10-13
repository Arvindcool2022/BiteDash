import ReactDom from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import {
  LOCATIONS,
  SWIGGY_API_URL_1,
  SWIGGY_API_URL_2
} from './utils/constants';
import UserContext from './utils/UserContext';
import appStore from './store/appStore';

import Header from './components/Header';
import MainSection from './pages/MainSection';

import About from './pages/About';
import FAQ from './pages/FAQ';
import Error from './pages/Error';
import Cart from './pages/Cart';
const ResPage = lazy(() => import('./pages/ResPage'));

const AppLayout = () => {
  const { LoggedInUser: defaultName } = useContext(UserContext);
  const [userName, setUserName] = useState(defaultName);
  const [login, setLogin] = useState(false);
  const [place, setPlace] = useState(LOCATIONS[0].place);
  const [URL, setURL] = useState(
    `${SWIGGY_API_URL_1}${LOCATIONS[0].geo}${SWIGGY_API_URL_2}`
  );

  useEffect(() => {
    //! api call logic
    const data = { user: 'arvind' };

    setUserName(login ? data.user : defaultName);
  }, [login]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userName, place, URL }}>
        <div id="AppLayout">
          <Header
            locationList={LOCATIONS}
            loggedIn={login}
            loginFunc={() => setLogin(!login)}
            setPlace={setPlace}
            setURL={setURL}
          />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <MainSection /> },
      { path: '/about', element: <About /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/cart', element: <Cart /> },
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
