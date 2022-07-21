import React from "react";
import HeroContent from "../HeroContent/HeroContent";
import FitsWho from "../FitsWho/FitsWho";
import ModesBlock from "../ModesBlock/ModesBlock";
import DesignBlock from "../DesignBlock/DesignBlock";
const Main = () => {
  return (
    <main>
      <HeroContent />
      <DesignBlock />
      <ModesBlock />
      <FitsWho />
    </main>
  );
};
export default Main;
