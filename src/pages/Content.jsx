import Category from "./category/Category";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import { AdminContext } from "../context/adminLayoutContext";
import { useContext } from "react";
import Product from "./product/Product.jsx";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "expanded" : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="products" element={<Product />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
