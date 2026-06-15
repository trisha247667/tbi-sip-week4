import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>About Us</h1>
        <p>
          Artisan Connect helps local artisans showcase their
          handmade creations to a wider audience.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;