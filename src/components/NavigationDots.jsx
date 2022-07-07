import React from "react";
import { routes } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {routes.map((link) => {
        return (
          <a
            href={`#${link}`}
            key={link}
            className={`app__navigation-dot ${active===link ? "active":''}`}
          />
        );
      })}
    </div>
  );
};

export default NavigationDots;
