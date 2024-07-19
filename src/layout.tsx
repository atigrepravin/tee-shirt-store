import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="mx-8">
      <div className="my-8">
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
