import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CartPage from "./pages/CartPage";
import ConditionDocsPage from "./pages/ConditionDocsPage";

import DocPage from "./pages/DocPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import MainCategoryPage from "./pages/MainCategoryPage";

import PriceRequestPage from "./pages/PriceRequestPage";
import PriceRequestSecondPage from "./pages/PriceRequestSecondPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import WishListPage from "./pages/WishListPage";

const App = () => {
  // return to the top of the page on navigation
  // FIX for: keep the same scroll distance on navigation
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main dir="rtl">
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category" element={<MainCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishListPage />} />

          <Route path="/conditions" element={<ConditionDocsPage />} />
          <Route path="/conditions/doc/:id" element={<DocPage />} />

          <Route path="/price-request" element={<PriceRequestPage />} />
          <Route path="/price-request-2" element={<PriceRequestSecondPage />} />
        </Route>
        button
      </Routes>
    </main>
  );
};

export default App;
