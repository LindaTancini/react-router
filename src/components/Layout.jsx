//IMPORTAZIONI

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

//CREO FUNZIONE LAYOUT
function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        {/* CON OUTLET INSERISCO QUI LE MIE PAGINE */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

//ESPORTO
export default Layout;
