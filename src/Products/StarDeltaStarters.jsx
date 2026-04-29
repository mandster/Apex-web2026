import msd from "../image/msd.jpg";
import asd from "../image/asd.jpg";
import Link from "next/link";

const StarDeltaStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Star Delta Starters</p>
            <h1 className="page-title">
              Reduced-current starting for heavier-duty motor applications.
            </h1>
          </div>
          <p className="page-summary">
            Apex Star-Delta Starters are used where starting current must be
            reduced, allowing the motor to begin in star and then transition to
            delta once it approaches rated speed.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            The Apex catalogue positions Star-Delta starters for heavy-duty
            applications where direct-on-line starting is not preferred because
            of higher current demand. In star position the motor starts at lower
            voltage, then transitions to delta for normal full-voltage running.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Manual and automatic versions</li>
            <li>Reduced starting current</li>
            <li>Suitable for higher motor ratings</li>
            <li>Powder-coated IP54 enclosure</li>
            <li>High-quality contact materials and machine-wound coils</li>
          </ul>
          <p>
            Star-delta selection is often preferred where inrush management,
            utility stability, and mechanical stress reduction are key design
            requirements in industrial motor systems.
          </p>
        </article>
      </section>

      <section className="page-section variant-gallery">
        <article className="variant-card-editorial wide-variant-card">
          <img
            src={msd.src || msd}
            alt="Apex manual star delta starter"
            loading="lazy"
            className="variant-image"
          />
          <div>
            <h3>Manual Star-Delta Starter</h3>
            <p>
              Uses a direct operator handle to move from star to delta, giving
              straightforward manual control in applications where robust,
              accessible operation is preferred.
            </p>
            <p>
              The catalogue text mentions manual range up to 35 HP, while the
              selection table includes higher model references as well.
            </p>
          </div>
        </article>

        <article className="variant-card-editorial wide-variant-card">
          <img
            src={asd.src || asd}
            alt="Apex automatic star delta starter"
            loading="lazy"
            className="variant-image"
          />
          <div>
            <h3>Automatic Star-Delta Starter</h3>
            <p>
              Automates the star-to-delta transition through a timing relay,
              making it suitable for applications needing reduced starting
              current with less operator involvement.
            </p>
            <p>
              Selection references in the catalogue extend to larger motor
              outputs, including models shown up to 45 HP.
            </p>
          </div>
        </article>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Explore Related Industrial Switchgear</h2>
          <p>
            Compare with <Link href="/Product/Starters/DirectOnlineStarters">Direct Online Starters</Link>
            for simpler ON-OFF starting, or review
            <Link href="/Product/Starters/ReverseForwardStarters"> Forward-Reverse Starter options</Link>
            where bidirectional operation is required.
            For operator switching points, see our
            <Link href="/Product/ControlSwitches"> ON-OFF and Changeover Control Switch range</Link>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default StarDeltaStarters;