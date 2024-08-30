import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
