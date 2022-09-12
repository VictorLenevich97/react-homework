import styles from "../Footer/footer.module.css"
import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkMode"
import '../../../index.css'

export const Footer = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={darkMode ? 'container container-dark' : 'container container-light'}>
            <div className={styles.Footer}>
                <div className={styles.FooterName}>©2022 Blogofolio</div>
                <div className={styles.FooterTitle}>All rights reserved</div>
            </div>
        </div>
    )
}