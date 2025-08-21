import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import AllProduct from "./pages/AllProducts";
import FeaturedProductSection from "./components/FeaturedProductSection";
import Navbar from "./components/Navbar";
import CartNotification from "./components/CartNotification";
import BlogDetail from "./pages/BlogDetail";
import Checkout from "./pages/CheckOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

// Layout component for shared UI
function Layout({ cart, children }) {
  return (
    <>
      <Navbar cart={cart} />
      {children}
      <ToastContainer />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [cartNotification, setCartNotification] = useState({
    show: false,
    message: "",
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });

    setCartNotification({
      show: true,
      message: `${product.name} added to cart!`,
    });
  };

  const closeCartNotification = () => {
    setCartNotification({ show: false, message: "" });
  };

  // Define routes with layout
  const nogmaHEnterpriseRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout cart={cart}>
          <Home addToCart={addToCart} cart={cart} />
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout cart={cart}>
          <Contact cart={cart} />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout cart={cart}>
          <About cart={cart} />
        </Layout>
      ),
    },
    {
      path: "/blog",
      element: (
        <Layout cart={cart}>
          <Blog cart={cart} />
        </Layout>
      ),
    },
    {
      path: "/blog/:id",
      element: (
        <Layout cart={cart}>
          <BlogDetail cart={cart} />
        </Layout>
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout cart={cart}>
          <Cart cart={cart} setCart={setCart} />
        </Layout>
      ),
    },
    {
      path: "/product-detail",
      element: (
        <Layout cart={cart}>
          <ProductDetail addToCart={addToCart} cart={cart} />
        </Layout>
      ),
    },
   {
  path: "/product-detail/:id",
  element: (
    <Layout cart={cart}>
      <ProductDetail cart={cart} addToCart={addToCart} />
    </Layout>
  ),
   },
    {
      path: "/all-product",
      element: (
        <Layout cart={cart}>
          <AllProduct cart={cart} setCart={setCart} addToCart={addToCart} />
        </Layout>
      ),
    },
    {
      path: "/checkout",
      element: (
        <Layout cart={cart}>
          <Checkout cart={cart} />
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout cart={cart}>
          <NotFound />
        </Layout>
      ),
    },
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
