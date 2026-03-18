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
      description: "DOL, star-delta, and forward-reverse starters for low-voltage motor control.",
    },
    {
      name: "L.T. Control Switches",
      image: controlSwitchesImage,
      route: "/Product/ControlSwitches",
      description: "Low-voltage control switching for industrial panels and equipment.",
    },
    {
      name: "Submersible Panels",
      image: submersibleImage,
      route: "/Product/SubmersiblePanels",
      description: "Submersible pump panels with integrated control and protection.",
    },
    {
      name: "Air Break Contactors",
      image: contactorsImage,
      route: "/Product/Contactors",
      description: "Air-break contactors for frequent switching duty in motor and power circuits.",
    },
    {
      name: "Plug Sockets",
      image: plugSocketsImage,
      route: "/Product/PlugSockets",
      description: "Industrial-grade connectivity for heavy-duty applications.",
    },
    {
      name: "Limit Switches",
      image: limitSwitchImage,
      route: "/Product/LimitSwitches",
      description: "Position-detection components for automation systems.",
    },
    {
      name: "Panel Accessories",
      image: accessoriesImage,
      route: "/Product/PanelAccessories",
      description: "Accessory components for complete panel assemblies.",
    },
  ];

  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Products</p>
            <h1 className="page-title">A structured portfolio for low-voltage control systems.</h1>
          </div>
          <p className="page-summary">
            Apex products cover motor control, switching, pump panels, and
            panel accessories for industrial, infrastructure, and commercial use.
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