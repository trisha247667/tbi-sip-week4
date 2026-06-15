import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3rem;
    line-height: 1.1;
  }

  .navbar {
    padding: 15px 20px;
  }

  .nav-links {
    gap: 10px;
  }
}