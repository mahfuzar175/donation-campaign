import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

  const loc = useLocation();

  useEffect(() =>{
    console.log(loc.pathname);
    if(loc.pathname == '/'){
      document.title = `Donation Campaign - home`
    }
    else{
      document.title = `Donation Campaign ${loc.pathname.replace("/", "- ")}`
    }

    if(loc.state){
      document.title = `${loc.state}`
    }

  }, [loc.pathname, loc.state]);

  return (
    <div className="max-w-[1250px] mx-auto mb-4 md:mb-10">
      <Navbar></Navbar>
      <div className="py-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
