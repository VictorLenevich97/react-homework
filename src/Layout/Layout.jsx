import "./layout.css"
import React, { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProviders"



export const Layout = ({children}) =>{

    const {theme, setTheme} = useContext(ThemeContext)
    return(
        
        <div className={theme ? "Layout Light" : "Layout Dark"}>
            <header className="header">
            <button className="button_theme" onClick={()=>{
                setTheme(!theme)
            }}>Change theme</button>
            </header>
            {children}
            <footer className="footer">
                <div className="footer_container">
                <div>©2022 Blogfolio</div>
                <div>All rights reserved</div>
                </div>
            </footer>
        </div>
    )
    
}