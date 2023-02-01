import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainPage from 'MainPage/MainPage';

import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>

      <MainPage>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
      </MainPage>
      <footer></footer>
    </>
  );
};
