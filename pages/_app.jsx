import Head from "next/head";
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/index.css";
import "../src/styles.css";
import "../src/App.css";
import "../src/components/Navbar.css";
import "../src/components/Contact.css";
import "../src/components/Footer.css";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const SITE_URL = "https://apexelectricals.com";
const SITE_NAME = "Apex Electricals";
const DEFAULT_IMAGE_PATH = "/logo.png";

const DEFAULT_SEO = {
  title: " Apex Electricals – Industrial Electrical Control and Safety Systems & Switchgear Solutions",
  description:
    "Apex Electricals designs precision control switches, motor starters, and switchgear engineered for industrial reliability, performance, and long service life.",
  keywords:
    "industrial control switches, motor starters, switchgear manufacturer India, electrical control systems",
};

const pageSeoMap = {
  "/": DEFAULT_SEO,

  "/About": {
    title: "Apex Electricals — 45 Years of Control Engineering",
    description:
      "For over four decades, Apex Electricals has built industrial control systems trusted for precision switching, durability, and consistent performance.",
    keywords:
      "industrial electrical manufacturer India, control systems company, switchgear manufacturer legacy",
  },

  "/Products": {
    title: "Apex Electricals — Industrial Control & Switchgear Systems",
    description:
      "Explore Apex’s complete range of control switches, motor starters, contactors, and electrical systems built for industrial and panel applications.",
    keywords:
      "control switches, motor starters, contactors, industrial electrical products India",
  },

  "/Contact": {
    title: "Contact Apex Electricals — Control Systems Support",
    description:
      "Connect with Apex Electricals for product enquiries, technical support, and industrial control system solutions tailored to your application.",
    keywords:
      "contact electrical manufacturer India, control switch enquiry, industrial electrical support",
  },

  "/Careers": {
    title: "Careers at Apex — Build the Future of Control Systems",
    description:
      "Join Apex Electricals and contribute to the engineering of precision industrial control systems across manufacturing, design, and operations.",
    keywords:
      "electrical engineering jobs India, industrial manufacturing careers, switchgear jobs",
  },

  "/Product/Starters": {
    title: "Apex Motor Starters — Reliable Start. Controlled Power.",
    description:
      "Apex motor starters deliver dependable starting, protection, and control with DOL, Star-Delta, and Forward-Reverse configurations.",
    keywords:
      "motor starters India, DOL starter, star delta starter, forward reverse starter industrial",
  },

  "/Product/Starters/DirectOnlineStarters": {
    title: "Apex DOL Starters — Direct, Reliable Motor Control",
    description:
      "Apex Direct Online starters provide robust ON-OFF control with built-in protection for consistent industrial motor performance.",
    keywords:
      "DOL starter manufacturer, direct online starter India, motor control systems",
  },

  "/Product/Starters/StarDeltaStarters": {
    title: "Apex Star-Delta Starters — Reduced Stress. Smooth Start.",
    description:
      "Apex Star-Delta starters minimize inrush current and ensure smooth motor starting for demanding industrial applications.",
    keywords:
      "star delta starter India, reduced current motor starter, industrial motor control",
  },

  "/Product/Starters/ReverseForwardStarters": {
    title: "Apex Forward-Reverse Starters — Precision Direction Control",
    description:
      "Engineered for safe and efficient bidirectional motor operation with consistent performance under industrial load conditions.",
    keywords:
      "forward reverse starter, bidirectional motor control, industrial electrical systems",
  },

  "/Product/ControlSwitches": {
    title: "Apex Control Switches — Precision Switching Under Load",
    description:
      "ON-OFF, Forward-Reverse, and Changeover switches engineered for high durability, repeat performance, and industrial panel integration.",
    keywords:
      "control switches India, changeover switch, forward reverse switch, industrial switching",
  },

  "/Product/Contactors": {
    title: "Apex Contactors — Built for High-Cycle Switching",
    description:
      "Air break contactors designed for reliable operation, long life, and consistent switching in motor control systems.",
    keywords:
      "industrial contactors, air break contactor, electrical switching systems",
  },

  "/Product/SubmersiblePanels": {
    title: "Apex Submersible Panels — Reliable Pump Control Systems",
    description:
      "Durable and efficient submersible pump panels designed for motor protection, automation, and long-term field performance.",
    keywords:
      "submersible pump panel, motor control panel India, pump starter system",
  },

  "/Product/LimitSwitches": {
    title: "Apex Limit Switches — Precision Control at Every Motion",
    description:
      "Rugged limit switches built for reliable make-break control in automation, machinery, and industrial safety circuits.",
    keywords:
      "limit switches industrial, automation switches, machine control switch",
  },

  "/Product/PlugSockets": {
    title: "Apex Plug & Sockets — Secure Industrial Connectivity",
    description:
      "Heavy-duty industrial plug and socket systems engineered for safe, stable, and long-lasting electrical connections.",
    keywords:
      "industrial plug sockets, electrical connectors heavy duty, power connectivity",
  },

  "/Product/PanelAccessories": {
    title: "Apex Panel Accessories — Built for Control Systems",
    description:
      "Reliable panel components designed to support installation, wiring, and operation of industrial electrical systems.",
    keywords:
      "panel accessories electrical, control panel components, industrial panel parts",
  },

  "/Product/OtherProducts": {
    title: "Apex Electricals — Extended Control System Components",
    description:
      "Explore additional Apex components supporting industrial switching, panel building, and system integration.",
    keywords:
      "industrial electrical components, control system accessories",
  },

  "/ProductDetail/DolClassic": {
    title: "Apex DOL Classic — Proven Motor Starting Reliability",
    description:
      "A trusted DOL starter built for consistent motor performance, overload protection, and industrial-grade durability.",
    keywords:
      "DOL classic starter, motor starter industrial, direct online starter",
  },

  "/ProductDetail/MSD": {
    title: "Apex Manual Star-Delta — Controlled Transition Starting",
    description:
      "Manual Star-Delta starter designed for reduced current starting and reliable operation in industrial environments.",
    keywords:
      "manual star delta starter, industrial motor starter India",
  },
};

