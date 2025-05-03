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
      "Frozen Orchid": {
        background: "#eef2ff",
        canvas: "#ffffff",
        sub_canvas: "#1e1b2e",
        primary: "#312e81",
        secondary: "#a78bfa",
        tertiary: "#c084fc",
      },

      "Coral Crush": {
        background: "#fff2f0",
        canvas: "#ffffff",
        sub_canvas: "#2b2b2b",
        primary: "#212121",
        secondary: "#ff6b6b",
        tertiary: "#fa709a",
      },
      "Aqua Mirage": {
        background: "#e0fcff",
        canvas: "#ffffff",
        sub_canvas: "#1c1c1c",
        primary: "#0f172a",
        secondary: "#22d3ee",
        tertiary: "#67e8f9",
      },
      "Blueberry Frost": {
        background: "#f0f9ff",
        canvas: "#ffffff",
        sub_canvas: "#1e293b",
        primary: "#0f172a",
        secondary: "#60a5fa",
        tertiary: "#93c5fd",
      },

      "Lavender Ice": {
        background: "#f8f7fc",
        canvas: "#ffffff",
        sub_canvas: "#2c1f45",
        primary: "#352f44",
        secondary: "#c084fc",
        tertiary: "#d8b4fe",
      },
      "Candy Aqua Pop": {
        background: "#ecfeff",
        canvas: "#ffffff",
        sub_canvas: "#202225",
        primary: "#111111",
        secondary: "#06b6d4",
        tertiary: "#a5f3fc",
      },
      "Muted Twilight": {
        background: "#f4f4f5",
        canvas: "#ffffff",
        sub_canvas: "#1f2937",
        primary: "#2e2e2e",
        secondary: "#64748b",
        tertiary: "#a1a1aa",
      },
      "Blush Ink": {
        background: "#fef2f2",
        canvas: "#ffffff",
        sub_canvas: "#1c1c1c",
        primary: "#1e1e1e",
        secondary: "#e11d48",
        tertiary: "#f43f5e",
      },
      "Monsoon Fog": {
        background: "#f1f5f9",
        canvas: "#ffffff",
        sub_canvas: "#1e293b",
        primary: "#1e1e1e",
        secondary: "#475569",
        tertiary: "#94a3b8",
      },
      "Iris Haze": {
        background: "#f3f4f6",
        canvas: "#ffffff",
        sub_canvas: "#1f1b24",
        primary: "#2e2e2e",
        secondary: "#6366f1",
        tertiary: "#a78bfa",
      },
      "Teal Ember": {
        background: "#e0f2f1",
        canvas: "#ffffff",
        sub_canvas: "#1b1b1b",
        primary: "#212121",
        secondary: "#14b8a6",
        tertiary: "#2dd4bf",
      },
      "Punch Berry": {
        background: "#ffe4e6",
        canvas: "#ffffff",
        sub_canvas: "#3f0d12",
        primary: "#2e2e2e",
        secondary: "#db2777",
        tertiary: "#fb7185",
      },
      "Molten Space": {
        background: "#1b1b2f",
        canvas: "#2e2e3a",
        sub_canvas: "#ff6b81",
        primary: "#f8f9fa",
        secondary: "#ff4757",
        tertiary: "#3742fa",
      },
      "Radiant Night": {
        background: "#0f172a",
        canvas: "#1e293b",
        sub_canvas: "#ffffff",
        primary: "#f8fafc",
        secondary: "#0ea5e9",
        tertiary: "#38bdf8",
      },
      "Midnight Forest": {
        background: "#0e1512",
        canvas: "#142f2e",
        sub_canvas: "#e6fffa",
        primary: "#f1f5f9",
        secondary: "#0d9488",
        tertiary: "#2dd4bf",
      },
      "Cyber Sunset": {
        background: "#1f1f2b",
        canvas: "#29293d",
        sub_canvas: "#ff90b3",
        primary: "#ffffff",
        secondary: "#ff4ecd",
        tertiary: "#705cf6",
      },
      "Luxury Dark Gold": {
        background: "#1c1c1c",
        canvas: "#2a2a2a",
        sub_canvas: "#f5f5f5",
        primary: "#fefefe",
        secondary: "#d4af37",
        tertiary: "#f39c12",
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
