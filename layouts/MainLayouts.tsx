import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayouts;
