import "./App.css";
import { PostsList } from "./PostsList/PostsList";
import { Layout } from "./Layout/Layout";
import { Form } from "./Form/Form";
import { Search } from "./Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { Post } from "./Post/Post";
import {
  homePage,
  signInPage,
  postId,
  searchPage,
} from "./constants/pageNames";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={homePage} element={<Layout />}>
            <Route index element={<PostsList />} />
            <Route path={postId} element={<Post />} />
            <Route path={signInPage} element={<Form />} />
            <Route path={searchPage} element={<Search />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
