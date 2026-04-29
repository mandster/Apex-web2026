import dolclassic from "../image/dolclassic.jpg";
import dolcompact from "../image/dolcompact.jpg";
import Link from "next/link";

const DirectOnlineStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Direct Online Starters</p>
            <h1 className="page-title">
              Proven direct-on-line motor starting with integrated protection.
            </h1>
          </div>
          <p className="page-summary">
            Apex DOL starters are the most common motor-starting solution in the
            range, covering applications from 0.5 HP up to 20 HP with dependable
            overload protection and rugged IP54 enclosures.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Apex Direct-On-Line Starters are designed to connect motors directly
            to line voltage where the supply system and driven load permit direct
            starting. The catalogue highlights complete protection from
            overloading and, in three-phase use, protection against single
            phasing.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Range from 0.5 HP to 20 HP</li>
            <li>Overload protection</li>
            <li>Single-phasing protection for three-phase applications</li>
            <li>Machine-wound solenoid coils</li>
            <li>Powder-coated IP54 enclosure</li>
          </ul>
        </article>
      </section>

      <section className="page-section variant-gallery">
        <article className="variant-card-editorial wide-variant-card">
          <img
            src={dolclassic.src || dolclassic}
            alt="Apex DOL Classic motor starter"
            loading="lazy"
            className="variant-image"
          />
          <div>
            <h3>DOL Classic</h3>
            <p>
              Apex’s flagship DOL configuration, refined over decades and still a
              preferred choice for reliable day-to-day motor starting duty across
              industrial installations.
            </p>
            <p>
              Typical catalogue selection extends through multiple relay ranges,
              supporting motor outputs up to 20 HP.
            </p>
          </div>
        </article>

        <article className="variant-card-editorial wide-variant-card">
          <img
            src={dolcompact.src || dolcompact}
            alt="Apex DOL Compact motor starter"
            loading="lazy"
            className="variant-image"
          />
          <div>
            <h3>DOL Compact</h3>
            <p>
              A smaller but powerful format designed to reduce footprint while
              improving presentation on the equipment it is fitted to.
            </p>
            <p>
              Available in both single-phase and three-phase versions, with
              manual-reset overload relays for added operational safety after
              tripping.
            </p>
          </div>
        </article>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Selection Highlights</h2>
          <div className="spec-grid">
            <ul>
              <li><strong>Classic DOL:</strong> 0.5 HP to 20 HP</li>
              <li><strong>Compact Single Phase:</strong> up to 3 HP</li>
              <li><strong>Compact Three Phase:</strong> up to 7.5 HP</li>
            </ul>
            <ul>
              <li><strong>Protection:</strong> Overload protection</li>
              <li><strong>Enclosure:</strong> Powder-coated IP54</li>
              <li><strong>Construction:</strong> Contactor + overload relay architecture</li>
            </ul>
          </div>

          <h3 className="section-title">Explore Other Starter Types</h3>
          <p>
            Need reduced current or bidirectional operation? Explore our
            <Link href="/Product/Starters/StarDeltaStarters"> Star-Delta Starters</Link> and
            <Link href="/Product/Starters/ReverseForwardStarters"> Forward-Reverse Switch Starters</Link>.
            You can also review <Link href="/Product/ControlSwitches">ON-OFF and Changeover Control Switches</Link>
            for panel operator control.
          </p>
        </div>
      </section>
    </main>
  );
};

export default DirectOnlineStarters;