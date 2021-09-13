import React, { useEffect } from "react";
import Tab from "../Tab/Tab";

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
          <h1 className="heroContent-text__title">RIzor Hovertrax 4.0</h1>
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
            <div className="button__text-wrapper">
              <p className="button__text">
                Смотреть <br />
                видео
              </p>
              <button className="button" />
            </div>
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
        <Tab
          className="scrollbar__circle"
          elUrlNav="/#"
          style={{ border: "2px solid blue", backgroundColor: "white" }}
          text={"Главная"}
        />
        <Tab
          className="scrollbar__circle"
          elUrlNav="/#section-one"
          style={{ border: "2px solid blue", backgroundColor: "white" }}
          text={"Преимущества"}
        />
        <Tab
          className="scrollbar__circle"
          elUrlNav="/#section-two"
          style={{ border: "2px solid blue", backgroundColor: "white" }}
          text={"Характеристики"}
        />
        <Tab
          className="scrollbar__circle"
          elUrlNav="/#section-three"
          style={{ border: "2px solid blue", backgroundColor: "white" }}
          text={"Для кого"}
        />
        <span className="scrollbar__long-line" />
      </div>
    </section>
  );
};
export default HeroContent;
