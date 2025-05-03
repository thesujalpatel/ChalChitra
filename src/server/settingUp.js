import serverServices from "./services/serverServices";

async function SettingUp() {
  const themeData = () => {
    const data = {
      "Soft Creative": {
        background: "#fef6f0",
        canvas: "#ffffff",
        sub_canvas: "#1e1e1e",
        primary: "#2e2e2e",
        secondary: "#ff5c58",
        tertiary: "#ffce3d",
      },
      "Frosted Aurora": {
        background: "#ecf3f1",
        canvas: "#ffffff",
        sub_canvas: "#1a1c1e",
        primary: "#0f172a",
        secondary: "#38bdf8",
        tertiary: "#a5f3fc",
      },
      "Warm Minimal": {
        background: "#fdfaf6",
        canvas: "#fffefc",
        sub_canvas: "#2c2c2c",
        primary: "#1e1e1e",
        secondary: "#f86f03",
        tertiary: "#ffd56b",
      },
      "Luxury Dark Gold": {
        background: "#1c1c1c",
        canvas: "#2a2a2a",
        sub_canvas: "#f5f5f5",
        primary: "#fefefe",
        secondary: "#d4af37",
        tertiary: "#f39c12",
      },
      "Nature Fresh": {
        background: "#f0fdf4",
        canvas: "#ffffff",
        sub_canvas: "#1e3a1e",
        primary: "#1c1c1c",
        secondary: "#22c55e",
        tertiary: "#84cc16",
      },
      "Cool Ocean": {
        background: "#e0f2fe",
        canvas: "#f8fafc",
        sub_canvas: "#0f172a",
        primary: "#1e293b",
        secondary: "#3b82f6",
        tertiary: "#38bdf8",
      },
      "Muted Retro": {
        background: "#fdf6e3",
        canvas: "#fffaf0",
        sub_canvas: "#282828",
        primary: "#333333",
        secondary: "#e76f51",
        tertiary: "#e9c46a",
      },
      "Soft Rose & Charcoal": {
        background: "#fdf2f8",
        canvas: "#ffffff",
        sub_canvas: "#111827",
        primary: "#1f2937",
        secondary: "#ec4899",
        tertiary: "#f9a8d4",
      },
      "Citrus Bright": {
        background: "#fffdf7",
        canvas: "#ffffff",
        sub_canvas: "#202020",
        primary: "#121212",
        secondary: "#f97316",
        tertiary: "#facc15",
      },
      "Smoky Indigo": {
        background: "#f3f4f6",
        canvas: "#ffffff",
        sub_canvas: "#1e1b4b",
        primary: "#111827",
        secondary: "#6366f1",
        tertiary: "#c7d2fe",
      },
      "Peachy Bloom": {
        background: "#fff1e6",
        canvas: "#ffffff",
        sub_canvas: "#1e1e1e",
        primary: "#2d2d2d",
        secondary: "#ff847c",
        tertiary: "#f6c90e",
      },
      "Cotton Candy Mist": {
        background: "#fef6ff",
        canvas: "#ffffff",
        sub_canvas: "#1f1d2b",
        primary: "#2e2e2e",
        secondary: "#ff69b4",
        tertiary: "#a78bfa",
      },
      "Sunset Sand": {
        background: "#fff3e0",
        canvas: "#ffffff",
        sub_canvas: "#263238",
        primary: "#212121",
        secondary: "#f06292",
        tertiary: "#ffb74d",
      },
      "Minty Clean": {
        background: "#e9fef6",
        canvas: "#ffffff",
        sub_canvas: "#1c1c1c",
        primary: "#2f2f2f",
        secondary: "#2dd4bf",
        tertiary: "#bef264",
      },
      "Lavender Dreams": {
        background: "#f5f3ff",
        canvas: "#ffffff",
        sub_canvas: "#1f1b24",
        primary: "#2e2e2e",
        secondary: "#a78bfa",
        tertiary: "#fcd34d",
      },
      "Apricot Mood": {
        background: "#fff0eb",
        canvas: "#ffffff",
        sub_canvas: "#2d2d2d",
        primary: "#222222",
        secondary: "#ff9a76",
        tertiary: "#fcd34d",
      },
      "Velvet Rose": {
        background: "#fff0f3",
        canvas: "#ffffff",
        sub_canvas: "#1e1e1e",
        primary: "#292524",
        secondary: "#f87171",
        tertiary: "#fcd5ce",
      },
      "Lush Berry": {
        background: "#fef2f2",
        canvas: "#ffffff",
        sub_canvas: "#2f1b3a",
        primary: "#231f20",
        secondary: "#be123c",
        tertiary: "#fbbf24",
      },
      "Clay & Blush": {
        background: "#fffaf4",
        canvas: "#ffffff",
        sub_canvas: "#3e3e3e",
        primary: "#2d2d2d",
        secondary: "#d77a61",
        tertiary: "#ffcb77",
      },
      "Sky Bloom": {
        background: "#e0f2fe",
        canvas: "#ffffff",
        sub_canvas: "#1e293b",
        primary: "#1e1e1e",
        secondary: "#60a5fa",
        tertiary: "#facc15",
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
