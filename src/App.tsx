import { initializeIcons } from "@fluentui/react";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./pages/Blog";
import Brawlers from "./pages/Brawlers";
import BrawlStats from "./pages/BrawlStats";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
export const App = () => {
  initializeIcons();

  return (
    <NextUIProvider>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="brawlers" element={<Brawlers />} />
              <Route path="blog" element={<Blogs />} />
              <Route path="about" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    </NextUIProvider>
  );
};
