import React from 'react';
import { useMemo } from 'react';

import { NavItem, NavList } from './NavLink.styled';

const NavLink = () => {
  const NavItems = useMemo(
    () => [
      { href: '/expenses', text: 'EXPENSES' },
      { href: '/income', text: 'INCOME' },
    ],
    []
  );

  return (
    <NavList>
      {NavItems.map(({ href, text }) => (
        <NavItem key={href} to={href}>
          {text}
        </NavItem>
      ))}
    </NavList>
  );
};

export default NavLink;
