import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Tab = ({ text, url, className, active = {}, rightMenu = false }) => {
  return (
    <div className={"tab__div"}>
      {rightMenu && active && <span className={"tab__span"}>{text}</span>}
      <NavHashLink className={className} activeStyle={active} smooth to={url}>
        {text}
      </NavHashLink>
    </div>
  );
};
export default Tab;
