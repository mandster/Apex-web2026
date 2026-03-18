import starters from "../image/starters.jpg";
import dol from "../image/dolclassic.jpg";
import starDelta from "../image/asd.jpg";
import reverseForward from "../image/reversing.jpg";
import Link from "next/link";

const Starters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Motor Starters</p>
            <h1 className="page-title">Control, protect, and start motors with confidence.</h1>
          </div>
          <p className="page-summary">
            Apex motor starters are built to manage electrical starting duty with
            reliability, serviceability, and practical protection for daily industrial use.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="feature-hero-media">
          <img src={starters.src || starters} alt="Apex Motor Starters" loading="eager" className="feature-hero-image" />
        </div>
      </section>
      <section className="page-section editorial-columns">
        <article>
          <p>
            A motor starter combines switching and protection elements that help
            start, stop, and safeguard electric motors against overload and electrical faults.
          </p>
        </article>
        <article>
          <p>
            Apex manufactures multiple starter configurations to suit different
            application requirements, operating methods, and installation conditions.
          </p>
        </article>
      </section>
      <section className="page-section">
        <div className="catalog-grid compact-catalog-grid">
          <Link className="catalog-card" href="/Product/Starters/DirectOnlineStarters">
            <img src={dol.src || dol} alt="Apex Direct Online Motor Starter" loading="lazy" className="catalog-image" />
            <div className="catalog-body">
              <h3>Direct Online Starters</h3>
              <p>Simple, proven, and effective starting for a wide range of motor duties.</p>
            </div>
          </Link>
          <Link className="catalog-card" href="/Product/Starters/StarDeltaStarters">
            <img src={starDelta.src || starDelta} alt="Apex Star Delta Starter" loading="lazy" className="catalog-image" />
            <div className="catalog-body">
              <h3>Star Delta Starters</h3>
              <p>Reduced-current starting architecture for larger motor applications.</p>
            </div>
          </Link>
          <Link className="catalog-card" href="/Product/Starters/ReverseForwardStarters">
            <img src={reverseForward.src || reverseForward} alt="Apex Forward Reverse Starter" loading="lazy" className="catalog-image" />
            <div className="catalog-body">
              <h3>Reverse Forward Starters</h3>
              <p>Directional motor control for equipment requiring forward and reverse motion.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Starters;
