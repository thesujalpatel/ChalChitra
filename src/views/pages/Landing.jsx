import React from "react";
import Decoration from "../partials/Decoration";
import { MainLogo } from "../partials/SmallComponents";
import "../../assets/css/landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing">
        <div className="landing-content">
          <Decoration />
          <div className="mid">
            <div className="imid">
              <MainLogo className="landding-logo" />
            </div>
            <div className="gooo" onClick={() => navigate("/notes")}>
              Let's Start
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
