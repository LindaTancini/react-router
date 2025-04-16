//IMPORTAZIONI
import { NavLink } from "react-router-dom";

//CREO FUNZIONE NAVBAR
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Chi siamo</NavLink>
        </li>
        <li>
          <NavLink to="/posts">I miei Post</NavLink>
        </li>
      </ul>
    </nav>
  );
}

//ESPORTO
export default Navbar;
