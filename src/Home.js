import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Hero from "./components/Hero";
import startersImage from "./image/starters.jpg";
import controlSwitchesImage from "./image/controlswitches.jpg";
import submersibleImage from "./image/submersiblepanels.jpg";
import ContactorsImage from "./image/Contactors.jpg";

const trustStats = [
  { label: "Years of Experience", value: 50, suffix: "+" },
  { label: "Installations", value: 20000, suffix: "+" },
  { label: "Industrial Clients", value: 1200, suffix: "+" },
  { label: "Certifications", value: 12, suffix: "" },
];

const productHighlights = [
  {
    id: "Starters",
    title: "Motor Starters",
    description: "DOL, Star-Delta, and Forward-Reverse (aka Reversing) starters for low-voltage motor control.",
    image: startersImage,
  },
  {
    id: "ControlSwitches",
    title: "L.T. Control Switches",
    description: "Low-voltage Control Switches for panel and machine circuits.",
    image: controlSwitchesImage,
  },
  {
    id: "SubmersiblePanels",
    title: "Submersible Panels",
    description: "Submersible Pump Panels with integrated control and protection.",
    image: submersibleImage,
  },
  {
    id: "Contactors",
    title: "Air Break Contactors",
    description: "Air-break Contactors for frequent switching duty.",
    image: ContactorsImage,
  },
];

const capabilities = [
  {
    title: "Design & Engineering",
    text: "Application-focused design for industrial operating conditions.",
    icon: "01",
  },
  {
    title: "Precision Manufacturing",
    text: "Controlled processes for repeatable quality and consistent output.",
    icon: "02",
  },
  {
    title: "Quality Validation",
    text: "Routine validation for performance, protection, and service life.",
    icon: "03",
  },
  {
    title: "Technical Support",
    text: "Technical guidance for selection, commissioning, and maintenance.",
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
      <Hero />

      <section className="section-shell reveal">
        <div className="section-head section-head-wide">
          <p className="section-kicker">Control Switches</p>
          <h2>Control Switch Product Range</h2>
        </div>
        <div className="switch-keywords-grid">
          <h2>ON-OFF Switches</h2>
          <h2>Forward-Reverse Switches</h2>
          <h2>Changeover Switches</h2>
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="section-head section-head-wide">
          <h2>About Apex Electricals</h2>
          <p className="section-intro">
            Apex Electricals has over 45 years of experience in manufacturing
            low-voltage control switches for industrial applications. Our products
            include ON-OFF switches, Forward-Reverse switches, and Changeover switches
            designed for durability, safety, and precision.
          </p>
          <p className="section-intro">
            Explore our <Link href="/Product/ControlSwitches">ON-OFF Control Switch range</Link>,
            <Link href="/Product/Starters/ReverseForwardStarters"> Forward-Reverse Switch solutions</Link>, and
            <Link href="/Product/ControlSwitches"> Changeover Switch configurations</Link> for industrial panel applications.
          </p>
        </div>
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
          <h2>A focused portfolio for industrial control and protection.</h2>
        </div>
        <div className="premium-grid products-grid">
          {productHighlights.map((item) => (
            <Link href={`/Product/${item.id}`} className="premium-card" key={item.id}>
              <img
                src={item.image.src || item.image}
                alt={`${item.title} for industrial electrical control applications`}
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
            <h2>Engineered for critical duty. Specified with clarity.</h2>
            <p className="section-intro">
              Apex combines disciplined design, controlled manufacturing, and
              technical support for real installations.
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
          <h2>Used across Industry, agriculture, commercial, domestic, and water-management environments.</h2>
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

      </div>
  );
};

export default Home;
