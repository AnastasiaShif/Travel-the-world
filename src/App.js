import "./App.css";
import Root from "./Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import React from "react";
import Page404 from "./pages/Page404";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFontAwesome,
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  // BrowserRouter,
  // Routes,
} from "react-router-dom";

library.add(
  fas,
  faTwitter,
  faFontAwesome,
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedin
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
