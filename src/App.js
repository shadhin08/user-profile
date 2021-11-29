import { createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";
import User from "./components/User/User";

export const userData=createContext();

function App() {

  const [users, setUsers]= useState([]);

    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }, []);

  return (
    <userData.Provider value={users}>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>

          <Route path='/profile=:username' element={<User/>}/>

          <Route path='/profile=:username/post=:postNum' element={<PostDetail/>}/>

          <Route exact path='/' element={<Home/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </userData.Provider>
  );
}

export default App;
