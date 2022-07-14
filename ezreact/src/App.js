import logo from './logo.svg';
import './App.css';
import {Spitali} from './Spitali';
import {Title} from './Title';
import {Allergy} from './Allergy';
import {City} from './City';
import {Age} from './Age';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Spitali">
              Spitali
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Title">
              Title
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Allergy">
              Allergy
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/City">
              City
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Age">
              Age
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route exact path='/Spitali' element={<Spitali/>}/>
        <Route exact path='/Title' element={<Title/>}/>
        <Route exact path='/Allergy' element={<Allergy/>}/>
        <Route exact path='/City' element={<City/>}/>
        <Route exact path='/Age' element={<Age/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
