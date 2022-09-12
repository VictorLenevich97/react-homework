import { Form } from "./components/Form/Form"
import { Layout } from "./components/Layout";
import { PostList, Title, Home } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DarkModeProvider } from "./components/Context/DarkMode";
import {SINGIN, BLOG} from "./components/Costants/costant"

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={SINGIN} element={<div><Form /></div>}></Route>
            <Route path={BLOG} element={<><div>{<Title />}</div><div><PostList /></div></>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
