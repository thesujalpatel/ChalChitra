import "./../../assets/css/navigation.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo";
import userServices from "../../server/services/userServices";
import { motion as m, animate as a, stagger } from "framer-motion";
import { MainLogo, Clicky } from "./SmallComponents";

export function handleNavigation(isOpen) {
  a(
    ".navigation",
    { width: isOpen ? 0 : 250 },
    {
      type: "spring",
      stiffness: 500,
      damping: 50,
      duration: 0.5,
      ease: "easeInOut",
    }
  );
  a(
    ".web-name",
    { y: isOpen ? "100%" : 0 },
    {
      type: "spring",
      stiffness: 500,
      damping: 50,
      duration: 0.5,
      delay: 0.2,
    }
  );
  a(
    ".option-title",
    { x: isOpen ? -250 : 0 },
    {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.5,
      delay: isOpen ? 0 : stagger(0.1, { startDelay: 0.2 }),
    }
  );
}

function Navigation() {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    userServices.getSelf().then((data) => {
      setuser(data);
    });
  }, []);

  return (
    <>
      <div className="navigation">
        <div className="nav-section spacial" onClick={() => navigate("/")}>
          <div className="a-con">
            <div className="web-name">
              <MainLogo className="navigation-logo" />
            </div>
          </div>
        </div>
        <div className="nav-section exception">
          <div className="profile">
            <Logo className="profile-img" />
          </div>
          <div className="profile-name">
            {user.name ? user.name : "Loading..."}
          </div>
          <div className="nav-op-icon">
            <m.div className="icon-con" {...Clicky("var(--background)")}>
              <i className="fa-solid fa-user"></i>
            </m.div>
            <m.div
              className="icon-con"
              {...Clicky("var(--background)")}
              onClick={() => navigate("/settings")}
            >
              <i className="fa-solid fa-gear"></i>
            </m.div>
            <m.div
              className="icon-con"
              {...Clicky("var(--background)")}
              onClick={async () => {
                if (window.confirm("Do you want to SignOut?")) {
                  navigate("/");
                  await userServices.signOut();
                }
              }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </m.div>
          </div>
        </div>
        <div className="nav-section-v">
          <div className="nav-option" onClick={() => navigate("/home")}>
            <div className="icon-con">
              <i className="i fa-solid fa-house"></i>
            </div>
            <m.div initial={{ x: -250 }} className="option-title">
              Home
            </m.div>
          </div>
          <div className="nav-option" onClick={() => navigate("/notes")}>
            <div className="icon-con">
              <i className="fa-solid fa-note-sticky"></i>
            </div>
            <m.div initial={{ x: -250 }} className="option-title">
              Notes
            </m.div>
          </div>
          <div className="nav-option div">COMPONENTS</div>
          <div className="nav-option" onClick={() => navigate("/notfound")}>
            <div className="icon-con">
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <m.div initial={{ x: -250 }} className="option-title">
              Not Found
            </m.div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
