// Import third-party libraries
// import "swiper/css/swiper.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.min.css";  // Assuming this includes your Tailwind and Flowbite styles

// Import your components and application-specific styles
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";  // Assuming this includes more of your styles
import App from "./App.jsx";
import Home from "./home/Home.jsx";
import Shop from "./shop/Shop.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import About from "./about/About.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import { store } from './redux/store.js';
import { createRoot } from 'react-dom/client';


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="shop/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

createRoot(document.getElementById('root')).render(Root);
