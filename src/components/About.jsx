const About = () => {
  return (
    <main className="page-shell">

      {/* HERO */}
      <section className="page-hero editorial-page-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">About Apex</p>
            <h1 className="page-title">
              Engineered in India. Trusted through decades of performance.
            </h1>
          </div>

          <p className="page-summary">
            Since 1975, Apex Electricals has engineered switchgear and motor control and safety systems defined by consistent quality, controlled manufacturing, and dependable real-world performance.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="page-section editorial-columns">
        <article>
          <p>
            Apex began in the 1970s as demand for dependable Motor Starters increased across Indian Industry and agriculture. The focus from the beginning was clear: build robust electrical systems that perform reliably under real operating conditions.
          </p>

          <p>
            This approach established Apex as a trusted manufacturer across industrial, agricultural, commercial, and domestic applications. The philosophy remains unchanged: engineer with discipline, manufacture with control, and validate quality at every stage.
          </p>
        </article>

        <article>
          <p>
            Today, Apex manufactures switchgear and motor control systems with practical design, documented validation, and long-term serviceability. Every product is built to perform consistently across varied environments — from industrial installations to field applications.
          </p>

          <p>
            The objective is simple: deliver scale with consistency and reliability that customers can depend on over time.
          </p>
        </article>
      </section>

      {/* VALUES */}
      <section className="page-section value-grid-section">
        <div className="content-container">
          <h2 className="section-title">Why Industrial Buyers Choose Apex</h2>
        </div>
        <div className="value-grid">

          <article>
            <span className="value-index">01</span>
            <h3>Controlled Manufacturing</h3>
            <p>
              Every product is built within defined processes to ensure consistency across production.
            </p>
          </article>

          <article>
            <span className="value-index">02</span>
            <h3>Application Reliability</h3>
            <p>
              Systems are engineered for real-world installation and operating conditions.
            </p>
          </article>

          <article>
            <span className="value-index">03</span>
            <h3>Verified Quality</h3>
            <p>
              Electrical and mechanical performance is validated through structured testing and inspection.
            </p>
          </article>

        </div>
      </section>

      {/* CLOSING LINE */}
      <section className="page-section">
        <div className="content-container">
          <p className="page-closing">
            Built on consistent quality. Trusted through decades of performance.
          </p>
        </div>
      </section>

    </main>
  );
};

export default About;