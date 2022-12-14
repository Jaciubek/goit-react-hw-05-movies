import styles from './SharedLayout.module.css';
import styled from 'styled-components';
import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';

const StyledLink = styled(NavLink)`
  position: relative;
  color: blue;
  text-decoration: none;
  font-weight: 600;
  margin-right: 150px;
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    content: '';
  }
  &:hover {
    &::after {
      background-color: red;
    }
  }
  &.active {
    color: red;
  }
`;
export const SharedLayout = () => {
  const { header, nav } = styles;
  return (
    <>
      <header className={header}>
        <nav className={nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

