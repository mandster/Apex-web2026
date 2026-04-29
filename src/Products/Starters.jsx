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
            <h1 className="page-title">Motor starting and protection for industrial applications.</h1>
          </div>
          <p className="page-summary">
            Apex Motor Starters are designed for reliable starting duty, overload
            protection, and field serviceability.
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
            A motor starter integrates switching and overload protection for
            motor start, stop, and fault protection.
          </p>
          <p>
            In industrial electrical systems, correct starter selection improves
            motor life, reduces downtime risk, and supports safer operation
            under fluctuating load conditions.
          </p>
        </article>
        <article>
          <p>
            Apex offers multiple starter configurations to suit motor ratings,
            duty requirements, and installation conditions.
          </p>
          <p>
            Our range includes ON-OFF style direct starting, reduced-current
            star-delta transition, and directional forward-reverse operation for
            machinery that requires controlled movement in both directions.
          </p>
        </article>
      </section>
      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Motor Starter Categories</h2>
        </div>
        <div className="catalog-grid compact-catalog-grid">
          <Link className="catalog-card" href="/Product/Starters/DirectOnlineStarters">
            <img src={dol.src || dol} alt="Apex Direct Online Motor Starter" loading="lazy" className="catalog-image" />
            <div className="catalog-body">
              <h3>Direct Online Starters</h3>
              <p>Direct line-voltage starting for applications with acceptable inrush current.</p>
            </div>
          </Link>
          <Link className="catalog-card" href="/Product/Starters/StarDeltaStarters">
            <img src={starDelta.src || starDelta} alt="Apex Star Delta Starter" loading="lazy" className="catalog-image" />
            <div className="catalog-body">
              <h3>Star Delta Starters</h3>
              <p>Reduced-current starting for larger motors and controlled acceleration.</p>
            </div>
          </Link>
          <Link className="catalog-card" href="/Product/Starters/ReverseForwardStarters">
            <img src={reverseForward.src || reverseForward} alt="Apex Forward Reverse Starter" loading="lazy" className="catalog-image" />
            <div className="catalog-body">
              <h3>Reverse-Forward (aka Reversing) Starters</h3>
              <p>Bidirectional motor control for equipment requiring forward and reverse motion.</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h3 className="section-title">Explore Related Switching Products</h3>
          <p>
            For complete control panel builds, also explore our
            <Link href="/Product/ControlSwitches"> ON-OFF and Changeover Control Switches</Link>,
            <Link href="/Product/Contactors"> Air Break Contactors</Link>, and
            <Link href="/Product/PanelAccessories"> Panel Accessories</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Starters;
