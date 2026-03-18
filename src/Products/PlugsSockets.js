
import React from 'react';

const PlugsSockets = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Plug Sockets</p>
            <h1 className="page-title">Industrial power connectivity for demanding site applications.</h1>
          </div>
          <p className="page-summary">
            Apex industrial plug and socket systems provide durable, weatherproof
            power distribution for site installations, mobile equipment, and field operations.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Industrial plugs and sockets enable safe, repeatable power connections
            on job sites and between equipment. They combine mechanical durability with
            electrical safety for heavy-duty industrial use.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Rated for 16 A and 32 A single-phase connections</li>
            <li>Weather-resistant and IP65-rated configurations</li>
            <li>Metal-clad construction for field durability</li>
            <li>Certified male and female connector pairs</li>
            <li>Extensions and panel-mount variants available</li>
          </ul>
        </article>
      </section>

      <section className="page-section">
        <div className="cta-panel">
          <p className="section-kicker">Applications</p>
          <h2>Site power distribution, portable load connections, equipment interconnection, temporary installation wiring, mobile pump and compressor power.</h2>
        </div>
      </section>
    </main>
  );
}

export default PlugsSockets;
