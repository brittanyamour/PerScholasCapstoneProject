import "./nav.css"

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

// module.exports = Nav;