import React from 'react'

const OverloadRelays = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Overload Relays</p>
            <h1 className="page-title">Thermal and electronic motor overload protection.</h1>
          </div>
          <p className="page-summary">
            Apex overload relays protect motors against sustained overcurrent
            conditions through reliable thermal or electronic sensing.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Overload relays detect abnormal motor current draws that indicate
            mechanical jamming, bearing failure, or electrical fault. They prevent
            motor damage through timely disconnection or alarm signaling.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Thermal overload relays with adjustable trip current bands</li>
            <li>Integrated into motor starters and control systems</li>
            <li>Class 10/20/30 thermal protection for different motor types</li>
            <li>Manual and automatic reset options</li>
            <li>Electronic variants with analog and digital outputs</li>
          </ul>
        </article>
      </section>

      <section className="page-section">
        <div className="cta-panel">
          <p className="section-kicker">Applications</p>
          <h2>AC motor protection in starters and contactors, pump and compressor overload sensing, conveyor and crane motor safeguarding, process equipment current monitoring.</h2>
        </div>
      </section>
    </main>
  );
}

export default OverloadRelays
