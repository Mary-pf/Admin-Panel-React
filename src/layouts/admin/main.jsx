import Navbar from "./navber/Index";
import Sidbar from "./sidebar/Index";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Sidbar />
      <section id="content_section" className="bg-light py-2 px-3"></section>
    </div>
  );
};

export default Index;
