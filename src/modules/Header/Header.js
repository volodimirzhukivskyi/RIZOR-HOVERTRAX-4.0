import React from "react";
import Tab from "../Tab/Tab";

const Header = () => {
  return (
    <header className="top-nav">
      <div className="top-nav__wrapper container">
        <img className="top-nav__logo" src="./img/logo.png" alt="logo" />
        <nav className="top-nav__menu">
          <ul className="top-nav__list">
            <li className="top-nav__link">
              <Tab
                elUrlNav="/#section-one"
                style={{ borderBottom: "2px solid blue" }}
                text={"Преимущества"}
              />
            </li>
            <li className="top-nav__link">
              <Tab
                elUrlNav="/#section-two"
                style={{ borderBottom: "2px solid blue" }}
                text={"характеристики"}
              />
            </li>
            <li className="top-nav__link">
              <Tab
                elUrlNav="/#section-three"
                style={{ borderBottom: "2px solid blue" }}
                text={"для кого"}
              />
            </li>
          </ul>
        </nav>
        <details className="select__wrapper">
          <summary>Menu</summary>
          <div className="wrapper__menu">
            <ul>
              <li className="top-nav__link">
                <Tab
                  className="wrapper__menu-link"
                  elUrlNav="/page#section-one"
                  style={{ borderBottom: "2px solid blue" }}
                  text={"Преимущества"}
                />
              </li>
              <li className="top-nav__link">
                <Tab
                  className="wrapper__menu-link"
                  elUrlNav="/page#section-two"
                  style={{ borderBottom: "2px solid blue" }}
                  text={"характеристики"}
                />
              </li>
              <li className="top-nav__link">
                <Tab
                  className="wrapper__menu-link"
                  elUrlNav="/page#section-three"
                  style={{ borderBottom: "2px solid blue" }}
                  text={"для кого"}
                />
              </li>
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
