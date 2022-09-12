import React from "react"
import styles from "../PostList/post.module.css"

export const PostItem = ({ id, image, date, text, title,}) => {
    return (
        <div className={styles.header} key={id} >
            <div className={styles.headerItem} >
                <img className={styles.headerImg} src={image} alt="card" />
                <p className={styles.headerDate}>{new Date(date).toDateString()}</p>
                <p className={styles.headerName}>{title}</p>
                <p className={styles.headerText}>{text.substring(0, 287)}</p>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}