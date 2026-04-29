import React from "react";
import limitswitch from "../image/panel accessories mcb.jpg";
import plugsockets from "../image/plugsockets.jpg";
import accessories from "../image/accessories.jpg";
import pushbutton from "../image/pushbutton.jpg";
import Link from "next/link";

const OtherProducts = () => {
  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Other Products</p>
            <h1 className="page-title">
              Essential control and connectivity products for complete installations.
            </h1>
          </div>
          <p className="page-summary">
            Beyond starters and switching devices, Apex also supports industrial
            installations with rugged plug-and-socket systems, limit switches,
            and supporting panel products.
          </p>
        </div>
      </section>

      <section className="page-section catalog-grid">
        <article className="catalog-card static-card">
          <img
            src={limitswitch.src || limitswitch}
            alt="Industrial limit switch for machine position control"
            loading="lazy"
            className="catalog-image"
          />
          <div className="catalog-body">
            <h3>Limit Switches</h3>
            <p>
              Electro-mechanical limit switches in sturdy aluminum housing for
              reliable make-or-break action in automation and movement-control
              applications. Offered in snap-action and normal-action versions.
            </p>
          </div>
        </article>

        <article className="catalog-card static-card">
          <img
            src={plugsockets.src || plugsockets}
            alt="Industrial plug and socket set for panel and machine power connections"
            loading="lazy"
            className="catalog-image"
          />
          <div className="catalog-body">
            <h3>Industrial Plugs & Sockets</h3>
            <p>
              Aluminum-body, powder-coated plug-and-socket units designed so live
              parts are not easily accessible. Offered in 20 A double-pole and
              20 A / 30 A triple-pole formats.
            </p>
          </div>
        </article>

        <article className="catalog-card static-card">
          <img
            src={pushbutton.src || pushbutton}
            alt="Industrial push button station for operator control panel"
            loading="lazy"
            className="catalog-image"
          />
          <div className="catalog-body">
            <h3>Push Button Stations</h3>
            <p>
              Operator-facing control devices that complement starter and panel
              assemblies in start, stop, and command applications.
            </p>
          </div>
        </article>

        <article className="catalog-card static-card">
          <img
            src={accessories.src || accessories}
            alt="Electrical panel accessories for industrial control cabinet assembly"
            loading="lazy"
            className="catalog-image"
          />
          <div className="catalog-body">
            <h3>Panel Accessories</h3>
            <p>
              Supporting products for panel assembly, wiring, interface control,
              and final field installation.
            </p>
          </div>
        </article>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Build a Complete Control System</h2>
          <p>
            These supporting products are typically used with
            <Link href="/Product/ControlSwitches"> control switches</Link>,
            <Link href="/Product/Contactors"> contactors</Link>, and
            <Link href="/Product/Starters"> motor starters</Link>
            to create complete industrial electrical control installations.
          </p>
        </div>
      </section>
    </main>
  );
};

export default OtherProducts;