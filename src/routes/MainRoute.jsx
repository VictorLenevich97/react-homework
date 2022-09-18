import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home, SignUp } from "../pages/index";

export const MainRoute = ({ allowTeams, setAllowTeams }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home allowTeams={allowTeams} setAllowTeams={setAllowTeams} />
            }
          />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h2>Not found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
