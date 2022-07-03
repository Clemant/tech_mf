import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Services from "./component/Services.js";
import Contact from "./component/Contact.js";

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
              <Link to="about">A propos</Link>
            </li>
            <li className="uk-active">
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="contact">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
