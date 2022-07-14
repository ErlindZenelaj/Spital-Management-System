import React from 'react';
import './App.css';
import {Spitali} from './Spitali';
import {BrowserRouter, Route, Routes,NavLink,} from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
    <div className="App container">
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- n-2">
            <NavLink className="btn btn-light btn-outline-primary" to="/HomePage">
              Home
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Admin">
              Admin
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Spitali">
              Spitali
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route exact path='/Spitali' element={<Spitali/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
