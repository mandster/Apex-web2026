
import React from 'react';

const LimitSwitches = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Limit Switches</p>
            <h1 className="page-title">Position detection for machine interlocks and automation.</h1>
          </div>
          <p className="page-summary">
            Apex limit switches provide reliable position sensing for industrial
            machines, conveyor systems, and automation control logic.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Limit switches detect mechanical position and trigger control actions.
            They are fundamental to machinery safety interlocks, automation sequences,
            and process control systems.
          </p>
        </article>
        <article>
          <ul className="editorial-list">
            <li>Robust mechanical action and reliable contact closure</li>
            <li>Suitable for industrial plant and mobile equipment</li>
            <li>Integral operators for lever, roller, and plunger actuation</li>
            <li>Standard and safety-rated configurations available</li>
            <li>Wide environmental tolerance for field installation</li>
          </ul>
        </article>
      </section>

      <section className="page-section">
        <div className="cta-panel">
          <p className="section-kicker">Applications</p>
          <h2>Conveyor end-of-travel detection, hoist and crane load signals, machine door interlocks, pump tank level sensing.</h2>
        </div>
      </section>
    </main>
  );
}

export default LimitSwitches;
