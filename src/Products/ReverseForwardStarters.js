import reversing from "../image/reversing.jpg";

const ReverseForwardStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Reverse Forward Starters</p>
            <h1 className="page-title">Bidirectional motor control for operational flexibility.</h1>
          </div>
          <p className="page-summary">
            Reverse-forward starters enable controlled switching between motor directions,
            making them suitable for conveyors, machinery, lifting systems, and similar equipment.
          </p>
        </div>
      </section>
      <section className="page-section product-story-grid">
        <div className="story-copy">
          <p>
            Apex reverse-forward starters are designed for controlled directional switching,
            with practical operator access and integrated protection logic for industrial use.
          </p>
          <ul className="editorial-list">
            <li>Forward and reverse direction control</li>
            <li>Suitable for mechanical movement systems</li>
            <li>Supports safe stopping and switching logic</li>
            <li>Applicable in conveyors, cranes, and winches</li>
          </ul>
        </div>
        <article className="variant-card-editorial wide-variant-card">
          <img src={reversing.src || reversing} alt="Apex Reverse Forward Motor Starter" loading="lazy" className="variant-image" />
          <div>
            <h3>Reverse Forward Starter</h3>
            <p>Configured for forward operation, stop control, and directional reversal through clearly defined front controls.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ReverseForwardStarters;
