import React from "react";
import ReactDOM from "react-dom/client";
import Menubar from "./Menubar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Menubar />
    <Footer />
  </React.StrictMode>
);
