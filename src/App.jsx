//IMPORTAZIONI
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostList from "./pages/PostsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <main>
          <Routes>
            {/* CONFIGURO LE ROTTE */}
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
