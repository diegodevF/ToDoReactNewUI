import { useEffect, useState } from "react";
import IconMoon from "../Icons/IconMoon";
import IconSun from "../Icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
   const [darkMode, setDarkMode] = useState(initialStateDarkMode);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [darkMode]);

   return (
      <header className="container mx-auto px-4 pt-8">
         <div className="flex justify-between">
            <h1 className=" text-2xl font-semibold uppercase tracking-[0.5em] text-white">
               Todo V2
            </h1>
            <button onClick={() => setDarkMode(!darkMode)} className="">
               {darkMode ? <IconSun /> : <IconMoon />}
            </button>
         </div>
      </header>
   );
};

export default Header;
