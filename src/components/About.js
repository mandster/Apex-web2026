const About = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">About Apex</p>
            <h1 className="page-title">Manufactured in India. Trusted in industrial markets.</h1>
          </div>
          <p className="page-summary">
            Apex Electricals is built on four principles: reliable products,
            controlled manufacturing, validated quality, and responsive
            technical support.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Apex began in the 1970s when demand for dependable motor starters
            increased across Indian industry. The company focused on robust
            products built for real operating conditions.
          </p>
          <p>
            This approach established Apex as a trusted switchgear manufacturer
            across industrial sectors. The operating model remains direct:
            engineer with discipline, manufacture with control, and verify quality
            at each stage.
          </p>
        </article>
        <article>
          <p>
            Today, Apex manufactures motor-control and electrical equipment with
            practical design, documented validation, and field serviceability.
            The objective is clear: deliver domestic scale with global standards
            in product consistency and technical communication.
          </p>
        </article>
      </section>

      <section className="page-section value-grid-section">
        <div className="value-grid">
          <article>
            <span className="value-index">01</span>
            <h3>Quality Control</h3>
            <p>Every product is verified against defined electrical and mechanical checks.</p>
          </article>
          <article>
            <span className="value-index">02</span>
            <h3>Application Fit</h3>
            <p>Products are engineered for installation realities, not only catalog claims.</p>
          </article>
          <article>
            <span className="value-index">03</span>
            <h3>Continuous Improvement</h3>
            <p>Design, process, and documentation are improved through ongoing review.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
