import React, { useContext } from "react";
import { useEffect } from "react";
import Navbar from "./navber/Index";
import Sidbar from "./sidebar/Index";
import { toggleSidebar } from "../../utils/initialDoms";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext";
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "../../pages/category/Category";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);
  useEffect(() => {
    // require("../../assets/JS/toggleSidebar");
    // toggleSidebar();
  }, []);
  return (
    <AdminContextContainer>
      <div>
        <Navbar />
        <Sidbar />
        <section
          id="content_section"
          className={`bg-light py-2 px-3 ${showSidebar ? "expanded" : null}`}
        >
          {/* <Dashboard /> */}
          <Category />
        </section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;
