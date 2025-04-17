//IMPORTAZIONI
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostList from "./pages/PostsList";
import DefaultLayout from "./layouts/DefaultLayout";
import PostsDetail from "./pages/PostsDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* CONFIGURO LE ROTTE */}
          <Route Component={DefaultLayout}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostsDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
