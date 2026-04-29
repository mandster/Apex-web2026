import control32 from "../image/controlswitch32.jpg";
import control63 from "../image/rf63.jpg";
import Link from "next/link";

const ControlSwitches = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">L.T. Control Switches</p>
            <h1 className="page-title">
              Rotary control switching for dependable low-voltage panel duty.
            </h1>
          </div>
          <p className="page-summary">
            Apex L.T. Control Switches are built for reliable circuit control in
            industrial panels and low-voltage systems, with a catalogue range up
            to 63 Amps.
          </p>
        </div>
      </section>

      <section className="page-section product-story-grid">
        <div className="story-copy">
          <p>
            Apex control switches are designed for repeated switching duty in
            motor-control and distribution applications where operational
            simplicity, dependable contact performance, and long service life are
            essential.
          </p>

          <p>
            While the broader catalogue includes multiple switching formats, your
            current manufacturing focus can be presented clearly through the three
            core types below.
          </p>

          <ul className="editorial-list">
            <li>ON-OFF Control Switches</li>
            <li>Forward-Reverse Switches</li>
            <li>Changeover Switches</li>
          </ul>

          <p>
            These switches are especially suited to industrial control panels,
            machine interfaces, utility switching points, and low-voltage motor
            applications where positive operator control matters.
          </p>
        </div>

        <div className="variant-gallery">
          <article className="variant-card-editorial">
            <img
              src={control32.src || control32}
              alt="32A ON-OFF industrial control switch for electrical panel"
              loading="lazy"
              className="variant-image"
            />
            <div>
              <h3>32 A</h3>
              <p>
                A versatile rating for standard panel-building and equipment-control
                applications where compactness and reliable switching performance
                are both important.
              </p>
            </div>
          </article>

          <article className="variant-card-editorial">
            <img
              src={control63.src || control63}
              alt="63A changeover and forward-reverse control switch for industrial use"
              loading="lazy"
              className="variant-image"
            />
            <div>
              <h3>63 A</h3>
              <p>
                Built for heavier-duty low-voltage switching requirements, offering
                higher current handling for more demanding industrial installations.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Where They Fit</h2>
          <div className="application-grid">
            <p>Motor Control Panels</p>
            <p>Machine Tool Circuits</p>
            <p>Utility Changeover Duties</p>
            <p>Industrial Distribution Boards</p>
            <p>Operator Control Stations</p>
          </div>

          <h3 className="section-title">Explore Related Products</h3>
          <p>
            Need complementary panel hardware for complete low-voltage control architecture?
            Explore our <Link href="/Product/Starters/ReverseForwardStarters"> Forward-Reverse Switch Starter solutions</Link>,
            <Link href="/Product/Contactors"> industrial contactors</Link>, and
            <Link href="/Product/PanelAccessories"> panel accessories</Link> to build a reliable end-to-end system.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ControlSwitches;