import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import startersImage from "./image/starters.jpg";
import controlSwitchesImage from "./image/controlswitches.jpg";
import submersibleImage from "./image/submersiblepanels.jpg";
import contactorsImage from "./image/contactors.jpg";
import heroImage from "./image/allproducts.jpg";

const trustStats = [
  { label: "Years of Engineering", value: 50, suffix: "+" },
  { label: "Products Delivered", value: 20000, suffix: "+" },
  { label: "Industrial Customers", value: 1200, suffix: "+" },
  { label: "States Served", value: 24, suffix: "" },
];

const productHighlights = [
  {
    id: "Starters",
    title: "Motor Starters",
    description: "Precision switching and motor safety solutions for critical operations.",
    image: startersImage,
  },
  {
    id: "ControlSwitches",
    title: "L.T. Control Switches",
    description: "Heavy-duty control architecture designed for continuous industrial use.",
    image: controlSwitchesImage,
  },
  {
    id: "SubmersiblePanels",
    title: "Submersible Panels",
    description: "Reliable panel systems for water management and pumping control.",
    image: submersibleImage,
  },
  {
    id: "Contactors",
    title: "Air Break Contactors",
    description: "Robust contactor systems for safe and dependable electrical distribution.",
    image: contactorsImage,
  },
];

const capabilities = [
  {
    title: "Design & Engineering",
    text: "Application-focused product engineering aligned to modern industrial standards.",
    icon: "01",
  },
  {
    title: "Precision Manufacturing",
    text: "Tight process controls, consistent quality, and reliable production repeatability.",
    icon: "02",
  },
  {
    title: "Quality Validation",
    text: "Rigorous checks for performance, electrical safety, and long service life.",
    icon: "03",
  },
  {
    title: "Technical Support",
    text: "Consultative support for product selection, deployment, and maintenance.",
    icon: "04",
  },
];

const applications = [
  "Industrial Motor Control",
  "Water Infrastructure",
  "Commercial Buildings",
  "Pump Automation",
  "Panel Integration",
  "Process Plants",
];

const Home = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState(trustStats.map(() => 0));

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) {
      return;
    }

    let started = false;
    const duration = 1300;

    const runCounter = () => {
      if (started) {
        return;
      }

      started = true;
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(trustStats.map((stat) => Math.floor(stat.value * eased)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter();
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );

    statsObserver.observe(node);

    return () => statsObserver.disconnect();
  }, []);

  return (
    <div className="home-premium">
      <section className="hero-premium">
        <div className="hero-content editorial-hero reveal is-visible">
          <div className="hero-copy-block">
            <p className="hero-eyebrow">Apex Electricals</p>
            <h1>Electrical control systems with a quieter kind of confidence.</h1>
          </div>
          <div className="hero-side-block">
            <p className="hero-subtitle">
              Since 1975, Apex has built switchgear and control products for
              engineers who value precision, consistency, and long-term field
              reliability.
            </p>
            <div className="hero-actions">
              <Link href="/Products" className="premium-btn primary-btn">
                View Products
              </Link>
              <Link href="/About" className="premium-btn ghost-btn">
                About Apex
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-media reveal">
        <img src={heroImage.src || heroImage} alt="Apex Electricals product portfolio" loading="eager" />
      </section>

      <section className="trust-bar reveal" ref={statsRef}>
        {trustStats.map((stat, index) => (
          <article className="trust-item" key={stat.label}>
            <p className="trust-value">
              {counts[index].toLocaleString()}
              {stat.suffix}
            </p>
            <p className="trust-label">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section-shell reveal">
        <div className="section-head">
          <p className="section-kicker">Portfolio</p>
          <h2>A focused product range for critical electrical control.</h2>
        </div>
        <div className="premium-grid products-grid">
          {productHighlights.map((item) => (
            <Link href={`/Product/${item.id}`} className="premium-card" key={item.id}>
              <img
                src={item.image.src || item.image}
                alt={item.title}
                loading="lazy"
                className="premium-card-image"
              />
              <div className="premium-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="editorial-split">
          <div className="section-head split-copy">
            <p className="section-kicker">Engineering</p>
            <h2>Designed for serious applications, presented with clarity.</h2>
            <p className="section-intro">
              The flow is simpler, but the message is sharper: dependable
              products, disciplined manufacturing, and support that understands
              real installations.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability-row" key={item.title}>
                <div className="capability-index">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="section-head section-head-wide">
          <p className="section-kicker">Applications</p>
          <h2>Used across industrial, commercial, and water-management environments.</h2>
        </div>
        <div className="premium-grid apps-grid editorial-apps-grid">
          {applications.map((item, index) => (
            <article className="application-pill" key={item}>
              <span className="app-index">0{index + 1}</span>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell reveal cta-shell">
        <div className="cta-panel">
          <p className="section-kicker">Contact</p>
          <h2>For OEMs, panel builders, EPCs, and industrial buyers.</h2>
          <Link href="/Contact" className="premium-btn primary-btn">
            Speak With Apex
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
