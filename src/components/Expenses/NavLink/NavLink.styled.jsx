import styled from '@emotion/styled';
import { myTheme } from '../../Theme/Theme';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;

  @media screen and (max-width: 767.98px) {
    gap: 4px;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 158px;
  height: 53px;
  padding: 7px 32px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;

  color: ${myTheme.colors.secondary};
  background-color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 767.98px) {
    background-color: ${myTheme.backgroundColors.secondary};

    &.active {
      background-color: ${myTheme.colors.hover};
      color: ${myTheme.backgroundColors.primary};
    }

    &:hover:not(.active),
    &:focus:not(.active) {
      background-color: ${myTheme.colors.hover};
      color: ${myTheme.backgroundColors.primary};
    }
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    &.active {
      color: ${myTheme.colors.hover};
    }

    &:hover:not(.active),
    &:focus:not(.active) {
      color: ${myTheme.colors.hover};
    }
  }
`;
