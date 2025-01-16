import React from 'react'
// import {BrowserRouter as Router, Route} from "react-router-dom";
import { Route, Router } from 'react-router-dom';
import './App.css'
// import CreatePost from './pages/CreatePost';
// import MainPage from './pages/MainPage';
import MainPage from './pages/MainPage';
import Loft from './pages/Loft';

const App = () => {
  return (
   <div>
     <div className="navbar">
      <div className="links"> 
      <a href="/">Main Page</a>
      {/* <a href="/createpost">Create Post</a> */}
      </div>
      </div>
   <Router>
   <Route path="/" exact render={(props) => <MainPage />} />
   {/* <Route path="/createpost" render={(props)=> <CreatePost />} /> */}
   <Route path="/loft/:loftId" render={(props)=> <Loft />}/>
     </Router>
    </div>
  )}
export default App;
