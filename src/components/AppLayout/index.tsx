import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import SplashScreen from "../SplashScreen";

const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;
