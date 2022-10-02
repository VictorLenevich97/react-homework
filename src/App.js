import './App.css';
import {Posts} from "./components/Posts"
import {Layout} from "./Layout/Layout"
import { SingUp } from "./components/SingUp/SingUp"
import { PostDetail } from './components/PostDetails';
import { PostSearch } from "./components/PostSearch/PostSearch"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { POST_SEARCH} from "./constant/endpoints"
import { Provider } from "react-redux"
import {store} from "./store/store"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<Posts/>}/>
        <Route path='post/:postId' element={<PostDetail/>}/>
        <Route path='login' element={<SingUp/>}/>
        <Route path={POST_SEARCH} element={<PostSearch/>}/>
      </Route>
      <Route path="*"
      element={
        <div>
          <h1>Not found..</h1>
        </div>
      }/>

    </Routes>

    </BrowserRouter>

    </Provider>
  );
}

export default App;
