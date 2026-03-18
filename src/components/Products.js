import React from "react";
import Link from "next/link";
import startersImage from "../image/starters.jpg";
import controlSwitchesImage from "../image/controlswitches.jpg";
import submersibleImage from "../image/submersiblepanels.jpg";
import contactorsImage from "../image/contactors.jpg";
import plugSocketsImage from "../image/plugsockets.jpg";
import limitSwitchImage from "../image/panel accessories mcb.jpg";
import accessoriesImage from "../image/accessories.jpg";

const Products = () => {
  const products = [
    {
      name: "Motor Starters",
      image: startersImage,
      route: "/Product/Starters",
      description: "Direct online, star-delta, and reverse-forward configurations built for dependable motor control.",
    },
    {
      name: "L.T. Control Switches",
      image: controlSwitchesImage,
      route: "/Product/ControlSwitches",
      description: "Heavy-duty low-tension switching solutions for industrial panels and equipment.",
    },
    {
      name: "Submersible Panels",
      image: submersibleImage,
      route: "/Product/SubmersiblePanels",
      description: "Pump protection and control panels engineered for field reliability and safe operation.",
    },
    {
      name: "Air Break Contactors",
      image: contactorsImage,
      route: "/Product/Contactors",
      description: "Core switching components designed for repeat cycles, rugged duty, and long service life.",
    },
    {
      name: "Plug Sockets",
      image: plugSocketsImage,
      route: "/Product/PlugSockets",
      description: "Industrial-grade connectivity hardware for heavy-duty electrical applications.",
    },
    {
      name: "Limit Switches",
      image: limitSwitchImage,
      route: "/Product/LimitSwitches",
      description: "Reliable position-detection and control components for automation and machinery systems.",
    },
    {
      name: "Panel Accessories",
      image: accessoriesImage,
      route: "/Product/PanelAccessories",
      description: "Accessory components that complete durable, serviceable, and efficient panel assemblies.",
    },
  ];

  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Products</p>
            <h1 className="page-title">A structured portfolio for modern electrical control.</h1>
          </div>
          <p className="page-summary">
            Apex products are organized for clarity: essential switchgear,
            control equipment, pumping panels, and accessory systems that serve
            industrial, infrastructure, and commercial environments.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="catalog-grid">
          {products.map((product) => (
            <Link href={product.route} key={product.name} className="catalog-card">
              <img src={product.image.src || product.image} alt={product.name} loading="lazy" className="catalog-image" />
              <div className="catalog-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;