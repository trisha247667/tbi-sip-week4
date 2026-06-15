import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-content">
        <h1>Discover Handmade Stories</h1>

        <p>
          Connecting local artisans with people who appreciate authentic,
          handcrafted creations. Explore unique products made with passion,
          creativity, and traditional craftsmanship.
        </p>

        <button
          onClick={() =>
            document
              .querySelector(".cards-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Collections
        </button>
      </div>
    </section>
  );
}

export default Hero;