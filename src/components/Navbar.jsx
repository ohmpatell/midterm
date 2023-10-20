import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">My App</Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/form1">Form 1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form2">Form 2</Link> 
        </li>
      </ul>

    </nav>
  );

}

export default Navbar;