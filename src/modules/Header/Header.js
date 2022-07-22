import React from "react";
import Tab from "../../components/Tab/Tab";
import { links } from "../../helpers/links";

const Header = () => {
  const printLinks = () => {
    return links.map(
      (link, i) =>
        link.url !== "/#" && (
          <li key={i} className="top-nav__link">
            <Tab
              url={link.url}
              active={{ borderBottom: "2px solid #4925D5" }}
              text={link.name}
            />
          </li>
        )
    );
  };
  return (
    <header className="top-nav">
      <div className="top-nav__wrapper container">
        <Tab
          className="top-nav__logo"
          url="/"
          text={
            <img
              className="top-nav__logo"
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              alt="logo"
            />
          }
        />
        <nav className="top-nav__menu">
          <ul className="top-nav__list">{printLinks()}</ul>
        </nav>
        <details className="select__wrapper">
          <summary>Menu</summary>
          <div className="wrapper__menu">
            <ul>{printLinks()}</ul>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
