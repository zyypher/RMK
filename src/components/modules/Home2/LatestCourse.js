import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
const dataList = [
  {
    "thumbnail": "/images/course/home2/1.png",
    "title": "Basic Web Design",
    "category": "Web Design",
    "categoryID": 1,
    "rating": 4.5,
    "ratingCount": 1026,
    "price": 150,
    "discountedPrice": 350.00,
    "avatar": "https://thetork.com/demos/vue/educax/images/avatar/1.png",
    "avatarName": "Jhon Doe"
  },
  {
    "thumbnail": "/images/course/home2/2.png",
    "title": "Graphic Design",
    "category": "Graphic Design",
    "categoryID": 1,
    "rating": 4.8,
    "ratingCount": 1326,
    "price": 100,
    "discountedPrice": 350.00,
    "avatar": "https://thetork.com/demos/vue/educax/images/avatar/2.png",
    "avatarName": "Wilsone"
  },
  {
    "thumbnail": "/images/course/home2/3.png",
    "title": "Web Design 2024",
    "category": "Web Design",
    "categoryID": 1,
    "rating": 4.6,
    "ratingCount": 1510,
    "price": 250,
    "discountedPrice": 260,
    "avatar": "https://thetork.com/demos/vue/educax/images/avatar/4.png",
    "avatarName": "Jenny"
  },
  {
    "thumbnail": "/images/course/home2/4.png",
    "title": "UI/UX Design 2024",
    "category": "UI/UX Desgin",
    "categoryID": 1,
    "rating": 4.9,
    "ratingCount": 1136,
    "price": 160,
    "discountedPrice": 260,
    "avatar": "https://thetork.com/demos/vue/educax/images/avatar/3.png",
    "avatarName": "Theresa"
  },
  {
    "thumbnail": "/images/course/home2/5.png",
    "title": "Advance PHP 2024",
    "category": "Programming",
    "categoryID": 1,
    "rating": 4.5,
    "ratingCount": 1126,
    "price": 220,
    "discountedPrice": 450.00,
    "avatar": "https://thetork.com/demos/vue/educax/images/avatar/2.png",
    "avatarName": "Wilsone"
  },
  {
    "thumbnail": "/images/course/home2/6.png",
    "title": "Basic Web Design",
    "category": "Web Design",
    "categoryID": 1,
    "rating": 4.7,
    "ratingCount": 1433,
    "price": 110,
    "discountedPrice": 260,
    "avatar": "https://thetork.com/demos/vue/educax/images/avatar/1.png",
    "avatarName": "Jhon Doe"
  }
]
const CourseSection = () => {
  const animationClasses = ['fade-up-right', 'fade-up', 'fade-up-left'];

  return (
    <>
      <div className='course course--style2 padding-top padding-bottom brand2-bg-4'>
        <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="1000">
          <div className="section-header text-center">
            <div className="subtitle subtitle--style2 justify-content-center">
              <img src="/images/icon/home2/1.png" alt="star icon" />
              <p className="mb-0">Latest Course</p>
            </div>
            <h2>Course Subjects to suit you</h2>
            <p className="style2">
              Circuit is flexible and affordable and offers you exceptional support
              to achieve your career goals. Choose your most preferred course.
            </p>
          </div>
          <div className="course__wrapper">
            <div className="row g-4">
              {dataList.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div
                      className="course__item"
                      data-aos={animationClasses[index % 3]}
                      data-aos-duration="1000"
                      data-aos-delay="100"
                    >
                      <div className="course__item-inner">
                        <div className="course__thumb">
                          <div className="course__thumb-inner">
                            <img src={item.thumbnail} alt="course image" />
                          </div>
                          <Link href="/cart" className="course__thumb-add">

                            <FontAwesomeIcon icon={faPlus} />

                          </Link>
                        </div>
                        <div className="course__content">
                          <div className="course__content-details">
                            <p>{item.category}</p>
                            <h6>
                              <Link href="/course-details" className="stretched-link">
                                {item.title}
                              </Link>
                            </h6>
                            <div className="course__focus">
                              <span>{item.rating}</span>
                              <img src="/images/course/star.png" alt="review-star" />
                              <span>({item.ratingCount})</span>
                            </div>
                          </div>
                          <div className="course__content-price">
                            <h6>${item.price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="text-center">
              <Link href="/courses" className="trk-btn trk-btn--border trk-btn--secondary2 mt-5">

                Show All Course <span><FontAwesomeIcon icon={faArrowRight} /></span>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSection;
