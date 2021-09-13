import React from "react";
import { Route } from "react-router-dom";
import HeroContent from "../HeroContent/HeroContent";
import FitsWho from "../FitsWho/fitsWho";
import ModesBlock from "../ModesBlock/ModesBlock";
import DesignBlock from "../DesignBlock/DesignBlock";
const Main = () => {
  return (
    <main>
      <Route path="/" component={HeroContent} />
      <Route exact path="/" component={DesignBlock} />
      <Route path="/" component={ModesBlock} />
      <Route path="/" component={FitsWho} />
    </main>
  );
};
export default Main;
