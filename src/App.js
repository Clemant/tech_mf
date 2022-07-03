import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home.js";

function App() {
  return (
    <BrowserRouter>
      <nav className="uk-navbar-container" uk-navba="true">
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to="home">Accueil</Link>
            </li>
            <li className="uk-active">
              <Link to="home">A propos</Link>
            </li>
            <li className="uk-active">
              <Link to="home">Services</Link>
            </li>
            <li>
              <Link to="home">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
