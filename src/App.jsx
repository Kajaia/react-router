import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
