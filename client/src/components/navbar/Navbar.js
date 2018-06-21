import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list--item">
              <a className="nav__brand" href="/">
                <img className="nav__brand--img" src="../img/logo.png" alt="" />
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--item-link" href="#">
                Home
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--item-link" href="#">
                About
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--item-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
