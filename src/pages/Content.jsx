import Category from "./category/Category";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import { AdminContext } from "../context/adminLayoutContext";
import { useContext } from "react";
import Product from "./product/Product.jsx";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "expanded" : null}`}
    >
      {/* <Dashboard /> */}
      <Category />
      {/* <Product /> */}
    </section>
  );
};

export default Content;
