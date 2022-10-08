
import {useState} from "react"
import { Title, Post} from './components'
import {allPosts} from './mockData/allPosts'

function App() {
  const [post, setPost] = useState(allPosts);
  return (
    <>
    <Title/>
    <Post all={post}/>
    </>
  );
}

export default App;
