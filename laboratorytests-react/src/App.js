import './App.css';
import {Test} from './Test';
import React from 'react';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Test">
              LaboratoryTests
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route exact path='/test' element={<Test/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;