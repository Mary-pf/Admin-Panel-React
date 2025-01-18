import { useEffect } from "react";
import Navbar from "./navber/Index";
import Sidbar from "./sidebar/Index";
import { toggleSidebar } from "../../utils/initialDoms";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext";
import Content from "../../pages/Content.jsx";

const Index = () => {
  useEffect(() => {
    // require("../../assets/JS/toggleSidebar");
    // toggleSidebar();
  }, []);
  return (
    <AdminContextContainer>
      <div>
        <Content />
        <Navbar />
        <Sidbar />
      </div>
    </AdminContextContainer>
  );
};

export default Index;
