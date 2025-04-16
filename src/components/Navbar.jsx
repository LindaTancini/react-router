//IMPORTAZIONI
import { Link } from "react-router-dom";

//CREO FUNZIONE NAVBAR
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Chi siamo</Link>
      <Link to="/posts">I miei Post</Link>
    </nav>
  );
}

//ESPORTO
export default Navbar;
