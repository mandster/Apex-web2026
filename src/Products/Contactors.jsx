import React from "react";
import contactor16 from "../image/contactor16.jpg";
import contactor22 from "../image/contactor22.jpg";
import contactor38 from "../image/contactor38.jpg";
import contactorChannel from "../image/contactorchannel.jpg";
import contactorChannel2 from "../image/contactorchannel2.jpg";
import Link from "next/link";

const Contactors = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Air Break Contactors</p>
            <h1 className="page-title">
              High-cycle switching built for motor-control and load-control systems.
            </h1>
          </div>
          <p className="page-summary">
            Apex Air Break Contactors are designed as the heart of motor starters,
            electrical panels, and switching assemblies, with silver-alloy
            contacts, heat-resistant bodies, and long operating life.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            The catalogue describes Apex contactors as core switching components
            used to make or break power circuits after receiving a control signal.
            They are suited to electric motors, lighting, heating, capacitor
            banks, and other electrical loads.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Capable of millions of operations</li>
            <li>Silver-alloy contacts</li>
            <li>Heat-resistant outer body</li>
            <li>Low-noise, chatter-free operation</li>
            <li>Easy replacement of coils and contacts</li>
          </ul>
        </article>
      </section>

      <section className="page-section catalog-grid contactor-grid">
        <article className="catalog-card static-card">
          <div className="dual-image-grid">
            <img
              src={contactorChannel.src || contactorChannel}
              alt="Apex Commander series contactor"
              loading="lazy"
              className="catalog-image"
            />
            <img
              src={contactorChannel2.src || contactorChannel2}
              alt="Apex Commander series contactor side view"
              loading="lazy"
              className="catalog-image"
            />
          </div>
          <div className="catalog-body">
            <h3>COMMANDER Series</h3>
            <p>
              A modular range designed for rugged conditions, supplied with
              1NO+1NC arrangement and expandable through quick-mount auxiliary
              contact blocks in different NO/NC combinations.
            </p>
          </div>
        </article>

        <article className="catalog-card static-card">
          <img
            src={contactor16.src || contactor16}
            alt="Apex compact contactor"
            loading="lazy"
            className="catalog-image"
          />
          <div className="catalog-body">
            <h3>COMPACT Series</h3>
            <p>
              A sturdy, cost-effective, space-saving solution rated at 20 Amps,
              suitable where panel footprint matters without compromising
              switching reliability.
            </p>
          </div>
        </article>

        <article className="catalog-card static-card">
          <div className="dual-image-grid">
            <img
              src={contactor22.src || contactor22}
              alt="Apex classic contactor 22A"
              loading="lazy"
              className="catalog-image"
            />
            <img
              src={contactor38.src || contactor38}
              alt="Apex classic contactor 38A"
              loading="lazy"
              className="catalog-image"
            />
          </div>
          <div className="catalog-body">
            <h3>CLASSIC Series</h3>
            <p>
              Apex’s primary contactor range, refined over years of use and
              positioned in the catalogue as a long-standing platform that still
              fits modern switching requirements.
            </p>
          </div>
        </article>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Integration and Use Cases</h2>
          <p>
            Industrial contactors are commonly integrated with
            <Link href="/Product/Starters"> motor starters</Link> and
            <Link href="/Product/ControlSwitches"> control switches</Link> to create dependable
            switching chains in process plants, machine panels, utility boards,
            and pumping systems. Explore
            <Link href="/Product/Starters/DirectOnlineStarters"> DOL starters</Link> and
            <Link href="/Product/PanelAccessories"> panel accessories</Link> for complete panel architecture.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contactors;