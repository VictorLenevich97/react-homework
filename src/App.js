import React from 'react';
import './App.css';
import { Layout } from './components/Layouts/Layout';
import { Posts } from './components/Posts/Posts';
import { SignIn } from './components/Layouts/SignIn';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider>
      <div className='blogContainer'>
        <BrowserRouter>
          <Routes>
          {/* <Route path="/signin" element={<SignIn/>}></Route>
          <Route exact path="/posts"  element={<Posts/>}></Route> */}
            <Route path="/" element={<Layout/>}>
              <Route exact path="posts"  element={<Posts/>}></Route>
              <Route path="signin" element={<SignIn/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
