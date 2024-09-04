import { Outlet } from "react-router-dom";
import Header from "./components/common/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container md:mx-auto my-8 px-6 md:px-0">
        <Outlet />
      </div>
    </>
  );
};
