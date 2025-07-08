import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const nogmaHEnterpriseRouter = createBrowserRouter([
    { path: "/", element: <Home addToCart={addToCart} cart={cart} /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/cart", element: <Cart cart={cart} setCart={setCart} /> },
  ]);

  return (
    <>
      <RouterProvider router={nogmaHEnterpriseRouter} />
    </>
  );
}

export default App;
