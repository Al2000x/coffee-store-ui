import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ddOpen, setDDIsOpen] = useState(false);
  return (
    <div className=''>
      <h3>About</h3>
      <div className="dropdown">
          <button className="dropbtn">Our Products</button>
          <div className="dropdown-content">
              <a href="#">Cups</a>
              <a href="#">Coffee bags</a>
              <a href="#">Sets</a>
          </div>
      </div>
      <h3>Coffee News</h3>
    </div>
  );
};

export default Navigation;
