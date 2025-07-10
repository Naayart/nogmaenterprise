import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import ViewProduct from "./pages/ViewProduct";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const nogmaHEnterpriseRouter = createBrowserRouter([
    { path: "/", element: <Home addToCart={addToCart} cart={cart} /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/cart", element: <Cart cart={cart} setCart={setCart} /> },
    {path: 'view-product', element: <ViewProduct />},
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={nogmaHEnterpriseRouter} />
    </>
  );
}

export default App;
