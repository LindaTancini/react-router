//IMPORTAZIONI
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostList from "./pages/PostsList";
import Layout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* CONFIGURO LE ROTTE */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<PostList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
