import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from "../image/apex_logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isStartersOpen, setIsStartersOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsStartersOpen(false);
  }, [router.asPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleProducts = () => {
    setIsProductsOpen((prev) => !prev);
  };

  const toggleStarters = () => {
    setIsStartersOpen((prev) => !prev);
  };

  const isHome = router.pathname === "/";

  return (
    <nav className={`premium-navbar ${isHome ? "home-route" : "inner-route"} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="premium-nav-inner">
        <Link href="/" className="brand-link" aria-label="Apex Electricals Home">
          <img src={logo.src || logo} alt="Apex Electricals" className="main-logo" />
          <span className="brand-name">Apex Electricals</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel ${isMobileMenuOpen ? 'open' : ''}`}
        >
          <ul className="nav-list">
            <li className="nav-item-root">
              <Link className="nav-link" href="/">Home</Link>
            </li>

            <li className="nav-item-root">
              <Link className="nav-link" href="/About">About</Link>
            </li>

            <li className={`nav-item-root has-dropdown ${isProductsOpen ? 'open' : ''}`}>
              <div className="nav-link-row">
                <Link className="nav-link" href="/Products">Products</Link>
                <button
                  type="button"
                  className="submenu-toggle"
                  onClick={toggleProducts}
                  aria-expanded={isProductsOpen}
                  aria-label="Toggle products menu"
                >
                  +
                </button>
              </div>

              <div className="dropdown-menu mega-menu-desktop" role="menu" aria-label="Products menu">
                <ul className="mega-list">
                  <li className="mega-item has-flyout">
                    <Link className="mega-link-main" href="/Product/Starters">Motor Starters</Link>
                    <div className="starter-flyout" role="menu" aria-label="Motor Starter Types">
                      <p className="mega-title">Starter Types</p>
                      <Link className="mega-link" href="/Product/Starters/DirectOnlineStarters">Direct Online Starters</Link>
                      <Link className="mega-link" href="/Product/Starters/StarDeltaStarters">Star Delta Starters</Link>
                      <Link className="mega-link" href="/Product/Starters/ReverseForwardStarters">Reverse Forward Starters</Link>
                    </div>
                  </li>
                  <li className="mega-item"><Link className="mega-link-main" href="/Product/ControlSwitches">L.T. Control Switches</Link></li>
                  <li className="mega-item"><Link className="mega-link-main" href="/Product/Contactors">Air Break Contactors</Link></li>
                  <li className="mega-item"><Link className="mega-link-main" href="/Product/SubmersiblePanels">Submersible Panels</Link></li>
                  <li className="mega-item"><Link className="mega-link-main" href="/Product/LimitSwitches">Limit Switches</Link></li>
                  <li className="mega-item"><Link className="mega-link-main" href="/Product/PlugSockets">Plug Sockets</Link></li>
                  <li className="mega-item"><Link className="mega-link-main" href="/Product/PanelAccessories">Panel Accessories</Link></li>
                </ul>
              </div>

              <ul className="dropdown-menu level-1 mobile-product-tree" role="menu">
                <li className={`dropdown-item has-dropdown ${isStartersOpen ? 'open' : ''}`}>
                  <div className="dropdown-link-row">
                    <Link className="dropdown-link" href="/Product/Starters">Motor Starters</Link>
                    <button
                      type="button"
                      className="submenu-toggle"
                      onClick={toggleStarters}
                      aria-expanded={isStartersOpen}
                      aria-label="Toggle motor starters menu"
                    >
                      +
                    </button>
                  </div>

                  <ul className="dropdown-menu level-2" role="menu">
                    <li><Link className="dropdown-link" href="/Product/Starters/DirectOnlineStarters">Direct Online Starters</Link></li>
                    <li><Link className="dropdown-link" href="/Product/Starters/StarDeltaStarters">Star Delta Starters</Link></li>
                    <li><Link className="dropdown-link" href="/Product/Starters/ReverseForwardStarters">Reverse Forward Starters</Link></li>
                  </ul>
                </li>

                <li><Link className="dropdown-link" href="/Product/ControlSwitches">L.T. Control Switches</Link></li>
                <li><Link className="dropdown-link" href="/Product/Contactors">Air Break Contactors</Link></li>
                <li><Link className="dropdown-link" href="/Product/SubmersiblePanels">Submersible Panels</Link></li>
                <li><Link className="dropdown-link" href="/Product/LimitSwitches">Limit Switches</Link></li>
                <li><Link className="dropdown-link" href="/Product/PlugSockets">Plug Sockets</Link></li>
                <li><Link className="dropdown-link" href="/Product/PanelAccessories">Panel Accessories</Link></li>
              </ul>
            </li>

            <li className="nav-item-root">
              <Link className="nav-link" href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
