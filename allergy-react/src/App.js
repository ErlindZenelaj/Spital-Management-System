import logo from './logo.svg';
import './App.css';
import {Allergy} from './Allergy';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Allergy">
              Allergy
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route exact path='/Allergy' element={<Allergy/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
