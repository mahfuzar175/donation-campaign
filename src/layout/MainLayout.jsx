import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1250px] mx-auto mb-4 md:mb-10">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
