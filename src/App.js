import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './lowComponent/home';
import About from './components/about';
import Contact from "./components/contact";
import Data from "./components/data";
function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-2">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/data" element={<Data />} />
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;