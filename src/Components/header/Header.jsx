import React from 'react';
import LeftSide from './LeftSide';
import "../../css/Header.css";

const Header = () => {
  return (
    <div className="sticky-header">
      <header>
        <LeftSide />
      </header>
    </div>
  );
}

export default Header;