
import React from 'react';

const PanelAccessories = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Panel Accessories</p>
            <h1 className="page-title">Supporting components for complete panel assembly.</h1>
          </div>
          <p className="page-summary">
            Apex panel accessories complete electrical enclosures with protection,
            indication, and structural components for reliable field installation.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Panel accessories provide the foundation for safe, accessible electrical
            installations. These components protect live parts, enable operator control
            and monitoring, and support secure component mounting.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Miniature circuit breakers for load protection and isolation</li>
            <li>Indicator lights and pilot lamps for status display</li>
            <li>DIN rail and mounting hardware for component organization</li>
            <li>Terminal blocks and distribution bars for safe connections</li>
            <li>Cable glands and conduit seals for protected wiring entry</li>
          </ul>
        </article>
      </section>

      <section className="page-section">
        <div className="cta-panel">
          <p className="section-kicker">Applications</p>
          <h2>Motor control panel assembly, pump protection panel integration, distribution board completion, industrial machine enclosure wiring, process automation cabinet build.</h2>
        </div>
      </section>
    </main>
  );
}

export default PanelAccessories;
