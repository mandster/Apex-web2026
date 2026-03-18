import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navi() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  
    const handleDropdownEnter = () => {
      setIsDropdownOpen(true);
    };

    const handleSubDropdownEnter = () => {
      setIsSubDropdownOpen(true);
    };
  
    const handleSubDropdownLeave = () => {
      setIsSubDropdownOpen(false);
    };
    const handleDropdownLeave = () => {
      setIsDropdownOpen(false);
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
          data-mdb-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Submenu &raquo;
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <a className="dropdown-item" href="#">Submenu item 1</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Submenu item 2</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <a className="dropdown-item" href="#">Multi level 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Multi level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dropdown-item" href="#">Submenu item 4</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Submenu item 5</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    );
  };

export default Navi;