import { useState } from "react";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import BlogCard from "../components/partials/BlogCard";
import Pagination from "../components/base/slots/Pagination";
import blog from "../api/Blog2/blog2.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LatestBlog from "../components/modules/blog-details/LatestBlog";
import BlogComments from "../components/modules/blog-details/BlogComments";

import Link from "next/link";
const Blogs2 = () => {
  const posts = blog.posts;
  const [current, setCurrent] = useState(1);
  const paginate = 4;
  const updateCurrent = (i) => {
    setCurrent(i);
  };
  return (
    <>
    <Header />
      <PageHeader
        title="Blogs With Sidebar"
        subtitle="Blogs 2"
        image='images/bg/home1/5.png'
      />
      <div
        className="blog blog--style1 home padding-top padding-bottom"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="section__wrapper">
            <div className="row g-5">
              <div className="col-lg-8 col-12">
                <Pagination dataList={posts} paginate={paginate}>
                  <div slot="content">
                    <div className="row g-4">
                      {posts
                        .slice((current - 1) * paginate, current * paginate)
                        .map((itm, idx) => (
                          <div key={idx} className="col-md-6">
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
                          { length: Math.ceil(posts.length / paginate) },
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

              <div className="col-lg-4 col-md-8 col-12">
              <div className="sidebar">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="sidebar__search">
                                <div className="body">
                                    <form className="" action="">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search"/>
                                            <button type="submit" className="search-btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="sidebar__recentpost">
                                <div className="head">
                                    <h6>Recent Post</h6>
                                </div>
                                <div className="body">
                                    <ul>
                                        <li>
                                            <div className="thumb">
                                                <Link href="/blog-details" to="/blog-details"><img src="/images/blog/home3/details/2.png"
                                                        alt="recentpost-image"/></Link >
                                            </div>
                                            <div className="content">
                                                <p><Link href="/blog-details" to="/blog-details">How to create natural backlinks
                                                        that produce results</Link ></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <Link href="/blog-details" to="/blog-details"><img src="/images/blog/home3/details/3.png"
                                                        alt="recentpost-image"/></Link >
                                            </div>
                                            <div className="content">
                                                <p><Link href="/blog-details" to="/blog-details">How to create natural backlinks
                                                        that produce results</Link ></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <Link href="/blog-details" to="/blog-details"><img src="/images/blog/home3/details/4.png"
                                                        alt="recentpost-image"/></Link >
                                            </div>
                                            <div className="content">
                                                <p><Link href="/blog-details" to="/blog-details">How to create natural backlinks
                                                        that produce results</Link ></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="sidebar__categorie">
                                <div className="head">
                                    <h6>Categories</h6>
                                </div>
                                <div className="body">
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    Advices</Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    Business</Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    Consulting</Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    Personal</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="sidebar__tags">
                                <div className="head">
                                    <h6>Tags</h6>
                                </div>
                                <div className="body">
                                    <div className="content">
                                        <ul>
                                            <li><Link href=""className="active">Web Design</Link></li>
                                            <li><Link href="">Education</Link></li>
                                            <li><Link href="">Marketing</Link></li>
                                            <li><Link href="">Seo</Link></li>
                                            <li><Link href="">Graphic Design</Link></li>
                                            <li><Link href="">Management</Link></li>
                                            <li><Link href="">Learning</Link></li>
                                            <li><Link href="">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="blog blog--style1 padding-bottom"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <LatestBlog data={posts} />
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
          <Newsletter title="Get free Pro memberships for your high school class" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs2;
