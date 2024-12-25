import PageHeader from "../components/modules/Home/PageHeader";
import SinglePost from "../components/modules/blog-details/SinglePost";
import BlogComments from "../components/modules/blog-details/BlogComments";
import LatestBlog from "../components/modules/blog-details/LatestBlog";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import Header from "../components/headers/Header";
import articleData from '../api/blog_details/latest-articles.json'
export default function BlogDetails() {

  return (
    <>
      <Header />
      <PageHeader
        title="Blog Details"
        subtitle="Blog Details"
        image='images/bg/home1/5.png'
      />
     
      <div className="blog home blog--details padding-top padding-bottom">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SinglePost />
        </div>
      </div>
      <section
        className="blog blog--style1  padding-bottom"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <LatestBlog data={articleData} />
        </div>
      </section>
      <div className="blog home blog--details padding-bottom">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <BlogComments />
        </div>
      </div>
      <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
        <Newsletter  title="Get free Pro memberships for your high school class"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
