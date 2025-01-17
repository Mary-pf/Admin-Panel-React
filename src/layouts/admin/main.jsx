import React from "react";
import { useEffect } from "react";
import Navbar from "./navber/Index";
import Sidbar from "./sidebar/Index";
import { toggleSidebar } from "../../utils/initialDoms";
import AdminContextContainer from "../../context/adminLayoutContext";

const Index = () => {
  useEffect(() => {
    // require("../../assets/JS/toggleSidebar");
    // toggleSidebar();
  }, []);
  return (
    <AdminContextContainer>
      <div>
        <Navbar />
        <Sidbar />
        <section id="content_section" className="bg-light py-2 px-3"></section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;
