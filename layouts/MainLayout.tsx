import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
