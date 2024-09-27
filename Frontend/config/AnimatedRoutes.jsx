import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../screens/Home/Home";
import Service from "../screens/Service/Service";
import AboutUs from "../screens/AboutUs/AboutUs";
import Contact from "../screens/Contact/Contact";
import Portfolio from "../screens/Portfolio/Portfolio";
import Shop from "../screens/Shop/Shop";
import WebsiteDesign from "../screens/GraphicsDesign/GraphicsDesign";
import ShopifyDevelopment from "../screens/DigitalMarketing/DigitalMarketing";
import CustomWebDevelopment from "../screens/Shopify/Shopify";
import MobileAppDevelopment from "../screens/WebDesign/WebDesign";
import SEO from "../screens/SEO/SEO";
import PaidAdvertising from "../screens/ContentCopyWriting/ContentCopyWriting";
import DigitalAnalytics from "../screens/VideoEditing/VideoEditing";
import EmailMarketing from "../screens/SocialMediaMarketing/SocialMediaMarketing ";
import WebDevelopment from "../screens/WebDevelopment/WebDevelopment";
import UiUx from "../screens/UiUx/UiUx";
import VirtualAssistant from "../screens/VirtualAssistant/VirtualAssistant";
import DataScrapping from "../screens/DataScrapping/DataScrapping";
import GraphicsDesign from "../screens/GraphicsDesign/GraphicsDesign";
import DigitalMarketing from "../screens/DigitalMarketing/DigitalMarketing";
import Shopify from "../screens/Shopify/Shopify";
import WebDesign from "../screens/WebDesign/WebDesign";
import ContentCopyWriting from "../screens/ContentCopyWriting/ContentCopyWriting";
import VideoEditing from "../screens/VideoEditing/VideoEditing";
import SocialMediaMarketing from "../screens/SocialMediaMarketing/SocialMediaMarketing ";
import Activity from "../screens/Activity/Activity"

const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
};

const AnimatedRoutes = () => {
  const location = useLocation(); // This should now be within the context of BrowserRouter

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/Service"
          element={
            <motion.div {...pageTransition}>
              <Service />
            </motion.div>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <motion.div {...pageTransition}>
              <AboutUs />
            </motion.div>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <motion.div {...pageTransition}>
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/Shop"
          element={
            <motion.div {...pageTransition}>
              <Shop />
            </motion.div>
          }
        />
        <Route
          path="/Contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/Graphics-design"
          element={
            <motion.div {...pageTransition}>
              <GraphicsDesign />
            </motion.div>
          }
        />
        <Route
          path="/Digital-Marketing"
          element={
            <motion.div {...pageTransition}>
              <DigitalMarketing />
            </motion.div>
          }
        />
        <Route
          path="/Shopify"
          element={
            <motion.div {...pageTransition}>
              <Shopify />
            </motion.div>
          }
        />
        <Route
          path="/Web-Design"
          element={
            <motion.div {...pageTransition}>
              <WebDesign />
            </motion.div>
          }
        />
        <Route
          path="/seo"
          element={
            <motion.div {...pageTransition}>
              <SEO />
            </motion.div>
          }
        />
        <Route
          path="/Content-CopyWriting"
          element={
            <motion.div {...pageTransition}>
              <ContentCopyWriting />
            </motion.div>
          }
        />
        <Route
          path="/Video-Editing"
          element={
            <motion.div {...pageTransition}>
              <VideoEditing />
            </motion.div>
          }
        />
        <Route
          path="/Social-Media-Marketing"
          element={
            <motion.div {...pageTransition}>
              <SocialMediaMarketing />
            </motion.div>
          }
        />
        <Route
          path="/web-development"
          element={
            <motion.div {...pageTransition}>
              <WebDevelopment/>
            </motion.div>
          }
        />
        <Route
          path="/ui-ux-design"
          element={
            <motion.div {...pageTransition}>
              <UiUx/>
            </motion.div>
          }
        />
        <Route
          path="/Virtual-Assistant"
          element={
            <motion.div {...pageTransition}>
              <VirtualAssistant/>
            </motion.div>
          }
        />
        <Route
          path="/Data-Scrapping"
          element={
            <motion.div {...pageTransition}>
              <DataScrapping/>
            </motion.div>
          }
        />
        <Route
          path="/Activity"
          element={
            <motion.div {...pageTransition}>
              <Activity/>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
