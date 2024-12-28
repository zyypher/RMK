import Layout from "../components/Layout/Layout";
import Preloader from "../components/headers/Preloader/Preloader";
import About from "../components/modules/Home/About";
import BannerContent from "../components/modules/Home/BannerContent";
import Blog from "../components/modules/Home/Blog";
import Categories from "../components/modules/Home/Categories";
import CommunityLearning from "../components/modules/Home/CommunityLearning";
import MeetOurExpert from "../components/modules/Home/MeetOurExpert";
import OurSuccessStory from "../components/modules/Home/OurSuccessStory";
import Partners from "../components/modules/Home/Partners";
import PopularCourse from "../components/modules/Home/PopularCourse";
import Testimonials from "../components/modules/Home/Testimonials";
import Newsletter from "../components/modules/newsletter/Newsletter";
const index3 = () => {

  return (
    <>
      <Layout>
        <Preloader />
        <BannerContent />
        <Categories />
        <About />
        <PopularCourse title="Our Most Popular Courses" />
        <OurSuccessStory />
        <MeetOurExpert />
        <CommunityLearning />
        <Testimonials />
        <Blog />
        <Partners />
        <Newsletter title="Get free Pro memberships for your high school class" />
      </Layout>
    </>
  );
}

export default index3
