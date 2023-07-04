import React from 'react';
import { StyledLink } from '../Header/styled';


export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
}