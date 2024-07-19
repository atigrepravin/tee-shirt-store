import { Link, Outlet } from "react-router-dom";
import Header from "./components/common/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-8">
        <div className="my-8">
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};
