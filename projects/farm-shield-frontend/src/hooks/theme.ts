import { useState, useEffect } from "react";
export const useTheme = () => {
  const [theme, setTheme] = useState<"light"|"dark">(()=>localStorage.getItem("theme")  || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as "light" | "dark";
    if (localTheme) {
      setTheme(localTheme);
        document.documentElement.className = localTheme;
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
     document.documentElement.className = theme === "light" ? "dark" : "light";
  };
  return { theme, toggleTheme };
 };
