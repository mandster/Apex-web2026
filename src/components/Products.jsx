import React from "react";
import Link from "next/link";
import startersImage from "../image/starters.jpg";
import controlSwitchesImage from "../image/controlswitches.jpg";
import submersibleImage from "../image/submersiblepanels.jpg";
import ContactorsImage from "../image/Contactors.jpg";
import plugSocketsImage from "../image/plugsockets.jpg";
import limitSwitchImage from "../image/panel accessories mcb.jpg";
import accessoriesImage from "../image/accessories.jpg";

const Products = () => {
  const products = [
    {
      name: "Motor Starters",
      image: startersImage,
      route: "/Product/Starters",
      description:
        "Apex motor starters include DOL, Star-Delta, and Forward-Reverse variants for dependable low-voltage motor starting, protection, and control.",
    },
    {
      name: "L.T. Control Switches",
      image: controlSwitchesImage,
      route: "/Product/ControlSwitches",
      description:
        "Rotary low-voltage control switches up to 63 Amps for On-Off, Forward-Reverse, and Changeover duties.",
    },
    {
      name: "Submersible Panels",
      image: submersibleImage,
      route: "/Product/SubmersiblePanels",
      description:
        "Pump-control panels designed for dependable submersible motor starting and protection across site conditions.",
    },
    {
      name: "Air Break Contactors",
      image: ContactorsImage,
      route: "/Product/Contactors",
      description:
        "Classic, Compact, and modular Commander contactor solutions for repeated switching duty in panels and motor-control systems.",
    },
    {
      name: "Plug Sockets",
      image: plugSocketsImage,
      route: "/Product/PlugSockets",
      description:
        "Industrial aluminum-body plugs and sockets for durable site connectivity in 20 A and 30 A configurations.",
    },
    {
      name: "Limit Switches",
      image: limitSwitchImage,
      route: "/Product/LimitSwitches",
      description:
        "Rugged aluminum-housing limit switches in snap-action and normal-action types for automation and movement-control use.",
    },
    {
      name: "Panel Accessories",
      image: accessoriesImage,
      route: "/Product/PanelAccessories",
      description:
        "Supporting panel components and installation accessories for integrated low-voltage control systems.",
    },
  ];

  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Products</p>
            <h1 className="page-title">
              A legacy product portfolio built for control, protection, and field reliability.
            </h1>
          </div>
          <p className="page-summary">
            Established in 1975, Apex Electricals manufactures low-voltage
            products for motor control, switching, pump operation, and panel
            applications, with a long-standing focus on dependable industrial use.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="catalog-grid">
          {products.map((product) => (
            <Link href={product.route} key={product.name} className="catalog-card">
              <img
                src={product.image.src || product.image}
                alt={`${product.name} for industrial electrical panel applications`}
                loading="lazy"
                className="catalog-image"
              />
              <div className="catalog-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="content-container">
          <h2 className="section-title">Industrial Keyword Focus</h2>
          <p>
            Apex product pages are optimized for industrial buyers searching for
            ON-OFF Control Switches, Forward-Reverse Switches, Changeover
            Switches, and Industrial Switch Manufacturers in India.
            Start with <Link href="/Product/ControlSwitches">Control Switches</Link>, then
            explore <Link href="/Product/Starters/ReverseForwardStarters">Forward-Reverse Switch Starters</Link>
            and <Link href="/Product/Starters/DirectOnlineStarters">ON-OFF Starter solutions</Link>
            based on your application.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Products;