import { Outlet } from "react-router-dom";
import Header from "./components/common/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
