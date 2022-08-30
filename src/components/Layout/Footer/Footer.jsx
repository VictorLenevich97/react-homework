import styles from "../Footer/footer.module.css"

export const Footer =()=> {
    return(
         <div className={styles.Footer}>
            <div className={styles.FooterName}>©2022 Blogofolio</div>
            <div className={styles.FooterTitle}>All rights reserved</div>
        </div>
    )
}