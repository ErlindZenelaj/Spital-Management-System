import './App.css';
import {Schedule} from './Schedule';
import React from 'react';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/schedule">
              Schedule
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route exact path="/schedule" element={<Schedule/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
