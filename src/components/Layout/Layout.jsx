import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainPage from 'MainPage/MainPage';

import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Theme/BreakPoints';

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <AppBar />
        </Container>
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
