import Navbar from '../Home/Navbar'
import Footer from "../Home/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

export default Layout;