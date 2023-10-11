import React from 'react';
import LeftSide from './LeftSide';
import "../../css/Header.css";
import Navigation from './Navigation';
import RightSide from './RightSide';
const Header = () => {
  return (
    <div className="sticky-header">
      <header>
        <LeftSide />
        <Navigation></Navigation>
        <RightSide></RightSide>
      </header>
    </div>
  );
}

export default Header;