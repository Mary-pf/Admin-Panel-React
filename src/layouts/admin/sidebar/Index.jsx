import { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SideBarItem from "./SidebarItem";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100" ${showSidebar ? "expanded" : null}`}
      >
        <div className="p-0 m-0">
          <Avatar name="مریم پورفرزین" imagePath="/assets/images/user2.jpg" />
          <SideBarItem icon="fas fa-tachometer-alt" title="داشبورد" />
          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title="فروشگاه" />
          <SideBarItem icon="fas fa-stream" title="مدیریت گروه محصول" />
          <SideBarItem icon="fas fa-cube" title="مدیریت محصول" />
          <SideBarItem icon="fas fa-copyright" title="مدیریت برند ها" />
          <SideBarItem icon="fab fa-pagelines" title="مدیریت گارانتی ها" />
          <SideBarItem icon="fas fa-palette" title="مدیریت رنگ ها" />
          <SideBarItem icon="fas fa-percentage" title="مدیریت تخفیف ها" />

          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="سفارشات و سبد" />
          <SideBarItem icon="fas fa-shopping-basket" title="مدیریت سبد ها" />
          <SideBarItem icon="fas fa-luggage-cart" title="مدیریت سفارشات" />
          <SideBarItem icon="fas fa-truck-loading" title="مدیریت نحوه ارسال" />

          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="کاربران و همکاران" />
          <SideBarItem icon="fas fa-users" title="مشاهده کاربران" />
          <SideBarItem icon="fas fa-user-tag" title="نقش ها" />
          <SideBarItem icon="fas fa-shield-alt" title="مجوزها" />

          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="ارتباطات" />
          <SideBarItem icon="fas fa-question-circle" title="سوال ها" />
          <SideBarItem icon="fas fa-comment" title="نظرات" />
        </div>
      </div>
    </section>
  );
};

export default Index;
