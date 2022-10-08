import { Box, Tab } from "@mui/material"
import { TabContext, TabPanel, TabList } from "@mui/lab"
import React from "react"
import { useState } from "react"
import styles from "../Post/post.module.css"
import { alignProperty } from "@mui/material/styles/cssUtils"




export const Post = ({ all }) => {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
           <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList className="all" aria-label='Tabs example'
              onChange={handleChange}
              textColor='secondary'
              indicatorColor='secondary'
            >
              <Tab label='All' value='1' />
              <Tab label='My favorites' value='2' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            {all.map(({ id, image, date, text }) => (
              <div className={styles.header} key={id} >
                <li className={styles.headerItem} >
                  <img src={image} />
                  <p className={styles.headerDate}>{date}</p>
                  <p className={styles.headerText}>{text}</p>
                  <div className={styles.line}></div>
                </li>
              </div>
            ))}
          </TabPanel>
          <TabPanel value='2'>
            {all.filter(({ isFavorite }) => isFavorite).map(
              ({ id, image, text, date, isFavorite }) => (
                <div className={styles.header} key={id} >
                  <div className={styles.headerItem} >
                    <img src={image} />
                    <p className={styles.headerDate}>{date}</p>
                    <p className={styles.headerText}>{text}</p>
                    <div className={styles.line}></div>
                    <div>{isFavorite}</div>
                  </div>
                </div>
              ))}
          </TabPanel>
        </TabContext>
      </Box>
        </>
    )
}