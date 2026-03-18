import SocialIcons from "./SocialIcons";

const Contact = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Contact</p>
            <h1 className="page-title">Connect with Apex Electricals.</h1>
          </div>
          <p className="page-summary">
            For product enquiries, dealer discussions, and technical conversations,
            contact the Apex team directly.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="contact-panel">
          <div>
            <h2>Head Office</h2>
            <div className="contact-stack">
              <p>Apex House E-18 Industrial Area</p>
              <p>Jalandhar - 144004, Punjab, India</p>
            </div>
          </div>
          <div>
            <h2>Reach Us</h2>
            <div className="contact-stack">
              <p><a href="mailto:sales@apexelectricals.com">sales@apexelectricals.com</a></p>
              <p>+91 181 2290463</p>
              <p>+91 9988600162</p>
            </div>
          </div>
          <div>
            <h2>Social</h2>
            <SocialIcons />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
