import serverServices from "./services/serverServices";

async function SettingUp() {
  const themeData = () => {
    const data = {
      Crystals: {
        background: "#cfdbd5",
        canvas: "#e8eddf",
        sub_canvas: "#242423",
        primary: "#333533",
        secondary: "#ff7146",
        tertiary: "#f0cc68",
      },
      "Cotton Candy": {
        background: "#dfd7bf",
        canvas: "#f5f5dc",
        sub_canvas: "#79155b",
        primary: "#1f1717",
        secondary: "#fb5d70",
        tertiary: "#f4bf96",
      },
      Frozen: {
        background: "#dce6e8",
        canvas: "#ffffff",
        sub_canvas: "#27272b",
        primary: "#1f2a2d",
        secondary: "#0080aa",
        tertiary: "#90e0ef",
      },
      Sunny: {
        background: "#e4e4e4",
        canvas: "#ffffff",
        sub_canvas: "#2b2b2b",
        primary: "#4c4c4c",
        secondary: "#f0b02e",
        tertiary: "#f7d488",
      },
      "Ocean Breeze": {
        background: "#98c1d9",
        canvas: "#e0fbfc",
        sub_canvas: "#293241",
        primary: "#3d5a80",
        secondary: "#ee6c4d",
        tertiary: "#e7b4a5",
      },
    };
    return data;
  };
  const settingData = () => {
    const data = {
      name: "CryptoReact",
    };
    return data;
  };
  const styleData = () => {
    const data = {
      blur: "5px",
      bg_transparency: "60%",
      notification_transparency: "40%",
      notification_blur: "4px",
    };
    return data;
  };

  const docSnapTheme = await serverServices.getServer("themes");
  const docSnapSetting = await serverServices.getServer("settings");
  const docSnapStyle = await serverServices.getServer("styles");
  if (!docSnapTheme.exists) {
    serverServices.addServer("themes", themeData());
  }
  if (!docSnapSetting.exists) {
    serverServices.addServer("settings", settingData());
  }
  if (!docSnapStyle.exists) {
    serverServices.addServer("styles", styleData());
  }
}
export default SettingUp;
