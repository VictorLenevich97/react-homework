import React, { createContext, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeProvider = (props)=>{
    const [darkMode, setDarkMode] =useState(false)
    const toogleDarkMode =()=>{
        setDarkMode(!darkMode)
    } 
    return (
            <DarkModeContext.Provider value={{darkMode, toogleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
    )
}
