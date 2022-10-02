import "./layout.css"
import { Outlet,NavLink } from "react-router-dom"
import { Search } from "../components/Search/Search"




export const Layout = () =>{

    return(
        
        <div>
            <header className="header">
                <nav className="header_nav">
                <NavLink to="/" className="header_link" >Blog</NavLink>
                <NavLink to="login" className="header_link" >Sign In</NavLink>
                </nav>
                <Search/>
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