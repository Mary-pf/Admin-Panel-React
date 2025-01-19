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
          <SideBarItem
            targetPath="/"
            icon="fas fa-tachometer-alt"
            title="داشبورد"
          />
          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title="فروشگاه" />
          <SideBarItem
            targetPath="/categories"
            icon="fas fa-stream"
            title="مدیریت گروه محصول"
          />
          <SideBarItem
            targetPath="/products"
            icon="fas fa-cube"
            title="مدیریت محصول"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-copyright"
            title="مدیریت برند ها"
          />
          <SideBarItem
            targetPath="/test"
            icon="fab fa-pagelines"
            title="مدیریت گارانتی ها"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-palette"
            title="مدیریت رنگ ها"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-percentage"
            title="مدیریت تخفیف ها"
          />

          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="سفارشات و سبد" />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-shopping-basket"
            title="مدیریت سبد ها"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-luggage-cart"
            title="مدیریت سفارشات"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-truck-loading"
            title="مدیریت نحوه ارسال"
          />

          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="کاربران و همکاران" />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-users"
            title="مشاهده کاربران"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-user-tag"
            title="نقش ها"
          />
          <SideBarItem
            targetPath="/test"
            icon="fas fa-shield-alt"
            title="مجوزها"
          />

          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="ارتباطات" />
          <SideBarItem
            targetPath="/test"
            test
            icon="fas fa-question-circle"
            title="سوال ها"
          />
          <SideBarItem
            targetPath="/test"
            test
            icon="fas fa-comment"
            title="نظرات"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
