import panelsp from "../image/submersiblepanelsp.jpg";
import paneltp from "../image/submersibletp.jpg";
import panelauto from "../image/submersiblepanels.jpg";
import Link from "next/link";

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
            Apex submersible Pump Panels manage starting, protection, and
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

      <section className="page-section editorial-columns">
        <article>
          <h2 className="section-title">Submersible Panel Applications</h2>
          <p>
            Apex submersible pump panels are designed for stable motor starting,
            overload protection, and dependable running in agricultural,
            domestic, and industrial water systems. Panel configuration is
            selected based on power phase, motor HP, and operational automation
            needs at site level.
          </p>
        </article>
        <article>
          <h3 className="section-title">Related Control Solutions</h3>
          <p>
            For broader electrical control infrastructure, explore
            <Link href="/Product/Starters"> motor starters</Link>,
            <Link href="/Product/ControlSwitches"> ON-OFF and Changeover switches</Link>, and
            <Link href="/Product/Contactors"> industrial contactors</Link>.
          </p>
        </article>
      </section>
    </main>
  );
};

export default SubmersiblePanels;
