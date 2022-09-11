import './App.css';
import {Posts} from "./components/Posts"
import {Layout} from "./Layout/Layout"
import { ThemeProviders} from "././providers/ThemeProviders"

function App() {
  return (
    <ThemeProviders>
      <Layout>
        <Posts/>
      </Layout>
    </ThemeProviders>

  );
}

export default App;
