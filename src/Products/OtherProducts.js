import React from 'react';
import limitswitch from "../image/panel accessories mcb.jpg";
import plugsockets from "../image/plugsockets.jpg";
import accessories from "../image/accessories.jpg";
import pushbutton from "../image/pushbutton.jpg";

const OtherProducts = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Other Products</p>
            <h1 className="page-title">Supporting products for control, connectivity, and panel assembly.</h1>
          </div>
          <p className="page-summary">
            This range includes auxiliary products used in industrial panels,
            machine-control systems, and site electrical installations.
          </p>
        </div>
      </section>
      <section className="page-section catalog-grid">
        <article className="catalog-card static-card">
          <img src={limitswitch.src || limitswitch} alt="Limit Switches" loading="lazy" className="catalog-image" />
          <div className="catalog-body">
            <h3>Limit Switches</h3>
            <p>Position-detection devices for machine interlocks and automation control logic.</p>
          </div>
        </article>
        <article className="catalog-card static-card">
          <img src={plugsockets.src || plugsockets} alt="Plug Sockets" loading="lazy" className="catalog-image" />
          <div className="catalog-body">
            <h3>Plug Sockets</h3>
            <p>Industrial plug-and-socket systems for durable site power connectivity.</p>
          </div>
        </article>
        <article className="catalog-card static-card">
          <img src={pushbutton.src || pushbutton} alt="Push Button" loading="lazy" className="catalog-image" />
          <div className="catalog-body">
            <h3>Push Button Stations</h3>
            <p>Operator control stations for machine start, stop, and command functions.</p>
          </div>
        </article>
        <article className="catalog-card static-card">
          <img src={accessories.src || accessories} alt="Panel Accessories" loading="lazy" className="catalog-image" />
          <div className="catalog-body">
            <h3>Panel Accessories</h3>
            <p>Supporting components for panel assembly, integration, and final installation.</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default OtherProducts;
