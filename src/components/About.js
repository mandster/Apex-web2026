const About = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">About Apex</p>
            <h1 className="page-title">Built in India. Positioned for a wider industrial world.</h1>
          </div>
          <p className="page-summary">
            Apex Electricals has grown by focusing on essential things that last:
            reliable products, disciplined checking, service-minded support, and
            a practical understanding of how electrical equipment is used in the field.
          </p>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <p>
            Our story began in the 1970s, when demand for dependable motor
            starters in India was rising quickly. Apex responded with products
            that were accessible, robust, and built for real operating conditions.
          </p>
          <p>
            Over time, that approach established Apex as a recognized switchgear
            name with reach across sectors and regions. The business evolved, but
            the mindset remained direct: engineer well, manufacture carefully,
            and keep quality visible at every stage.
          </p>
        </article>
        <article>
          <p>
            Today, Apex continues to manufacture motor control and electrical
            equipment with a balance of practical design, validation, and long-term
            serviceability. The ambition is not only to serve the domestic market,
            but to present the brand with the clarity and consistency expected of a global supplier.
          </p>
        </article>
      </section>

      <section className="page-section value-grid-section">
        <div className="value-grid">
          <article>
            <span className="value-index">01</span>
            <h3>Quality Discipline</h3>
            <p>Every product is checked with a mindset shaped by decades of manufacturing experience.</p>
          </article>
          <article>
            <span className="value-index">02</span>
            <h3>Industrial Relevance</h3>
            <p>Products are designed for real installations, not only for catalog specification sheets.</p>
          </article>
          <article>
            <span className="value-index">03</span>
            <h3>Progressive Thinking</h3>
            <p>New products, better presentation, and wider market readiness are part of ongoing work.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
