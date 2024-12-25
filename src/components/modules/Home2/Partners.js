import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  { Autoplay } from 'swiper/modules';
const partnerlist = [
    {
      img: '/images/partner/home2/1.png',
    },
    {
      img:  '/images/partner/home2/2.png',
    },
    {
      img: '/images/partner/home2/3.png',
    },
    {
      img: '/images/partner/home2/4.png',
    },
    {
      img: '/images/partner/home2/5.png',
    },
    {
        img: '/images/partner/home2/1.png',
      },
      {
        img:  '/images/partner/home2/2.png',
      },
      {
        img: '/images/partner/home2/3.png',
      },
      {
        img: '/images/partner/home2/4.png',
      },
      {
        img: '/images/partner/home2/5.png',
      },
      {
        img: '/images/partner/home2/1.png',
      },
      {
        img:  '/images/partner/home2/2.png',
      },
      {
        img: '/images/partner/home2/3.png',
      },
      {
        img: '/images/partner/home2/4.png',
      },
      {
        img: '/images/partner/home2/5.png',
      }
  ];
const Partners = ()=>{
    const breakpoints = {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      };
    
      const autoplay = {
        delay: 1,
        disableOnInteraction: true,
      };
    
      const speed = 3000;
      return(
        <>
            <section className='partner partner--style2 brand2-bg-4'>
                <div className='container aos-init aos-animate' data-aos="fade-up"  data-aos-duration="1000">
                    <div className='section-header text-center'><h6>Trusted by 4,000+ companies</h6></div>
                    <div className='partner__wrapper'>
                <Swiper className="partner__slider"
                modules={[Autoplay]}
               slidesPerView={5}
               breakpoints={breakpoints}
               loop={true}
               autoplay={autoplay}
               speed={speed}
          
               grabCursor={true}
            >

              {partnerlist.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="partner__item">
                    <div className="partner__item-inner ">
                      <img src={item.img} alt="partner logo"/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
                </div>
                </div>
                
            </section>
        </>
      )
}
export default Partners;