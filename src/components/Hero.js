import React, { useEffect, useState } from "react";
import Link from "next/link";
import startersImage from "../image/starters.jpg";
import controlSwitchesImage from "../image/controlswitches.jpg";
import submersibleImage from "../image/submersiblepanels.jpg";
import ContactorsImage from "../image/Contactors.jpg";

const heroSlides = [
  {
    image: startersImage,
    title: "Motor Starters",
    subtitle: "DOL, Star-Delta, and Forward-Reverse (aka Reversing) starter systems",
    alt: "Industrial motor starters including DOL and Star-Delta systems",
  },
  {
    image: controlSwitchesImage,
    title: "L.T. Control Switches",
    subtitle: "Low-voltage control switching for industrial panels",
    alt: "ON-OFF and Changeover control switches for industrial panels",
  },
  {
    image: submersibleImage,
    title: "Submersible Panels",
    subtitle: "Integrated pump control and electrical protection",
    alt: "Submersible pump control panel with motor protection",
  },
  {
    image: ContactorsImage,
    title: "Air Break Contactors",
    subtitle: "Frequent-duty switching for motor and power circuits",
    alt: "Industrial air break contactor for motor and power circuits",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-premium hero-atmosphere">
      <div className="hero-light hero-light-main" aria-hidden="true" />
      <div className="hero-light hero-light-edge" aria-hidden="true" />
      <div className="atmo-grain" aria-hidden="true" />

      <div className="hero-shell editorial-hero">
        <div className="hero-copy-block reveal reveal-delay-1">
          <h1>Built for Power. Designed for Control.</h1>
        </div>

        <div className="hero-side-block reveal reveal-delay-2">
          <p className="hero-subtitle">
            Since 1975, Apex has engineered Motor Control and Safety Systems for consistent, Real-World performance across Industry, Agriculture, and Domestic applications.
          </p>

          <div className="hero-actions reveal reveal-delay-3">
            <Link href="/Products" className="hero-cta hero-cta-primary">
              View Products
            </Link>

            <Link href="/About" className="hero-cta hero-cta-secondary">
              About Apex
            </Link>
          </div>

          <div className="hero-slider-wrap reveal reveal-delay-4">
            <div className="hero-slider">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
                >
                  <img
                    src={slide.image.src || slide.image}
                    alt={slide.alt}
                    className="hero-slide-image"
                  />
                  <div className="hero-slide-overlay">
                    <p className="hero-slide-title">{slide.title}</p>
                    <p className="hero-slide-subtitle">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-progress" role="tablist" aria-label="Hero product slides">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.title}`}
                  className={`hero-progress-line ${
                    index === activeSlide ? "is-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}