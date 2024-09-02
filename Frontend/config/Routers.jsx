import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "../components/navbar/NavigationBar";
import Footer from "../components/footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import WhatsAppLink from "../components/WhatsappLink/WhatsappLink";
import ScrollToTop from './ScrollToTop';

const Routers = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavigationBar />
      <AnimatedRoutes /> {/* This now handles the route transitions */}
      <WhatsAppLink/>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
