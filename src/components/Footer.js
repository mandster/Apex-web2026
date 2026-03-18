//import dnvLogo from "../image/dnv_logo.png";
import Link from "next/link";
import ContactCard from "./ContactCard";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="quick-links-column footer-brand-block">
          <p className="section-kicker">Apex Electricals</p>
          <h2>Electrical control products presented with more clarity.</h2>
          <p className="footer-copy">
            Switchgear, motor control, contactors, panels, and supporting electrical equipment for industrial applications.
          </p>
        </div>
        <div className="quick-links-column footer-links-block">
          <h2>Explore</h2>
          <Link className="no-decor" href="/Products">All Products</Link>
          <Link className="no-decor" href="/Product/Starters">Motor Starters</Link>
          <Link className="no-decor" href="/Product/ControlSwitches">L.T. Control Switches</Link>
          <Link className="no-decor" href="/Product/SubmersiblePanels">Submersible Panels</Link>
          <Link className="no-decor" href="/About">About</Link>
          <Link className="no-decor" href="/Contact">Contact</Link>
        </div>
        <div className="follow-us-column footer-contact-block">
          <ContactCard />
        </div>

        <div className="follow-us-column footer-social-block">
          <h2>Visit us on</h2>
          <SocialIcons />

        </div>
      </div>
      <div className="centered-text medium-text footer-bed">
        Copyright @2026 Apex Electricals
      </div>
    </>
  );
};

export default Footer;
