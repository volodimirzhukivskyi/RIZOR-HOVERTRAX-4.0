import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ModesBlock = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="ModesBlock" id="section-two">
      <img className="ModesBlock__img" src="/img/cog_wheel.png" alt="" />
      <div data-aos="fade-up" className="ModesBlock__text-wrapper">
        <h3 className="text__block-title text__title-features">режимы</h3>
        <ul className="text__list">
          Помимо «умной» подсветки, <span>Hovertrax 4.0</span> снабжён двумя
          скоростными режимами.
          <li className="text__list-item">
            Один для продвинутых пользователей
          </li>
          <li className="text__list-item">Второй для новичков</li>
        </ul>
        <div className="text__features text-features">
          <div className=" text-features__block">
            <p className="text-features__number">
              13
              <span className=" text-features__number-el"> км/ч</span>
            </p>
            <p className="text-features__text">Максимальная скорость</p>
          </div>
          <div className=" text-features__block">
            <p className="text-features__number">2</p>
            <p className="text-features__text">Скоростных режима</p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up" className="ModesBlock__img-wrapper">
        <img
          className="ModesBlock__img-pic"
          src="/img/geroscooter_ride.png"
          alt=""
        />
        <div className="button__wrapper  button__wrapper--features-position ">
          <span className="button__circle button__circle--features" />
          <span className="button__line button__line--features-long" />
          <span className="button__line button__line--features-short" />
          <div className="button__text-wrapper">
            <p className="button__text">
              Смотреть <br />
              видео
            </p>
            <button className="button" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModesBlock;
