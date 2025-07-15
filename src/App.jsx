import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import AllProduct from "./pages/AllProducts";
import CartNotification from "./components/CartNotification";

function App() {
  const [cart, setCart] = useState([]);
  const [cartNotification, setCartNotification] = useState({ show: false, message: '' });

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setCartNotification({ 
      show: true, 
      message: `${product.name} added to cart!` 
    });
  };

  const closeCartNotification = () => {
    setCartNotification({ show: false, message: '' });
  };

  const nogmaHEnterpriseRouter = createBrowserRouter([
    { path: "/", element: <Home addToCart={addToCart} cart={cart} /> },
    { path: "/contact", element: <Contact cart={cart} /> },
    { path: "/about", element: <About cart={cart} /> },
    { path: "/blog", element: <Blog cart={cart} /> },
    { path: "/cart", element: <Cart cart={cart} setCart={setCart} /> },
    { path: "/product-detail", element: <ProductDetail addToCart={addToCart} cart={cart} /> },
    { path: "/all-product", element: <AllProduct cart={cart} /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={nogmaHEnterpriseRouter} />
      <CartNotification 
        show={cartNotification.show}
        message={cartNotification.message}
        onClose={closeCartNotification}
      />
    </>
  );
}

export default App;
