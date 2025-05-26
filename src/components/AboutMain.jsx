export default function AboutMain() {
  const headerSrc = "/camper.png";
  return (
    <main className="about-main">
    <div className="about-content">
         <div className="about-hero-container">
        <img src={headerSrc} alt="Hero image" className="about-hero-image" />
      </div>
      <h1 className="about-heading">
        Don’t squeeze in a sedan when you could relax in a van.
      </h1>
      <p className="about-text">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉) Our team is
        full of vanlife enthusiasts who know firsthand the magic of touring the
        world on 4 wheels.
      </p>

    </div>
     
      <article className="about-cta-container">
        <h2 className="about-cta-heading">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <button className="about-cta-button">
            Explore our vans
        </button>
      </article>

    </main>
  );
}
