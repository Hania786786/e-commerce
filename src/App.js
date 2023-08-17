import React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

// React-router-dom-v6
// import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import SingleProduct from "./features/product/components/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/single-product",
    element: <SingleProduct />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </>
  );
};

export default App;
