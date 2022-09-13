import './App.css';
import { PostsList } from './components/PostsList';
import { Layout } from './Layout/Layout';
import { Form } from './components/Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import {Post} from './components/Post/Post'
import {homePage, signInPage, postId} from './constants/pageNames'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={homePage} element={<Layout />}>
      <Route index element={<PostsList />} />
      <Route path={postId}  element={<Post />} />
      <Route path={signInPage} element={<Form />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
   
      
  );
}

export default App;
