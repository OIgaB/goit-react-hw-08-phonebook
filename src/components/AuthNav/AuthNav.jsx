import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  // activeLink: {
  //   color: '#E84A5F',
  // },
};

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" style={styles.link} > 
        Sign up
      </NavLink>
      {/* activeStyle={styles.activeLink} */}
      <NavLink to="/login" style={styles.link} >
        Log in
      </NavLink>
      {/* activeStyle={styles.activeLink} */}
    </div>
  );
}