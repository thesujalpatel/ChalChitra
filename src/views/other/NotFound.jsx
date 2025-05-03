import React from "react";
import { Back } from "../partials/SmallComponents";

function NotFound() {
  return (
    <div>
      <Back />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          color: "var(--sub_canvas)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>404</h1>
        Page Not Found :(
      </div>
    </div>
  );
}

export default NotFound;
