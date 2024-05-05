import React, { useState, useEffect } from "react";
import "./../../assets/css/topbar.css";
import Navigation, { handleNavigation } from "./Navigation";
import { motion as m, animate as a } from "framer-motion";
import { useCookies } from "react-cookie";
import { Clicky } from "./SmallComponents";

function Topbar() {
  const [cookies, setCookie] = useCookies(["navState"]);
  const [isOpen, setIsOpen] = useState(cookies.navState);
  useEffect(() => {
    window.onclick = (e) => {
      if (!e.target.closest(".nav-btn") && !e.target.closest(".navigation")) {
        if (window.innerWidth < 768 && !isOpen) {
          navBtnClicked();
        }
      }
    };
  });
  function navBtnClicked() {
    setCookie("navState", !isOpen, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      path: "/",
    });
    setIsOpen(!isOpen);
    const icon = document.querySelector(".icon");
    const resolution = window.innerWidth;

    if (resolution >= 768) {
      a(
        icon,
        { rotate: isOpen ? 0 : 180 },
        {
          delay: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 50,
          duration: 0.5,
          ease: "easeInOut",
        }
      );
    } else {
      a(
        icon,
        { rotate: isOpen ? 0 : 180 },
        {
          type: "spring",
          stiffness: 500,
          damping: 50,
          duration: 0.5,
          ease: "easeInOut",
        }
      );
    }
    handleNavigation(isOpen);
  }
  Navigation(isOpen);
  return (
    <div className="top-bar">
      <div className="tb-left">
        <m.div
          className="nav-btn"
          {...Clicky("var(--secondary)")}
          onClick={navBtnClicked}
        >
          <m.i
            initial={{ rotate: isOpen ? 180 : 0 }}
            className="fa-solid fa-bars-staggered icon"
          ></m.i>
        </m.div>
        <div className="tb-page-name">Home</div>
      </div>
      <div className="tb-right">
        <div className="logo-text">Hello, There</div>
      </div>
    </div>
  );
}
export default Topbar;
