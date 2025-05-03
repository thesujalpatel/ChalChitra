import React, { useState, useEffect } from "react";
import "./../../assets/css/topbar.css";
import { handleNavigation } from "./Navigation";
import { motion as m, animate as a } from "framer-motion";
import { useCookies } from "react-cookie";
import { Clicky } from "./SmallComponents";

function Topbar() {
  const [cookies, setCookie] = useCookies(["navState"]);
  const [isOpen, setIsOpen] = useState(cookies.navState ?? false);

  // Run animation ONLY when isOpen changes
  useEffect(() => {
    handleNavigation(isOpen);
  }, [isOpen]);

  // Only set up global click listener once
  useEffect(() => {
    const handleClick = (e) => {
      const clickedOutside =
        !e.target.closest(".nav-btn") &&
        !e.target.closest(".navigation") &&
        !e.target.closest(".footer") &&
        !e.target.closest(".footer-fix");

      const clickedNavItem =
        e.target.closest(".icon-con") || e.target.closest(".nav-option");

      if (window.innerWidth < 768) {
        if (clickedOutside && !isOpen) navBtnClicked();
        if (clickedNavItem) navBtnClicked();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  const navBtnClicked = () => {
    const newState = !isOpen;
    setCookie("navState", newState, {
      expires: new Date(Date.now() + 86400000),
      path: "/",
    });
    setIsOpen(newState);

    const icon = document.querySelector(".icon");
    if (icon) {
      a(
        icon,
        { rotate: newState ? 180 : 0 },
        {
          type: "spring",
          stiffness: 500,
          damping: 50,
          duration: 0.5,
          ease: "easeInOut",
          delay: window.innerWidth >= 768 ? 0.5 : 0,
        }
      );
    }

    // Navigation animation is handled in useEffect via isOpen
  };

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
            className="fa-solid fa-bars-staggered icon"
            initial={{ rotate: isOpen ? 180 : 0 }}
          />
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
