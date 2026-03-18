import msd from "../image/msd.jpg";
import asd from "../image/asd.jpg";

const StarDeltaStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Star Delta Starters</p>
            <h1 className="page-title">Reduced-current starting for higher motor ratings.</h1>
          </div>
          <p className="page-summary">
            Star-delta starters reduce starting current and mechanical stress
            where direct-on-line starting is not preferred.
          </p>
        </div>
      </section>
      <section className="page-section variant-gallery">
        <article className="variant-card-editorial wide-variant-card">
              <img src={asd.src || asd} alt="Apex Manual Star Delta Motor Starter" loading="lazy" className="variant-image" />
          <div>
            <h3>Manual Star-Delta Starter</h3>
            <p>Starts in star and transitions to delta through manual operator control.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
              <img src={msd.src || msd} alt="Apex Automatic Star Delta Motor Starter" loading="lazy" className="variant-image" />
          <div>
            <h3>Automatic Star-Delta Starter</h3>
            <p>Automatic star-to-delta transition using an adjustable timing relay.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default StarDeltaStarters;
