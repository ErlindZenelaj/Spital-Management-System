import "./App.css";
import { Department } from "./Department";
import { BrowserRouter, Route, Routes,NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav justify-content-center">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/department"
              >
                Department
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/department" element={<Department/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
