import { useContext } from 'react'
import iconMenu from '../../assets/iconMenu.png'
import search from '../../assets/search.png'
import user from '../../assets/user.png'
import styles from './layout.css'
import { ThemeContext } from '../../providers/ThemeProvider'

export const Layout = function ({ children }) {
    const {isDark, setIsDark} = useContext(ThemeContext)
    return (
        <div className={isDark ? 'Layout Dark' : 'Layout Light'}>
            <header className="header" >
                <img className="header__menu" src={iconMenu} alt="menu" />
                <div className='header__item'>
                    <button className='header__changeButton' onClick={() => setIsDark(!isDark)}>Change Theme</button>
                    <img className="header__search" src={search} alt="search" />
                    <img className="header__userName" src={user} alt="userName" />
                </div>
            </header>
            <div className='page__wrapper'>
                {children}
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