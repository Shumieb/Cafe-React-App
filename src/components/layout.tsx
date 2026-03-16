import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout() {
  return (
    <div className="mx-auto flex flex-col justify-between align-center">
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
