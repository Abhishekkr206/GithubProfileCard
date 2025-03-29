import React,{createContext, useContext,useEffect,useState} from "react";

const Context = createContext()

export const ContextProvider= ({children}) => {
    const[Theme,setTheme] = useState("light")

    useEffect(()=>{
        if (Theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[Theme])
    
    function ToggelTheme(){
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return(
        <Context.Provider value={{Theme,ToggelTheme}}>
            {children}
        </Context.Provider>
    )
}

export const ContextHook=()=>useContext(Context)