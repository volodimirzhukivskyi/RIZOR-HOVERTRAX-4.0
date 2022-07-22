import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Title from "../../components/Title/Title";
import TvButton from "../../components/TvButton/TvButton";
import { modes } from "../../helpers/itemsList";
const ModesBlock = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="ModesBlock" id="section-two">
      <div data-aos="fade-up" className="ModesBlock__text-wrapper">
        <Title tag={"h2"}>режимы</Title>

        <ul className="text__list">
          Помимо «умной» подсветки, <span>Hovertrax 4.0</span> снабжён двумя
          скоростными режимами.
          {modes.map((item, i) => (
            <li key={i} className="text__list-item">
              {item}
            </li>
          ))}
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
          <TvButton />
        </div>
      </div>
    </section>
  );
};
export default ModesBlock;
