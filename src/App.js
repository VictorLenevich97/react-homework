import './App.css';
import {Posts} from "./components/Posts"
import {Layout} from "./Layout/Layout"
import { SingUp } from "./components/SingUp/SingUp"
import { PostDetail } from './components/PostDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<Posts/>}/>
        <Route path='post/:postId' element={<PostDetail/>}/>
        <Route path='login' element={<SingUp/>}/>

      </Route>
      <Route path="*"
      element={
        <div>
          <h1>Not found..</h1>
        </div>
      }/>

    </Routes>

    </BrowserRouter>


  );
}

export default App;
