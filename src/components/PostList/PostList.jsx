import React, { useState, useEffect } from "react"
import { Box, Tab } from "@mui/material"
import { TabContext, TabPanel, TabList } from "@mui/lab"
import styles from "../PostList/post.module.css"
import { Spinner } from "../Spinner/Spinner"
import { PostItem } from "./PostItem"
import { fetchPost } from "../Api/fetchPost"

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState(false)
  const [value, setValue] = useState('1')

  useEffect(() => {
    fetchPost(setPostList, setLoading, setErrorLoading);
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (loading) {
    return <Spinner />
  }
  else if (errorLoading) {
    return <h1 style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>Error! Reload page, please!</h1>
  }

  return (
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
          {postList.map(({ id, image, date, text, title }) => {
            return (<PostItem key={id} image={image} date={date} text={text} title={title} />)
          })}
        </TabPanel>
        <TabPanel value='2'>
          <img style={{ display: 'flex', margin: 'auto' }} alt="cat" src="https://i.ibb.co/ZMv2wjT/cat-lying-pillow-cartoon-character-1308-112475-removebg-preview.png" />
        </TabPanel>
      </TabContext>
    </Box>
  )
}
