import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
const testimonialdata = [
  {
    id: 1,
    name: 'Guy Hawkins',
    img: '/images/testimonial/home1/3.png',
    role: 'Designer',
    testimonial: '“I have minim mollit non deserunt ullamco est sit aliqua dolor do Eamet sint. Velit officia consequat duis enim velit mollit. Exercitati veniamconsequat sunt nostrud amet.Amet minim mollit non desu ulla mco est sitaliqua dolor do amet sint. Velit officia consequat enim velit mollit.Exercitation veniam consequat.'
  },
  {
    id: 2,
    name: 'Annete Blck',
    img: '/images/testimonial/home1/1.png',
    role: 'UI/UX Designer',
    testimonial: '“I have minim mollit non deserunt ullamco est sit aliqua dolor do Eamet sint. Velit officia consequat duis enim velit mollit. Exercitati veniamconsequat sunt nostrud amet.Amet minim mollit non desu ulla mco est sitaliqua dolor do amet sint. Velit officia consequat enim velit mollit.Exercitation veniam consequat.'

  },
  {
    id: 3,
    img: '/images/testimonial/home1/2.png',
    name: 'Jhon Abraham',
    role: 'Frontend Designer',
    testimonial: '“I have minim mollit non deserunt ullamco est sit aliqua dolor do Eamet sint. Velit officia consequat duis enim velit mollit. Exercitati veniamconsequat sunt nostrud amet.Amet minim mollit non desu ulla mco est sitaliqua dolor do amet sint. Velit officia consequat enim velit mollit.Exercitation veniam consequat.'
  }
]
const Testimonials = () => {
  const breakpoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 25,
    }
  };
  const speed = 3000;
  return (
    <section className='testimonial testimonial--style2 padding-top padding-bottom brand2-bg-3'>
      <div className='container aos-init aos-animate'>
        <div className='section-header text-center' >
          <h2>What students are saying</h2>
          <p className='style2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. officia consequat duis enim velit mollit. Exercitation</p>
        </div>
        <div className='testimonial__wrapper'>
          <Swiper className="testimonial__slider2"
            slidesPerView={1}
            modules={[Pagination]}
            breakpoints={breakpoints}
            loop={true}
            grabCursor={true}
            speed={speed}
            spaceBetween={24}
            pagination={{
              el: ".slider__pagination-3",
              clickable: true

            }}>

            {
              testimonialdata.map((item) => (
                <SwiperSlide key={item.id}
                >
                  <div className='testimonial__item'>
                    <div className='testimonial__item-inner'>
                      <div className='testimonial__item-content'>
                        <span><FontAwesomeIcon icon={faQuoteLeft} /></span>
                        <p>{item.testimonial}</p>
                      </div>
                      <div className='testimonial__footer'>
                        <div className='testimonial__author'>
                          <div className='testimonial__author-thumb'>
                            <img src={item.img} alt='author' />
                          </div>
                          <div className='testimonial__author-designation'>
                            <h6>{item.name}</h6>
                            <span>{item.role}</span>
                          </div>
                        </div>
                        <div className='testimonial__rating'>
                          <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#F4BD15' }} />
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#F4BD15' }} />
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#F4BD15' }} />
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#F4BD15' }} />
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#F4BD15' }} />
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))
            }
            <div className='slider__pagination-3'>

            </div>
          </Swiper>
          <div className="testimonial__shape">
            <span className="testimonial__shape-item"><img src="/images/testimonial/home2/1.png" alt="shpae" /></span>
            <span className="testimonial__shape-item"><img src="/images/testimonial/home2/2.png" alt="shpae" /></span>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Testimonials

