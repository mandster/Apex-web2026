
import Link from "next/link";

const Careers = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Careers</p>
            <h1 className="page-title">Build industrial systems that perform at scale.</h1>
          </div>
          <p className="page-summary">
            We welcome professionals focused on engineering rigor, manufacturing
            discipline, and customer performance.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="cta-panel">
          <div>
            <p className="section-kicker">Open Enquiries</p>
            <h2>Share your profile and technical experience with our team.</h2>
          </div>
          <a className="premium-btn primary-btn" href="mailto:sales@apexelectricals.com?subject=Career%20Enquiry">
            Send Enquiry
          </a>
        </div>
      </section>

      <section className="page-section editorial-columns">
        <article>
          <h2 className="section-title">Work in Industrial Electrical Manufacturing</h2>
          <p>
            Apex builds industrial electrical switches, ON-OFF and Changeover
            control products, motor starters, and contactor systems for real
            operating environments. Careers here involve practical engineering,
            process discipline, and measurable quality outcomes.
          </p>
        </article>
        <article>
          <h3 className="section-title">Product Teams You Can Join</h3>
          <p>
            You may work across <Link href="/Product/ControlSwitches">Control Switches</Link>,
            <Link href="/Product/Starters"> Motor Starter manufacturing</Link>,
            <Link href="/Product/Contactors"> Contactor production</Link>, quality systems,
            and technical support functions aligned with industrial customer use cases.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Careers
