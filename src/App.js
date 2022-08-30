import './App.css';
import {Posts} from "./components/Posts"
import {allPosts} from "./components/mockData/postList"
import {Layout} from "./components/Layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <Posts/>
      </Layout>
    </div>
  );
}

export default App;
