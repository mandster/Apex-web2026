import control32 from "../image/controlswitch32.jpg";
import control63 from "../image/rf63.jpg";

const ControlSwitches = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">L.T. Control Switches</p>
            <h1 className="page-title">Low-voltage control switching for industrial duty.</h1>
          </div>
          <p className="page-summary">
            Apex control switches are designed for frequent operation,
            consistent contact performance, and motor-control applications.
          </p>
        </div>
      </section>
      <section className="page-section product-story-grid">
        <div className="story-copy">
          <p>
            These switches support on-off control, reversing, change-over,
            and star-delta functions in low-voltage motor-control circuits.
          </p>
          <ul className="editorial-list">
            <li>On-Off Switches</li>
            <li>Forward-Reverse Switches</li>
            <li>Forward-Reverse Pole Changing Switches</li>
            <li>Change-Over Switches</li>
            <li>Star-Delta Switches</li>
            <li>Phase Changer Switches</li>
          </ul>
        </div>
        <div className="variant-gallery">
          <article className="variant-card-editorial">
            <img src={control32.src || control32} alt="Apex L.T Control Switches 32 A" loading="lazy" className="variant-image" />
            <div>
              <h3>32 A</h3>
              <p>Designed for standard low-voltage control applications with reliable mechanical performance.</p>
            </div>
          </article>
          <article className="variant-card-editorial">
            <img src={control63.src || control63} alt="Apex L.T Control Switches 63 A" loading="lazy" className="variant-image" />
            <div>
              <h3>63 A</h3>
              <p>Higher-capacity switching for heavier loads and more demanding duty cycles.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ControlSwitches;
