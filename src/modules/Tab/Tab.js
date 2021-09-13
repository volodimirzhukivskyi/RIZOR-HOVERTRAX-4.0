import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Tab = (props) => {
  const { text, elUrlNav, className, style } = props;
  return (
    <NavHashLink className={className} activeStyle={style} smooth to={elUrlNav}>
      {text}
    </NavHashLink>
  );
};
export default Tab;
