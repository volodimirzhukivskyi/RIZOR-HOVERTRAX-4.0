import React from "react";
import Header from "./modules/Header/Header";
import Main from "./modules/Main/Main";
import Footer from "./modules/Footer/Footer";

const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
