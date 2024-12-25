import { useState } from "react";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import BlogCard from "../components/partials/BlogCard";
import Pagination from "../components/base/slots/Pagination";
import BlogsData from "../api/Blog/blog.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Blogs = () => {


  const posts = BlogsData.posts;
  const [current, setCurrent] = useState(1);

  const updateCurrent = (i) => {
    setCurrent(i);
  };
  return (
    <>
      <Header />
      <PageHeader
        title="Blogs"
        subtitle="Blogs"
        image='images/bg/home1/4.png'
      />
      
      <section
        className="blog blog--style1 padding-top padding-bottom"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="section-header text-center">
            <h2>Latest News, Blogs & Articles</h2>
          </div>
          <div className="blog__wrapper">
            <Pagination dataList={posts} paginate={9}>
              <div slot="content">
                <div className="row g-4">
                  {posts
                    .slice((current - 1) * 9, current * 9)
                    .map((itm, idx) => (
                      <div key={idx} className="col-lg-4 col-md-6">
                        <BlogCard details={itm} />
                      </div>
                    ))}
                </div>
              </div>
              <div slot="button">
                <div className="paginations">
                  <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                    <li>
                      <Link
                        href=""
                        onClick={() => updateCurrent(current - 1 || 1)}
                      >
                        <FaArrowLeft />
                      </Link>
                    </li>
                    {Array.from(
                      { length: Math.ceil(posts.length / 9) },
                      (_, i) => i + 1,
                    ).map((item) => (
                      <li key={item}>
                        <Link
                          href=""
                          className={current === item ? "active" : ""}
                          onClick={() => updateCurrent(item)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href=""
                        onClick={() =>
                          updateCurrent(
                            current < Math.ceil(posts.length / 9)
                              ? current + 1
                              : current,
                          )
                        }
                      >
                        <FaArrowRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Pagination>
          </div>
        </div>
      </section>

      <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
        <Newsletter  title="Get free Pro memberships for your high school class"/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
