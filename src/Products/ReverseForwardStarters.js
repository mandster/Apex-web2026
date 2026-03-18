import reversing from "../image/reversing.jpg";

const ReverseForwardStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Reverse Forward Starters</p>
            <h1 className="page-title">Bidirectional motor control for industrial equipment.</h1>
          </div>
          <p className="page-summary">
            Reverse-forward starters provide controlled directional switching for
            conveyors, machinery, and lifting systems.
          </p>
        </div>
      </section>
      <section className="page-section product-story-grid">
        <div className="story-copy">
          <p>
            Apex reverse-forward starters combine directional control with
            practical operator access and integrated protection logic.
          </p>
          <ul className="editorial-list">
            <li>Forward and reverse motor control</li>
            <li>Electrical interlocking for safer directional switching</li>
            <li>Suitable for mechanical movement systems</li>
            <li>Used in conveyors, cranes, and winches</li>
          </ul>
        </div>
        <article className="variant-card-editorial wide-variant-card">
          <img src={reversing.src || reversing} alt="Apex Reverse Forward Motor Starter" loading="lazy" className="variant-image" />
          <div>
            <h3>Reverse Forward Starter</h3>
            <p>Configured for forward run, stop, and controlled directional reversal through front controls.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ReverseForwardStarters;
