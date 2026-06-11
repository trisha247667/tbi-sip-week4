import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Artisan Connect</h2>

      <Link to="/">Home</Link>{" "}
      <Link to="/about">About</Link>{" "}
      <Link to="/products">Products</Link>{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;