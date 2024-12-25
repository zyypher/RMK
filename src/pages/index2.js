import LayoutTwo from "../components/Layout/LayoutTwo";
import Preloader from "../components/headers/Preloader/Preloader";
import About from "../components/modules/Home2/About";
import Banner from "../components/modules/Home2/Banner";
import Blog from "../components/modules/Home2/Blog";
import Categories from "../components/modules/Home2/Categories";
import CommunitySection from "../components/modules/Home2/CommunitySection";
import CounterSection from "../components/modules/Home2/CounterSection";
import CourseSection from "../components/modules/Home2/LatestCourse";
import Mentor from "../components/modules/Home2/Mentor";
import Partners from "../components/modules/Home2/Partners";
import Testimonials from "../components/modules/Home2/Testimonials";
import Newslettertwo from "../components/modules/newsletter/Newslettertwo";
const index1 = () => {
  return (
    <>
      <LayoutTwo>
        <Preloader className = {"preloader--style2"} />
        <Banner />
        <Partners />
        <Categories />
        <About />
        <CourseSection />
        <CounterSection />
        <CommunitySection />
        <Testimonials />
        <Mentor />
        <Blog />
        <Newslettertwo />
      </LayoutTwo>
    </>
  );
};

export default index1;
