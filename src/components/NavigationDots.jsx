import React from "react";
import { routes } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {routes.map((link) => {
        return (
          <a
            className="app__link"
            href={`#${link}`}
            key={link}
            className={`app__navigation-dot ${active && "active"}`}
          />
        );
      })}
    </div>
  );
};

export default NavigationDots;
