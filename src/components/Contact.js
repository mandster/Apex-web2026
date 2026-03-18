import SocialIcons from "./SocialIcons";

const Contact = () => {
  return (
    <main className="page-shell contact-page">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Contact</p>
            <h1 className="page-title">Speak with Apex engineering and sales.</h1>
          </div>
          <p className="page-summary">
            For product selection, dealership enquiries, and technical support,
            contact the Apex team directly.
          </p>
        </div>
      </section>
      <section className="page-section contact-page-section">
        <div className="contact-layout">
          <div className="contact-info-column">
            <div className="contact-group">
              <h2 className="contact-group-title">Head Office</h2>
              <div className="contact-stack">
                <p>Apex House E-18 Industrial Area</p>
                <p>Jalandhar - 144004, Punjab, India</p>
              </div>
            </div>

            <div className="contact-group">
              <h2 className="contact-group-title">Contact Info</h2>
              <div className="contact-stack">
                <p><a href="mailto:sales@apexelectricals.com">sales@apexelectricals.com</a></p>
                <p><a href="tel:+911812290463">+91 181 2290463</a></p>
                <p><a href="tel:+919988600162">+91 9988600162</a></p>
              </div>
            </div>

            <div className="contact-group">
              <h2 className="contact-group-title">Social</h2>
              <SocialIcons compact />
            </div>
          </div>

          <div className="contact-card" aria-label="Contact form">
            <h3>Get in touch</h3>
            <p>
              Share your requirement. Our team will respond with suitable
              product and application guidance.
            </p>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="5" />
              </div>
              <button type="submit" className="contact-submit">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
