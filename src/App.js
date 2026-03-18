import "./styles.css"
import "./App.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NoPage from "./NoPage";
import Careers from "./components/Careers";
import Starters from "./Products/Starters";
import ControlSwitches from "./Products/ControlSwitches";
// import LimitSwitches from "./Products/LimitSwitches";
import SubmersiblePanels from "./Products/SubmersiblePanels";
import Contactors from "./Products/Contactors";
// import PlugsSockets from "./Products/PlugsSockets";
// import PanelAccessories from "./Products/PanelAccessories";
import DirectOnlineStarters from "./Products/DirectOnlineStarters";
import StarDeltaStarters from "./Products/StarDeltaStarters";
import ReverseForwardStarters from "./Products/ReverseForwardStarters";
import  { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from "./components/ProductDetail";
import OtherProducts from "./Products/OtherProducts";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
  })
}

export default function App() {
  return ( 
   
    <BrowserRouter>
    <div className="site-shell"> 

    < Navbar />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Product/Starters" element={<Starters />} />
        <Route path="/Product/ControlSwitches" element={< ControlSwitches />} />
        <Route path="/Product/SubmersiblePanels" element={< SubmersiblePanels />} />
        <Route path="/Product/PanelAccessories" element={<OtherProducts />} />
        <Route path="/Product/LimitSwitches" element={<OtherProducts />} />
        <Route path="/Product/PlugSockets" element={<OtherProducts />} />
        <Route path="/Product/Contactors" element={<Contactors />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Product/OtherProducts" element={<OtherProducts />} />
        <Route path="/Product/Starters/DirectOnlineStarters" element={<DirectOnlineStarters />} />
        <Route path="/Product/Starters/StarDeltaStarters" element={<StarDeltaStarters />} />
        <Route path="/Product/Starters/ReverseForwardStarters" element={<ReverseForwardStarters />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    
  );
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