function normalizePath(asPath = "/") {
  const cleanPath = asPath.split("?")[0].split("#")[0];
  return cleanPath || "/";
}

function getPageSeo(path) {
  if (pageSeoMap[path]) return pageSeoMap[path];

  if (path.startsWith("/ProductDetail/")) {
    return {
      title: "Apex Product Details — Industrial Control Components",
      description:
        "View detailed Apex product information for industrial control switches, motor starters, and electrical control systems.",
      keywords:
        "Apex product details, industrial control components, motor starters, control switches",
    };
  }

  if (path.startsWith("/Product/Starters")) {
    return pageSeoMap["/Product/Starters"];
  }

  if (path.startsWith("/Product/")) {
    return {
      title: "Apex Electricals — Industrial Control Components",
      description:
        "Explore Apex industrial control components built for switching, motor control, panel integration, and reliable field performance.",
      keywords:
        "industrial control components, switchgear products, electrical panel components",
    };
  }

  return DEFAULT_SEO;
}

function getProductNameFromPath(path) {
  return (
    path
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/([a-z])([A-Z])/g, "$1 $2")
      ?.replace(/-/g, " ")
      ?.trim() || "Apex Industrial Electrical Product"
  );
}

function getProductSchema(path, canonicalUrl, imageUrl, seo) {
  const isProductPage =
    path.startsWith("/Product/") || path.startsWith("/ProductDetail/");

  if (!isProductPage) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: getProductNameFromPath(path),
    description: seo.description,
    image: imageUrl,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    category: "Industrial Electrical Control Systems",
    url: canonicalUrl,
  };
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const normalizedPath = normalizePath(router?.asPath);
  const pageSeo = getPageSeo(normalizedPath);

  const canonicalUrl = `${SITE_URL}${
    normalizedPath === "/" ? "" : normalizedPath
  }`;

  const imageUrl = `${SITE_URL}${DEFAULT_IMAGE_PATH}`;
  const isHomePage = normalizedPath === "/";
  const shouldNoIndex = normalizedPath === "/404";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: imageUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "sales@apexelectricals.com",
      availableLanguage: ["en"],
    },
  };

  const productSchema = getProductSchema(
    normalizedPath,
    canonicalUrl,
    imageUrl,
    pageSeo
  );

  return (
    <div className="site-shell">
      <Head>
        <title>{pageSeo.title}</title>

        <meta name="description" content={pageSeo.description} />
        <meta name="keywords" content={pageSeo.keywords} />
        <meta
          name="robots"
          content={shouldNoIndex ? "noindex, nofollow" : "index, follow"}
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:type"
          content={normalizedPath.startsWith("/Product") ? "product" : "website"}
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageSeo.title} />
        <meta property="og:description" content={pageSeo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Apex Electricals logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageSeo.title} />
        <meta name="twitter:description" content={pageSeo.description} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apex_logo_new1.png" />

        {isHomePage && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
        )}

        {productSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema),
            }}
          />
        )}
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;