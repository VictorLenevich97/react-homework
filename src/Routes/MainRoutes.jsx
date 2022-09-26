import { SignIn, Home, PostList, PostDetails, Search } from "../Pages";
import { NotFound } from "../Pages/NotFound/NotFound";
import { Layout } from "../Layouts";
import { Title } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "../Context/DarkMode";
import { SING_IN, POST, HOME, POST_ID, NOT_FOUND, SEARCH } from "../Costants/routes";


export const MainRoutes = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path={SING_IN}
              element={
                <div>
                  <SignIn />
                </div>
              }
            ></Route>
            <Route
              path={POST}
              element={
                <>
                  <div>{<Title />}</div>
                  <div>
                    <PostList />
                  </div>
                </>
              }
            ></Route>
            <Route path={POST_ID} element={<PostDetails />} />
            <Route path={SEARCH} element={<Search />} />
            </Route>
          <Route path={NOT_FOUND} element={<div>{<NotFound />}</div>} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};
