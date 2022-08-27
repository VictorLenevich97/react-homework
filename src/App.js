import styles from './App.css'
import {Posts, filterPosts} from './components/Posts';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState(0)
  return (
    <>
        <div className='header'>
        <h1 className='title'>Muse discography</h1>
        <div onClick={()=>setValue(0)} className='all'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
            See All
        </div>
        <div onClick={()=>setValue(1)} className='fav'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="currentColor" d="m25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9c4.1 0 6.4 2.3 8 4.1c1.6-1.8 3.9-4.1 8-4.1c5 0 9 4 9 9c0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7c0 5.1 3.2 8.5 15 18.1c11.8-9.6 15-13 15-18.1c0-3.9-3.1-7-7-7c-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>
            See Favourites
        </div>
        </div>
        <Posts value={value}/>
    </>
  );
}

export default App;
