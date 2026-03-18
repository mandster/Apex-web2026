
import dolclassic from "../image/dolclassic.jpg";
import dolcompact from "../image/dolcompact.jpg";


const DirectOnlineStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Direct Online Starters</p>
            <h1 className="page-title">Direct-on-line starting for standard motor duty.</h1>
          </div>
          <p className="page-summary">
            DOL starters connect motors directly to line voltage where system
            and load conditions allow direct starting.
          </p>
        </div>
      </section>
      <section className="page-section variant-gallery">
        <article className="variant-card-editorial wide-variant-card">
            <img src={dolcompact.src || dolcompact} alt="Direct Online Compact" loading="lazy" className="variant-image" />
          <div>
            <h3>DOL Compact</h3>
            <p>Compact configuration for panel space constraints with dependable switching performance.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
            <img src={dolclassic.src || dolclassic} alt="Direct Online Classic" loading="lazy" className="variant-image" />
          <div>
            <h3>DOL Classic</h3>
            <p>Established configuration with long field use and consistent operating performance.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default DirectOnlineStarters;
