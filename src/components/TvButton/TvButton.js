import React from "react";
import cn from "classnames";
const TvButton = ({ text = true, className }) => {
  return (
    <div className={cn(className ? className : "button__text-wrapper")}>
      {text && (
        <p className="button__text">
          Смотреть <br />
          видео
        </p>
      )}
      <button className="button" />
    </div>
  );
};
export default TvButton;
