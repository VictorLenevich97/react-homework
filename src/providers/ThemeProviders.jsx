import { createContext, useState } from "react"
import { store} from "../store/store"

export const ThemeContext = createContext({theme:false})

export const ThemeProviders = ({children}) =>{

    const [theme, setTheme] = useState (false)

    return 
    <ThemeContext.Provider store={store} value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}


