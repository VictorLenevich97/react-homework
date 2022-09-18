import "./layout.css"
import { Outlet} from "react-router-dom"
import {NavLink} from "react-router-dom"




export const Layout = () =>{

    return(
        
        <div>
            <header className="header">
                <nav className="header_nav">
                <NavLink to="/" className="header_link" >Blog</NavLink>
                <NavLink to="login" className="header_link" >Sign In</NavLink>
                </nav>
            </header>
            <Outlet/>
            <footer className="footer">
                <div className="footer_container">
                <div>©2022 Blogfolio</div>
                <div>All rights reserved</div>
                </div>
            </footer>
        </div>
    )
    
}