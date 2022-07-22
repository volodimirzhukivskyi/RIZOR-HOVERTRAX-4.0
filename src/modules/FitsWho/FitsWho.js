import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const FitsWho = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="fitsWho" id="section-three">
      <img
        className="fitsWho__img-cog"
        src={`${process.env.PUBLIC_URL}/img/cog_wheel.png`}
        alt=""
      />
      <div data-aos="flip-right" className="fitsWho__text-block">
        <h3 className="fitsWho__title">для кого</h3>
        <p className="fitsWho__text">
          При максимально выдерживаемой нагрузке в
          <span className="fitsWho__text-el">100 кг</span> отлично подойдёт, как
          для подрастающего поколения, так и для более взрослых «наездников».
        </p>
        <p className="fitsWho__text">
          Это единственный гироскутер со специальным детским режимом езды.
        </p>
        <button className="fitsWho__button">перейти в каталог</button>
      </div>
      <div data-aos="zoom-out-left" className="fitsWho__img-wrapper">
        <img
          className="fitsWho__img"
          src={`${process.env.PUBLIC_URL}/img/people_with_geroscooters.png`}
          alt=""
        />
      </div>
    </section>
  );
};
export default FitsWho;
