import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Catalog from "../pages/catalog/Catalog";
import ProductPage from "../pages/productPage/ProductPage";
import Login from "../pages/login/Login";
import UserPage from "../pages/userPage/UserPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/catalog/:filter" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/profile" element={<UserPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;