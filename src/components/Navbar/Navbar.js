import React from 'react';
import Search from '../Search/Search'
// import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile'
// import { Link } from 'react-router-dom'

const Navbar = ({ logout }) => {
  const token = localStorage.token
  return (
    <div>
      {/* <Logo /> */}
      <Search />
      {token ? <p onClick={logout}>Logout</p> : null }
      {/* //  <Link to="/help">Help Center</Link> */}
      <Profile />
    </div>
  );
};

export default Navbar;