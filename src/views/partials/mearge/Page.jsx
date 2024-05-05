import React from "react";
import FixFooter from "../FixFooter";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Topbar from "../Topbar";

function Page(props) {
  return (
    <>
      <div className="layerff">
        <div className="up-and-down layer1">
          <div className="left-and-right">
            <Navigation />
            <div className="universe">
              <Topbar />
              {props.rander}
            </div>
          </div>
          <Footer />
        </div>
        <FixFooter />
      </div>
    </>
  );
}
export default Page;
