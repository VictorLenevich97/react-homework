import React, { useState } from 'react';
import './App.css';
import { PostsList } from './components/PostsList';
import { Layout } from './Layout/Layout';
import { Form } from './components/Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<PostsList />} />
      <Route path='SignIn' element={<Form />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
