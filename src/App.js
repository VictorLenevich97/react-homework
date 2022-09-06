import { Title, PostList } from "./components";
import { Layout } from "./components/Layout"
import { DarkModeProvider } from "./components/Context/DarkMode";

function App() {

  return (
    <DarkModeProvider>
      <Layout>
        <Title />
        <PostList />
      </Layout>
    </DarkModeProvider>
  )
}

export default App;
