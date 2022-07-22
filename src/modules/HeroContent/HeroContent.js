import React from "react";
import Tab from "../../components/Tab/Tab";
import { links } from "../../helpers/links";
import Title from "../../components/Title/Title";
import TvButton from "../../components/TvButton/TvButton";

const HeroContent = () => {
  return (
    <section className="heroContent " id="/">
      <div className="heroContent__wrapper">
        <div className="heroContent__img-wrapper">
          <img
            className="heroContent__img-cog"
            src="/img/cog_wheel.png"
            alt=""
          />
        </div>{" "}
        <div className="heroContent__text heroContent-text">
          <Title tag={"h1"}>RIzor Hovertrax 4.0</Title>
          <p className="heroContent-text__text">
            Маневренность, легкость, экологичность
          </p>
          <img
            className="heroContent-text__img"
            src="/img/down_arrow.png"
            alt=""
          />
          <div className="button__wrapper button__wrapper--hero-position">
            <span className="button__circle button__circle--hero" />
            <span className="button__line button__line--hero-long" />
            <span className="button__line button__line--hero-short" />
            <TvButton text={true} />
          </div>
        </div>
        <div className="heroContent__img-wrapper">
          <img
            className="heroContent__img"
            src="/img/close-up_geroscooter.png"
            alt=""
          />
          <p className="heroContent-text__text heroContent-text__text--hidden">
            Маневренность, легкость, экологичность
          </p>
        </div>
      </div>

      <div className="scrollbar">
        <span className="scrollbar__long-line" />
        {links.map((link, i) => (
          <Tab
            key={i}
            className="scrollbar__circle"
            url={link.url}
            style={{ border: "2px solid blue", backgroundColor: "white" }}
            text={link.name}
            rightMenu={true}
          />
        ))}
        <span className="scrollbar__long-line" />
      </div>
    </section>
  );
};
export default HeroContent;
