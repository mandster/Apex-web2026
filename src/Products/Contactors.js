import React from "react";
import contactor16 from "../image/contactor16.jpg";
import contactor22 from "../image/contactor22.jpg";
import contactor38 from "../image/contactor38.jpg";
import contactorChannel from "../image/contactorchannel.jpg";
import contactorChannel2 from "../image/contactorchannel2.jpg";

const Contactors = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Air Break Contactors</p>
            <h1 className="page-title">Air-break contactors for repeated industrial switching duty.</h1>
          </div>
          <p className="page-summary">
            Apex contactors are designed for motor-control and power-switching
            applications requiring long electrical life and field serviceability.
          </p>
        </div>
      </section>
      <section className="page-section editorial-columns">
        <article>
          <p>
            Contactors open and close power circuits in response to control
            signals. They are fundamental to motor starters, panel assemblies,
            capacitor banks, and other load-control systems.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>High electrical and mechanical life</li>
            <li>Low-noise, low-chatter operation</li>
            <li>Heat-resistant housing</li>
            <li>Protection from live parts</li>
            <li>Replaceable coils and contacts</li>
          </ul>
        </article>
      </section>
      <section className="page-section catalog-grid contactor-grid">
        <article className="catalog-card static-card">
          <div className="dual-image-grid">
            <img src={contactorChannel.src || contactorChannel} alt="Apex COMMANDER series contactor" loading="lazy" className="catalog-image" />
            <img src={contactorChannel2.src || contactorChannel2} alt="Apex COMMANDER series contactor side view" loading="lazy" className="catalog-image" />
          </div>
          <div className="catalog-body">
            <h3>COMMANDER Series</h3>
            <p>Modular design with flexible auxiliary configurations and easy field serviceability.</p>
          </div>
        </article>
        <article className="catalog-card static-card">
          <img src={contactor16.src || contactor16} alt="Apex contactor 16 A" loading="lazy" className="catalog-image" />
          <div className="catalog-body">
            <h3>Compact Build</h3>
            <p>Compact format for panel integration where footprint and service access both matter.</p>
          </div>
        </article>
        <article className="catalog-card static-card">
          <div className="dual-image-grid">
            <img src={contactor22.src || contactor22} alt="Apex contactor 22 A" loading="lazy" className="catalog-image" />
            <img src={contactor38.src || contactor38} alt="Apex contactor 38 A" loading="lazy" className="catalog-image" />
          </div>
          <div className="catalog-body">
            <h3>Expanded Range</h3>
            <p>Multiple current ratings for different duty classes and installation requirements.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Contactors;
