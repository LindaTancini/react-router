//IMPORTAZIONI
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
