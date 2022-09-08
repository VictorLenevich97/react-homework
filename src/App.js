import React, { useState } from 'react';
import './App.css';
import { PostsList } from './components/PostsList';
import { Layout } from './components/Layout/Layout';
import {ThemeProvider} from './providers/ThemeProvider'




function App() {

  return (
    <ThemeProvider>
         <Layout>
        <PostsList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
