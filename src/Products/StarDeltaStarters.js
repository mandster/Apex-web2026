import msd from "../image/msd.jpg";
import asd from "../image/asd.jpg";

const StarDeltaStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Star Delta Starters</p>
            <h1 className="page-title">Reduced-current starting for larger motor duty.</h1>
          </div>
          <p className="page-summary">
            Star-delta starters help reduce starting current and mechanical stress,
            making them suitable for applications where direct starting is less desirable.
          </p>
        </div>
      </section>
      <section className="page-section variant-gallery">
        <article className="variant-card-editorial wide-variant-card">
              <img src={asd.src || asd} alt="Apex Manual Star Delta Motor Starter" loading="lazy" className="variant-image" />
          <div>
            <h3>Manual Star-Delta Starter</h3>
            <p>Starts in star mode and transitions to delta manually after the required interval.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
              <img src={msd.src || msd} alt="Apex Automatic Star Delta Motor Starter" loading="lazy" className="variant-image" />
          <div>
            <h3>Automatic Star-Delta Starter</h3>
            <p>Transitions from star to delta automatically through an adjustable timing relay for smoother operation.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default StarDeltaStarters;
