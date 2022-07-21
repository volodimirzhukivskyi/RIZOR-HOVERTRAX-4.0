import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Tab = ({ text, url, className, active = {} }) => {
  return (
    <NavHashLink className={className} activeStyle={active} smooth to={url}>
      {text}
    </NavHashLink>
  );
};
export default Tab;
