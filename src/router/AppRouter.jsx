// src/router/AppRouter.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import NotFound from "../pages/NotFound";

// Scroll to #id when the hash in the URL changes
const ScrollToHash = () => {
  const location = useLocation();

  React.useEffect(() => {
    const { hash } = location;

    if (hash) {
      const id = hash.substring(1); // remove "#"
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
     
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};



const AppRouter = () => {
  return (
    <BrowserRouter basename="/AAG-Website">
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
