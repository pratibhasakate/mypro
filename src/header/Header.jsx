import React from 'react';
import Logo from './logo/Logo';
import Profile from './profile/Profile.jsx';
import Search from './search/Search';

const Header = () => {
    const name="Pratibha"
  return (
    <div>
      This is Header 
      <Logo/>
      <Profile sharedName={name}/>
      <Search/>

    </div>
  )
}

export default Header;
