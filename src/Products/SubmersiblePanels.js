import panelsp from "../image/submersiblepanelsp.jpg";
import paneltp from "../image/submersibletp.jpg";
import panelauto from "../image/submersiblepanels.jpg";

const SubmersiblePanels = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Submersible Panels</p>
            <h1 className="page-title">Pump control and protection for dependable operation.</h1>
          </div>
          <p className="page-summary">
            Apex submersible pump panels manage starting, protection, and
            operating continuity across varied site requirements.
          </p>
        </div>
      </section>
      <section className="page-section variant-gallery stacked-gallery">
        <article className="variant-card-editorial wide-variant-card">
          <img src={panelsp.src || panelsp} alt="Apex Single Phase Submersible Pump Control Panel" loading="lazy" className="variant-image" />
          <div>
            <h3>Single Phase Panel</h3>
            <p>Single-phase panel up to 5 HP for compact and dependable pump control.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
          <img src={paneltp.src || paneltp} alt="Apex Three Phase Submersible Pump Control Panel" loading="lazy" className="variant-image" />
          <div>
            <h3>Three Phase Panel</h3>
            <p>Three-phase panel up to 10 HP with stable control and integrated protection.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
          <img src={panelauto.src || panelauto} alt="Apex Automatic Submersible Pump Control Panel" loading="lazy" className="variant-image" />
          <div>
            <h3>Automatic Panel</h3>
            <p>Automatic panel for higher-duty three-phase pumps with star-to-delta transition.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SubmersiblePanels;
