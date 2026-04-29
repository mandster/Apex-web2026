import reversing from "../image/reversing.jpg";
import Link from "next/link";

const ReverseForwardStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Forward-Reverse Starters</p>
            <h1 className="page-title">
              Controlled bidirectional motor operation for industrial movement systems.
            </h1>
          </div>
          <p className="page-summary">
            Apex Forward-Reverse Starters are designed for motors that need to
            run in both clockwise and anti-clockwise directions, combining
            directional control with overload protection and rugged enclosure design.
          </p>
        </div>
      </section>

      <section className="page-section product-story-grid">
        <div className="story-copy">
          <p>
            This starter is used where the motor must rotate in both directions,
            making it especially relevant for machinery where reversing motion is
            part of normal operation.
          </p>

          <p>
            The catalogue notes a simple front-control layout: green starts the
            motor, red stops it, and black reverses the direction of operation.
          </p>

          <ul className="editorial-list">
            <li>Forward and reverse motor operation</li>
            <li>Overload protection</li>
            <li>High-quality alloy contacts</li>
            <li>Machine-wound contactor coils</li>
            <li>Powder-coated IP54 enclosure</li>
          </ul>
        </div>

        <article className="variant-card-editorial wide-variant-card">
          <img
            src={reversing.src || reversing}
            alt="Apex forward reverse motor starter"
            loading="lazy"
            className="variant-image"
          />
          <div>
            <h3>Forward-Reverse Starter</h3>
            <p>
              An operator-friendly reversing starter for applications that demand
              direction change with dependable motor protection and durable
              low-voltage control construction.
            </p>
            <p>
              Typical use cases include conveyors, machine tool feeds, rolling
              mechanisms, and systems where controlled reverse movement is
              essential during operation or maintenance.
            </p>
          </div>
        </article>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Related Control Products</h2>
          <p>
            Pair forward-reverse starters with
            <Link href="/Product/ControlSwitches"> industrial ON-OFF and Changeover Switches</Link> for
            operator control, or explore
            <Link href="/Product/Starters/DirectOnlineStarters"> Direct Online Starters</Link> and
            <Link href="/Product/Contactors"> Air Break Contactors</Link> for broader motor control architectures.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ReverseForwardStarters;