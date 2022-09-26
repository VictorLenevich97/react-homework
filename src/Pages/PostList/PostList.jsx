import React, { useState, useEffect } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import styles from "../PostList/post.module.css";
import { Spinner } from "../../components/Spinner";
import { PostItem } from "./PostItem";
import { getPostsAsync } from "../../store/postStore/postsSlice";
import { useSelector, useDispatch } from "react-redux";

export const PostList = () => {
  const { posts, isLoading, error } = useSelector(
    (store) => store.posts
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");

  useEffect(() => {
    dispatch(getPostsAsync({}));
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <h1 style={{ display: "flex", justifyContent: "center", color: "red" }}>
        Error! Reload page, please!
      </h1>
    );
  }

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="All" value="1" />
            <Tab label="My favorites" value="2" />
          </TabList>
        </Box>
        <TabPanel className={styles.grid} value="1">
          {posts.map(({ id, image, date, text, title }) => {
            return (
              <PostItem
                key={id}
                id={id}
                image={image}
                date={date}
                text={text}
                title={title}
              />
            );
          })}
        </TabPanel>
        <TabPanel value="2">
          <img
            style={{ display: "flex", margin: "auto" }}
            alt="cat"
            src="https://i.ibb.co/ZMv2wjT/cat-lying-pillow-cartoon-character-1308-112475-removebg-preview.png"
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
