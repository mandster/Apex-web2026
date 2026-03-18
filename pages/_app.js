import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/index.css";
import "../src/styles.css";
import "../src/App.css";
import "../src/components/Navbar.css";
import "../src/components/Contact.css";
import "../src/components/Footer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="site-shell">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
