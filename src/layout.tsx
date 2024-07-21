import { Outlet } from "react-router-dom";
import Header from "./components/common/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-8">
        <Outlet />
      </div>
    </>
  );
};
