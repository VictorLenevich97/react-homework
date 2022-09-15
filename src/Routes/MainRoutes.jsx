import { SignIn, Home, PostList, PostDetails } from "../Pages";
import { NotFound } from "../Pages/NotFound/NotFound";
import { Layout } from "../Layouts";
import { Title } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "../Context/DarkMode";
import { SING_IN, BLOG, HOME, POST, NOT_FOUND } from "../Costants/routes";

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
              path={BLOG}
              element={
                <>
                  <div>{<Title />}</div>
                  <div>
                    <PostList />
                  </div>
                </>
              }
            ></Route>
            <Route path={POST} element={<PostDetails />} />
          </Route>
          <Route path={NOT_FOUND} element={<div>{<NotFound />}</div>} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};
