// import iconMenu from '../assets/iconMenu.png'
import search from '../assets/search.png'
import user from '../assets/user.png'
import styles from './layout.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export const Layout = function () {

    function getStyle({ isActive }) {
        return { color: isActive ? '#42e6f5' : 'white',
                fontSize: 17 +"px"
     }
    }

    return (
        <div>
            <header className="header" >
                {/* <img className="header__menu" src={iconMenu} alt="menu" /> */}
                <nav className='header__nav'>
                    <NavLink style={getStyle} to='/'>Blog</NavLink>
                    <NavLink style={getStyle} to='SignIn'>Sign In</NavLink>
                </nav>
                <div className='header__item'>
                    <img className="header__search" src={search} alt="search" />
                    <img className="header__userName" src={user} alt="userName" />
                </div>
            </header>
            <div className='page__wrapper'>
                <Outlet />
                <div className='footer__wrapper'>
                    <footer className="footer">
                        <p className="footer__item">©2022 Blogfolio</p>
                        <p className="footer__item">All rights reserved</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}