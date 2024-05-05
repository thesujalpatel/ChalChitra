import React, { useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../../assets/img/logo";

export const variables = {
  numberOfLogos: 10,
  maxPageRotate: 15,
  maxLogoSize: 300,
  minLogoSize: 50,
  maxRotate: 360,
  minRotate: -360,
  sizeSlots: 50,
  depthSlots: 0.02,
  blurSlots: 2,
};

function Decoration() {
  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    // Click Routing
    const items = document.querySelectorAll(".dec-item");
    // var i = 0;
    setInterval(() => {
      // const randomItem = items[i];
      items.forEach((randomItem) => {
        const size = RandomNumber(variables.minLogoSize, variables.maxLogoSize);
        const x = RandomNumber(0, window.innerWidth - size);
        const y = RandomNumber(0, window.innerHeight - size);

        const rotate = RandomNumber(variables.minRotate, variables.maxRotate);
        var blur, z;
        for (
          let i = variables.minLogoSize;
          i <= variables.maxLogoSize;
          i += variables.sizeSlots
        ) {
          if (size >= i && size < i + variables.sizeSlots) {
            z = i / variables.sizeSlots;
            blur =
              variables.maxLogoSize / variables.sizeSlots -
              i / variables.sizeSlots -
              1;
            break;
          }
        }
        gsap.to(randomItem, {
          ease: "sine.inOut",
          duration: 5,
          width: size,
          height: size,
          left: x,
          top: y,
          zIndex: z,
          filter: `blur(${blur}px)`,
          rotate: rotate,
          overwrite: false,
        });
        // if (i === items.length - 1) {
        //   i = 0;
        // } else {
        //   i++;
        // }
      });
    }, 10000);
  });

  function mouseMoveFunc(e) {
    const maxRot = variables.maxPageRotate;
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    const percentX = gsap.utils.normalize(0, window.innerWidth, e.clientX);
    const percentY = gsap.utils.normalize(0, window.innerHeight, e.clientY);
    const item = document.querySelectorAll(".dec-item");

    item.forEach((item) => {
      var depth;
      var width = gsap.getProperty(item, "width");
      for (
        let i = variables.minLogoSize;
        i <= variables.maxLogoSize;
        i += variables.sizeSlots
      ) {
        if (width >= i && width < i + variables.sizeSlots) {
          depth = (i / variables.sizeSlots) * variables.depthSlots;
          break;
        }
      }
      gsap.to(item, {
        duration: 0.5,
        x: (percentX * maxX - maxX / 2) * depth,
        y: (percentY * maxY - maxY / 2) * depth + window.scrollY * 0.5,
        rotationY: percentX * maxRot - maxRot / 2,
        rotationX: -(percentY * maxRot - maxRot / 2),
      });
    });
  }
  function scrollFunc() {
    gsap.to(".dec-item", {
      duration: 0.5,
      y: window.scrollY * 0.5,
    });
  }
  window.addEventListener("mousemove", mouseMoveFunc);
  window.addEventListener("scroll", scrollFunc);
  function drawDecoration(index) {
    const size = RandomNumber(variables.minLogoSize, variables.maxLogoSize);
    var blur, z;
    for (
      let i = variables.minLogoSize;
      i <= variables.maxLogoSize;
      i += variables.sizeSlots
    ) {
      if (size >= i && size < i + variables.sizeSlots) {
        z = i / variables.sizeSlots;

        blur =
          variables.maxLogoSize / variables.sizeSlots -
          i / variables.sizeSlots -
          1;

        break;
      }
    }
    return (
      <Logo
        className="dec-item"
        key={index}
        width={size}
        height={size}
        left={RandomNumber(0, window.innerWidth - size)}
        filter={`blur(${blur}px)`}
        zIndex={z}
        top={RandomNumber(0, window.innerHeight - size)}
        rotate={RandomNumber(variables.minRotate, variables.maxRotate)}
      />
    );
  }
  return (
    <div className="decoration">
      {Array.from({ length: variables.numberOfLogos }).map((_, index) =>
        drawDecoration(index)
      )}
    </div>
  );
}

export default Decoration;
