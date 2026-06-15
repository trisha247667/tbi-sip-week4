import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";

function Products() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Our Products</h1>

        <div className="cards-section">

          <div className="card">
            <img src={i1} alt="Pottery" />

            <h3>Handcrafted Pottery</h3>

            <p>
              Beautiful ceramic products created by skilled artisans.
            </p>
          </div>

          <div className="card">
            <img src={i2} alt="Textiles" />

            <h3>Traditional Textiles</h3>

            <p>
              Authentic fabrics inspired by cultural heritage.
            </p>
          </div>

          <div className="card">
            <img src={i3} alt="Woodcraft" />

            <h3>Wooden Crafts</h3>

            <p>
              Handmade wooden décor and utility products.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;