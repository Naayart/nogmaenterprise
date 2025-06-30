import { createBrowserRouter, RouterProvider } from 'react-router';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
const nogmaHEnterpriseRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

  

  return (
    <>
      <>
      <RouterProvider router={nogmaHEnterpriseRouter} />
    </>
    </>
  )
}

export default App
