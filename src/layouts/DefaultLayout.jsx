//IMPORTAZIONI
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//CREO FUNZIONE LAYOUT
function DefaultLayout() {
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
export default DefaultLayout;
