import { createContext, useState, useEffect } from "react";
import userServices from "../services/userServices";
import { auth } from "../firebase";
import { setTheme } from "../../assets/js/script";
import { useCookies } from "react-cookie";
import serverServices from "../services/serverServices";
import { toast } from "react-toastify";

export const Context = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["theme", "navState"]);

  useEffect(() => {
    try {
      let unsub = auth.onAuthStateChanged(async (user) => {
        if (!cookies.navState) {
          setCookie("navState", false, { path: "/" });
        }
        if (!cookies.theme) {
          setCookie("theme", "Soft Creative", { path: "/" });
        } else {
          const theme = cookies.theme;
          const themeSet = (await serverServices.getServer("themes")).data;
          try {
            setTheme(themeSet[theme]);
          } catch (e) {
            toast.error(`${theme} theme not found`);
            setCookie("theme", "Soft Creative", { path: "/" });
          }
        }
        if (user) {
          const data = await userServices.getUser(user.uid);
          if (data && data.role === "admin") {
            user.userRole = "admin";
          }
          setUser(user);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      });
      return () => {
        if (unsub) unsub();
      };
    } catch {
      console.log("error");
      setLoading(false);
    }
  }, [cookies.theme, cookies.navState, setCookie]);

  const values = {
    user,
  };

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "30px",
          fontWeight: "bold",
          color: "var(--primary)",
        }}
      >
        Loading...
      </div>
    );
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
export default AuthContext;
