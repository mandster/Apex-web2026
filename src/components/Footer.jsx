import Link from "next/link";
import ContactCard from "./ContactCard";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer>
      
      {/* MAIN GRID */}
      <div className="footer-grid">
        
        {/* LEFT — BRAND */}
        <div className="footer-brand">
          <p className="footer-label">
            Apex Electricals
          </p>

          <h2>
            Industrial electrical control, engineered for performance.
          </h2>

          <p>
            Switchgear, Motor safety and control, Contactors, panels, and supporting electrical equipment for industrial applications.
          </p>
        </div>

        {/* MIDDLE — LINKS */}
        <div className="footer-explore">
          <div>
            <p className="footer-section-title">
              Explore
            </p>

            <div className="footer-links">
              <Link href="/Products">All Products</Link>
              <Link href="/Product/Starters">Motor Starters</Link>
              <Link href="/Product/ControlSwitches">L.T. Control Switches</Link>
              <Link href="/Product/SubmersiblePanels">Submersible Panels</Link>
              <Link href="/About">About</Link>
              <Link href="/Contact">Contact</Link>
            </div>
          </div>
        </div>

        {/* RIGHT — CONTACT */}
        <div className="footer-contact">
          <div>
            <p className="footer-section-title">
              Contact
            </p>
            <ContactCard />
          </div>

          <div>
            <p className="footer-section-title">
              Social
            </p>
            <div className="footer-social">
              <SocialIcons compact />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 Apex Electricals
      </div>
    </footer>
  );
};

export default Footer;