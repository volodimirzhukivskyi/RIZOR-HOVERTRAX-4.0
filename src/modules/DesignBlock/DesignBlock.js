import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const DesignBlock = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="DesignBlock container" id="section-one">
      <div data-aos="fade-right" className="DesignBlock__wrapper-content">
        <div className="DesignBlock__wrapper-img ">
          <img
            className="DesignBlock__wrapper-pic "
            src="/img/geroscooter.png"
            alt=""
          />

          <button className="DesignBlock-img__block">
            <img
              className="DesignBlock-img__block-pic"
              src="/img/right_arrow.png"
              alt="right_arrow"
            />
          </button>
        </div>
        <div className="text">
          <h2 className="text__general-title">преимущества</h2>
          <h3 className="text__block-title">дизайн</h3>
          <ul className="text__list">
            Внешний вид скутера дышит идеями футуризма:
            <li className="text__list-item">плавные линии</li>
            <li className="text__list-item">
              подсветка светодиодными индикаторами
            </li>
            <li className="text__list-item">
              рельефные бамперы, оснащенные защитными панелями
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-left" className="DesignBlock__wrapper-card">
        <div className="DesignBlock__card DesignBlock-card">
          <div className="DesignBlock-card__wrapper">
            <h3 className="DesignBlock-card__title">цвет</h3>
            <p className="DesignBlock-card__text">
              Модель представлена сразу в нескольких цветах.{" "}
            </p>
            <div className="block__wrapper">
              <span className="block__color block__color--yellow" />
              <span className="block__color block__color--blue" />
              <span className="block__color block__color--red" />
              <span className="block__color block__color--grey" />
              <span className="block__color block__color--black" />
            </div>
          </div>

          <img
            className="DesignBlock-card__img"
            src="/img/product_geroscuter.png"
            alt="product_geroscuter"
          />
          <img
            className="DesignBlock-card__img-line"
            src="/img/card_line.png"
            alt=""
          />
        </div>

        <h2 className="DesignBlock__title">
          4.0
          <br />
          Rizor
        </h2>
      </div>
    </section>
  );
};
export default DesignBlock;
