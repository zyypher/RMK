import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const dataList = [
  {
    "category": "Language",
    "img": "/images/category/home2/1.png"
  },
  {
    "category": "Graphic Design",
    "img": "/images/category/home2/2.png"
  },
  {
    "category": "Content Writing",
    "img": "/images/category/home2/3.png"
  },
  {
    "category": "Web Design",
    "img": "/images/category/home2/4.png"
  },
  {
    "category": "Health & Fitness",
    "img": "/images/category/home2/5.png"
  },
  {
    "category": "Language",
    "img": "/images/category/home2/1.png"
  },
  {
    "category": "Graphic Design",
    "img": "/images/category/home2/2.png"
  },
  {
    "category": "Content Writing",
    "img": "/images/category/home2/3.png"
  },
  {
    "category": "Web Design",
    "img": "/images/category/home2/4.png"
  },
  {
    "category": "Health & Fitness",
    "img": "/images/category/home2/5.png"
  }
]
export default function CourseCategories({ categoryListTwo }) {
  const spaceBetween = 24;
  const grabCursor = true;
  const loop = true;
  const slidesPerView = 1;
  const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 25,
    }
  };
  const speed = 3000;
  const pagination = {
    el: ".slider__pagination-1",
    clickable: true
  };

  return (
    <>
      <div className="categories categories--style2 padding-top padding-bottom">
        <div className="container">
          <div className="section-header text-center">
            <div className="subtitle subtitle--style2 justify-content-center">
              <img src="/images/icon/home2/1.png" alt="star icon" />
              <p className="mb-0">Latest Course</p>
            </div>
            <h2>Our Best Popular Courses</h2>
            <p className="style2">Take your career to unique heights in this competitive job market. All the categories
              you need are here. Choose your most preferred course. </p>
          </div>
          <div className="categories__wrapper">
            <Swiper className="categories__slider"
              spaceBetween={spaceBetween}
              slidesPerView={slidesPerView}
              dataList={categoryListTwo}
              breakpoints={breakpoints}
              loop={loop}
              speed={speed}
              pagination={pagination}
              grabCursor={grabCursor}
            >
              {dataList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide" >
                      <div className="categories__item">
                        <div className="categories__item-inner" >
                          <img src={item.img} alt="category icon" />
                          <div className="categories__item-content">
                            <h5 className="style4"><Link href="/course-category">{item.category}</Link> </h5>
                            <p>20+ Course</p>
                            <Link href="/course-category" className="categories__item-btn">
                              <FontAwesomeIcon icon={faArrowRight} /> </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }
              )}

            </Swiper>
          </div>
        </div>
      </div>

    </>
  )
}
