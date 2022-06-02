/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/img/logo.svg";
import "./Header.scss";

const Header = () => {
  /**
   * Not refreshing the page
   * @param {event} e - Event
   * @returns {void}
   */
  const notRefresh = (e) => e.preventDefault();
  return (
    <header>
      <div className="header-layout">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#" onClick={notRefresh}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#" onClick={notRefresh}>
                Profil
              </a>
            </li>
            <li>
              <a href="#" onClick={notRefresh}>
                Réglage
              </a>
            </li>
            <li>
              <a href="#" onClick={notRefresh}>
                Communauté
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
