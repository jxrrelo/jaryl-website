import './App.css';
import Navbar from './components/navbar/Navbar'
import Posts from './pages/posts/Posts';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import { React, Component } from "react";
import { Link } from "react-scroll";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </>
    );
  }
  
}

export default App;
