import React, { useContext } from "react"
import { DarkModeContext } from "../../Context/DarkMode"
import styles from "../Header/header.module.css"
import { Link } from "react-router-dom"
import blog from "./blog.svg"

export const Header = () => {
    const { darkMode, toogleDarkMode } = useContext(DarkModeContext)
    const handleClick = () => {
        toogleDarkMode();
    }
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderSvg}>
                <svg width="35" height="35" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 2H1C0.448 2 0 1.552 0 1C0 0.448 0.448 0 1 0H19C19.553 0 20 0.448 20 1C20 1.552 19.553 2 19 2ZM19 8H1C0.448 8 0 7.552 0 7C0 6.448 0.448 6 1 6H19C19.553 6 20 6.448 20 7C20 7.552 19.553 8 19 8ZM1 14H19C19.553 14 20 13.553 20 13C20 12.447 19.553 12 19 12H1C0.448 12 0 12.447 0 13C0 13.553 0.448 14 1 14Z" fill="white"/>
                </svg>

            </div>
            <img className={styles.HeaderSwitch} src={darkMode ? 'https://i.ibb.co/DW6YL02/sun.png' : 'https://i.ibb.co/F7nF6bf/moon.png'} alt='LightSwitch on' onClick={handleClick} />
            <Link className={styles.HeaderIcon} to="/">
            <svg className={styles.svgIonicon} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Home</title>
            <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
            <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
            </Link>
            <Link className={styles.HeaderIcon2} to="/singin">
                <svg className={styles.svgIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            <Link className={styles.HeaderImg} to="/blog">
            <img  className={styles.HeaderImg1} src={blog}/></Link>
        </div>
    )
}