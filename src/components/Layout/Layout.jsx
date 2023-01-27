import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainerDiv } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <StyledContainerDiv>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </StyledContainerDiv>
  );
};
