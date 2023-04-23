import './App.css';
import Navbar from './components/navbar/Navbar'
import Posts from './pages/posts/Posts';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, Component } from "react";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </BrowserRouter>
    );
  }
  
}

export default App;
