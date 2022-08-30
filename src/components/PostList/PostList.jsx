import { Box, Tab } from "@mui/material"
import { TabContext, TabPanel, TabList } from "@mui/lab"
import React from "react"
import axios from "axios"
import spinner from "./spinner.svg"
import { useState, useEffect } from "react"
import styles from "../PostList/post.module.css"
import "./spinner.css"

export const PostList = () => {
  const [value, setValue] = useState('1')
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchPost = async () => {
    try {
      const data = await axios
        .get('https://60f699f318254c00176e0362.mockapi.io/posts')
        .then(res => { setPostList(res.data) })
      setLoading(true)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchPost();
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      {loading ?
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label='Tabs example'
                onChange={handleChange}
                textColor='secondary'
                indicatorColor='secondary'
              >
                <Tab label='All' value='1' />
                <Tab label='My favorites' value='2' />
              </TabList>
            </Box>
            <TabPanel className={styles.grid} value='1'>
              {postList.map((item) => {
                return (
                  <div className={styles.header} key={item.id} >
                    <div className={styles.headerItem} >
                      <img src={item.image} alt="card" />
                      <p className={styles.headerDate}>{item.date}</p>
                      <p className={styles.headerName}>{item.title}</p>
                      <p className={styles.headerText}>{item.text}</p>
                      <div className={styles.line}></div>
                    </div>
                  </div>

                )
              })
              }
            </TabPanel>
            <TabPanel value='2'>
              <img alt="cat" src="https://img.freepik.com/free-vector/cat-lying-pillow-cartoon-character_1308-112475.jpg?w=1060&t=st=1661781202~exp=1661781802~hmac=21eff26050bed6a57e2f4567017487b6f8365f905564bf1becca63a088bb9b85" />
            </TabPanel>
          </TabContext>
        </Box>
        :
        <div className="spinner">
          <img className="spinner-img" alt="spin" src={spinner} />
        </div>
      }
    </>
  )
}
