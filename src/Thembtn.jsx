import React from "react";
import {ContextHook} from "./ThemeContext";

const ThemeToggelBtn = () =>{
    const {Theme , ToggelTheme} = ContextHook()
    return(
        <button
            onClick={ToggelTheme}
            className="px-4 py-3 mb-2 bg-blue-600 text-white rounded-lg shadow-[0_4px_0_#1E40AF] hover:shadow-[0_2px_0_#1E40AF] active:shadow-none active:translate-y-1 transition-all duration-200 dark:bg-blue-500 dark:shadow-[0_4px_0_#1E3A8A] dark:hover:shadow-[0_2px_0_#1E3A8A] dark:active:shadow-none dark:active:translate-y-1">
            Switch to {Theme === "light" ? "dark" : "light"} mode
        </button>
    )
}
export default ThemeToggelBtn