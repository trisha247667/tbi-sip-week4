import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="cards-section">
        <Card
          image={i1}
          title="Local Artisans"
          description="Supporting talented artisans and helping them showcase their handmade creations to a wider audience."
        />

        <Card
          image={i2}
          title="Creative Products"
          description="Explore unique handcrafted products made with creativity, passion, and traditional skills."
        />

        <Card
          image={i3}
          title="Sustainable Craft"
          description="Promoting eco-friendly craftsmanship while preserving traditional art forms."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;