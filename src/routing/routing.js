import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from '../components/about';
import Home from './home';
class RouterData extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">API Call</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/About' element={< About />}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}
  
export default RouterData;