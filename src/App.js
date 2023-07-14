import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom';
import { RegistrationForm } from './registration';
import { LoginPage } from './login';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import PrivateRoutes from './dummy2';
import './style.css';

export default function App() {
  return (
    <div>
      <nav>
        <div>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/registration" className="navbar-link">
            Registration
          </NavLink>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/about" element={<Contact />} />
            <Route path="/contact" element={<About />} />
          </Route>
          {/* <PrivateRoute path="/about" element={<Contact />} />
          <PrivateRoute path="/contact" element={<About />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </div>
    </div>
  );
}
