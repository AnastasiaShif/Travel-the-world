import "./App.css";
import Root from "./Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

library.add(fas, faTwitter, faFontAwesome);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sign-up" element={<Signup />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
