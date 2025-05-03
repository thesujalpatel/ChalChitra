import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Logo from "../../assets/img/logo";

export function Back() {
  const navigate = useNavigate();
  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: "-40px" }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      className="back"
      onClick={() => navigate("/notes")}
    >
      <i className="fa-solid fa-circle-left"></i>Back
    </m.div>
  );
}
export function MainLogo(props) {
  return (
    <div className={props.className}>
      <div className="main-logo">
        <div className="chal">Chal</div>
        <Logo className="logo" />
        <div className="chitra">hitra</div>
      </div>
    </div>
  );
}
export const Clicky = (color) => {
  return {
    whileHover: {
      scale: 1.005,
      boxShadow: `4px 4px 10px #5a5a5a, -4px -4px 10px color-mix(in srgb, ${color}, var(--light_color) var(--light_blend_ratio))`,
    },
    whileTap: { scale: 0.98, boxShadow: "none" },
    whileFocus: {
      scale: 1.005,
      boxShadow: `4px 4px 10px #5a5a5a, -4px -4px 10px color-mix(in srgb, ${color}, var(--light_color) var(--light_blend_ratio))`,
    },
    transition: { type: "spring", stiffness: 800, damping: 15 },
  };
};
