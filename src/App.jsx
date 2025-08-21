import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import AllProduct from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import CartNotification from "./components/CartNotification";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import Checkout from "./pages/CheckOut";
import { useState } from "react";

// Layout component for shared UI
function Layout({ cart, children }) {
  return (
    <>
      <Navbar cart={cart} />
      {children}
      <Footer />
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
          item.id === product.id
            ? { ...item, qty: item.qty + (product.qty || 1) }
            : item
        );
      }
      return [...prev, { ...product, qty: product.qty || 1 }];
    });

    // Show your custom notification
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
          <About />
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
          <ProductDetail addToCart={addToCart} />
        </Layout>
      ),
    },
    {
      path: "/product-detail/:id",
      element: (
        <Layout cart={cart}>
          <ProductDetail addToCart={addToCart} />
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
