import "./layout.css"
import React from "react"





export const Layout = ({children}) =>{
    return(
        <div>
            <header className="header">
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