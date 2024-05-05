import $ from "jquery";
import gsap from "gsap";

// Forms field highlighter
export function highLightField() {
  $(".input").focus(function () {
    $(this).parent().css({ "border-color": "var(--secondary)" });
    $(this)
      .parent()
      .find(".ic")
      .css({ "border-right-color": "var(--secondary)" });
  });
  $(".input").focusout(function () {
    $(this).parent().css({ "border-color": "transparent" });
    $(this).parent().find(".ic").css({ "border-right-color": "transparent" });
  });
}

export function back() {
  $(".back").click(function () {
    window.history.back();
  });
}

// Set CSS root variables
export function setTheme(data) {
  const root = document.documentElement;

  gsap.to(root, {
    "--background": data.background,
    "--canvas": data.canvas,
    "--sub_canvas": data.sub_canvas,
    "--primary": data.primary,
    "--secondary": data.secondary,
    "--tertiary": data.tertiary,
    duration: 2,
  });
}
export function otherStyles(field, value) {
  const root = document.documentElement;
  gsap.to(root, {
    [`--${field}`]: value,
    duration: 1,
  });
}
