import React from "react";
import { useCookies } from "react-cookie";
import { motion as m } from "framer-motion";
import { Clicky } from "../partials/SmallComponents";
import "../../assets/css/settings.css";
function Settings() {
  const [, setCookie] = useCookies(["theme"]);
  function pickTheme(theme) {
    setCookie("theme", theme, { path: "/" });
  }
  const list = [
    "Soft Creative",
    "Frosted Aurora",
    "Warm Minimal",
    "Nature Fresh",
    "Cool Ocean",
    "Muted Retro",
    "Soft Rose & Charcoal",
    "Citrus Bright",
    "Smoky Indigo",
    "Peachy Bloom",
    "Cotton Candy Mist",
    "Sunset Sand",
    "Minty Clean",
    "Velvet Rose",
    "Lush Berry",
    "Clay & Blush",
    "Frozen Orchid",
    "Coral Crush",
    "Aqua Mirage",
    "Blueberry Frost",
    "Lavender Ice",
    "Candy Aqua Pop",
    "Muted Twilight",
    "Blush Ink",
    "Monsoon Fog",
    "Iris Haze",
    "Teal Ember",
    "Punch Berry",
    "Molten Space",
    "Radiant Night",
    "Midnight Forest",
    "Cyber Sunset",
    "Luxury Dark Gold",
  ];
  return (
    <div>
      <div className="card">
        <div className="card-title">Themes</div>
        <div className="card-backdrop">
          <div className="theme-list">
            {list.map((theme) => (
              <m.div
                className="small-card"
                {...Clicky("var(--tertiary)")}
                onClick={() => pickTheme(theme)}
                key={theme}
              >
                <div className="sm-content">
                  <div className="theme">{theme}</div>
                </div>
                <div className="sm-title">Theme</div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
