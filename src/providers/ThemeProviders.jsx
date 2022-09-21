import { createContext, useState } from "react"

export const ThemeContext = createContext({theme:false})

export const ThemeProviders = ({children}) =>{

    const [theme, setTheme] = useState (false)

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}


