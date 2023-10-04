import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages components
import Header from "./components/common/header/Header.components";
import Landing from "./pages/landing/Landing.components";
import Main from "./pages/main/Main.components";

declare global {
  interface Window {
    chrome: any;
  }
}

const Router = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} /> {/* 서비스 소개 */}
        <Route path="/:id" element={<Main />} /> {/* 메인페이지 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;