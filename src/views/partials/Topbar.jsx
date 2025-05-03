import React, { useState, useEffect } from "react";
import "./../../assets/css/topbar.css";
import { handleNavigation } from "./Navigation";
import { motion as m, animate as a } from "framer-motion";
import { useCookies } from "react-cookie";
import { Clicky } from "./SmallComponents";

function Topbar() {
  const [cookies, setCookie] = useCookies(["navState"]);
  const [isOpen, setIsOpen] = useState(cookies.navState);
  useEffect(() => {
    handleNavigation(isOpen);
    window.onclick = (e) => {
      if (
        !e.target.closest(".nav-btn") &&
        !e.target.closest(".navigation") &&
        !e.target.closest(".footer") &&
        !e.target.closest(".footer-fix")
      ) {
        if (window.innerWidth < 768 && !isOpen) {
          navBtnClicked();
        }
      }
      if (
        (e.target.closest(".icon-con") || e.target.closest(".nav-option")) &&
        window.innerWidth < 768
      ) {
        navBtnClicked();
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
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="tb-page-name">
          {window.location.pathname.split("/").pop() || "Home"}
        </div>
      </div>
      <div className="tb-right">
        <div className="time-text">{currentTime}</div>
      </div>
    </div>
  );
}
export default Topbar;
