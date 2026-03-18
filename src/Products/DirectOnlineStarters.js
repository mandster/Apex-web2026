
import dolclassic from "../image/dolclassic.jpg";
import dolcompact from "../image/dolcompact.jpg";


const DirectOnlineStarters = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Direct Online Starters</p>
            <h1 className="page-title">Straightforward starting with durable switching performance.</h1>
          </div>
          <p className="page-summary">
            DOL starters connect motors directly to the supply, offering a simple,
            proven approach where operating conditions allow direct starting duty.
          </p>
        </div>
      </section>
      <section className="page-section variant-gallery">
        <article className="variant-card-editorial wide-variant-card">
            <img src={dolcompact.src || dolcompact} alt="Direct Online Compact" loading="lazy" className="variant-image" />
          <div>
            <h3>DOL Compact</h3>
            <p>Smaller in format, but built for reliable long-term service with carefully selected switching components.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
            <img src={dolclassic.src || dolclassic} alt="Direct Online Classic" loading="lazy" className="variant-image" />
          <div>
            <h3>DOL Classic</h3>
            <p>A flagship Apex configuration known for long-standing field use, strong performance, and mature design refinement.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default DirectOnlineStarters;
