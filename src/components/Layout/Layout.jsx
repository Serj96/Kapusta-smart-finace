import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import {
//   Container,
//   KapustaBcgImgTop,
//   KapustaBcgImgBottom,
// } from '../App.styled';
import MainPage from 'MainPage/MainPage';

import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>

      <MainPage>
        {/* <KapustaBcgImgTop /> */}
        {/* <Container> */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        {/* </Container> */}
        {/* <KapustaBcgImgBottom /> */}
      </MainPage>
      <footer></footer>
    </>
  );
};
