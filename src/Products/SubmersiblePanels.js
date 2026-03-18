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
            <h1 className="page-title">Protection and control for dependable pump operation.</h1>
          </div>
          <p className="page-summary">
            Apex submersible pump control panels are designed to manage pump performance,
            electrical protection, and operating continuity across different site requirements.
          </p>
        </div>
      </section>
      <section className="page-section variant-gallery stacked-gallery">
        <article className="variant-card-editorial wide-variant-card">
          <img src={panelsp.src || panelsp} alt="Apex Single Phase Submersible Pump Control Panel" loading="lazy" className="variant-image" />
          <div>
            <h3>Single Phase Panel</h3>
            <p>Suitable for single-phase applications up to 5 H.P. where compact and dependable pump control is required.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
          <img src={paneltp.src || paneltp} alt="Apex Three Phase Submersible Pump Control Panel" loading="lazy" className="variant-image" />
          <div>
            <h3>Three Phase Panel</h3>
            <p>Built for three-phase connections up to 10 H.P. with stable control and protective functionality.</p>
          </div>
        </article>
        <article className="variant-card-editorial wide-variant-card">
          <img src={panelauto.src || panelauto} alt="Apex Automatic Submersible Pump Control Panel" loading="lazy" className="variant-image" />
          <div>
            <h3>Automatic Panel</h3>
            <p>Designed for heavier-duty three-phase pumps, including automatic star-to-delta transition during startup.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SubmersiblePanels;
