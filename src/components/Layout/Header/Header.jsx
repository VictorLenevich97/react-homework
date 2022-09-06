import React, { useContext } from "react"
import { DarkModeContext } from "../../Context/DarkMode"
import styles from "../Header/header.module.css"

export const Header = () => {
    const { darkMode, toogleDarkMode } = useContext(DarkModeContext)
    const handleClick = () => {
        toogleDarkMode();
    }
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderSvg}>
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 2H1C0.448 2 0 1.552 0 1C0 0.448 0.448 0 1 0H19C19.553 0 20 0.448 20 1C20 1.552 19.553 2 19 2ZM19 8H1C0.448 8 0 7.552 0 7C0 6.448 0.448 6 1 6H19C19.553 6 20 6.448 20 7C20 7.552 19.553 8 19 8ZM1 14H19C19.553 14 20 13.553 20 13C20 12.447 19.553 12 19 12H1C0.448 12 0 12.447 0 13C0 13.553 0.448 14 1 14Z" fill="white" />
                </svg>

            </div>
            <img className={styles.HeaderSwitch} src={darkMode ? 'https://i.ibb.co/DW6YL02/sun.png' : 'https://i.ibb.co/F7nF6bf/moon.png'} alt='LightSwitch on' onClick={handleClick} />
            <div className={styles.HeaderIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 20L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={styles.HeaderIn}>JB</div>
            <div className={styles.HeaderName}>Julia Baranova</div>
        </div>
    )
}