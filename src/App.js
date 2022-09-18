import React from 'react';
import './App.css';
import { Layout } from './components/Layouts/Layout';
import { Posts } from './components/Posts/Posts';
import { PostsDetail } from './components/Posts/PostsDetail';
import { SignIn } from './components/Layouts/SignIn';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PostsProvider} from "./components/PostsProvider/PostsProvider"


function App() {
  return (
    <ThemeProvider>
      <PostsProvider>
      <div className='blogContainer'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="posts" element={<Posts />}></Route>
              <Route path="signin" element={<SignIn />}></Route>
              <Route path="/posts/:postsId" element={<PostsDetail />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;
