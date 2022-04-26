import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Spitali} from './Spitali';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Spitali">
              Spitali
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Spitali' element={<Spitali/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
