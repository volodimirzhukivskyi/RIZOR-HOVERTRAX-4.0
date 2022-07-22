import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Title from "../../components/Title/Title";
import TvButton from "../../components/TvButton/TvButton";
import { design, designItems } from "../../helpers/itemsList";
import { colors } from "../../helpers/colors";
import ColorBlock from "../../components/ColorBlock/ColorBlock";
const DesignBlock = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="DesignBlock container" id="section-one">
      <div data-aos="fade-right" className="DesignBlock__wrapper-content">
        <div className="DesignBlock__wrapper-img ">
          <TvButton text={false} className={"DesignBlock-img__test"} />
        </div>
        <div className="text">
          <Title tag={"h3"}>преимущества</Title>
          <Title tag={"h2"}>дизайн</Title>
          <ul className="text__list">
            Внешний вид скутера дышит идеями футуризма:
            {designItems.map((item, i) => (
              <li key={i} className="text__list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div data-aos="fade-left" className="DesignBlock__wrapper-card">
        <div className="DesignBlock__card DesignBlock-card">
          <div className="DesignBlock-card__wrapper">
            <Title tag={"h2"}>цвет</Title>
            <p className="DesignBlock-card__text">
              Модель представлена сразу в нескольких цветах.{" "}
            </p>
            <div className="block__wrapper">
              {colors.map((color, i) => (
                <ColorBlock key={i} color={color} />
              ))}
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
