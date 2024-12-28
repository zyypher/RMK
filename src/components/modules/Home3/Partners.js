import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const partnerThree = [
  { "img": "/images/partners/image1.jpeg" },
  { "img": "/images/partners/image2.png" },
  { "img": "/images/partners/image3.png" },
  { "img": "/images/partners/image4.png" },
  { "img": "/images/partners/image5.png" },
  { "img": "/images/partners/image6.png" },
  { "img": "/images/partners/image7.png" },
  { "img": "/images/partners/image8.png" },
  { "img": "/images/partners/image9.png" },
  { "img": "/images/partners/image10.jpeg" },
  { "img": "/images/partners/image11.jpeg" },
  { "img": "/images/partners/image12.png" },
  { "img": "/images/partners/image13.png" },
  { "img": "/images/partners/image14.png" },
  { "img": "/images/partners/image15.png" },
  { "img": "/images/partners/image16.jpeg" },
  { "img": "/images/partners/image17.jpeg" },
  { "img": "/images/partners/image18.png" },
  { "img": "/images/partners/image19.png" },
  { "img": "/images/partners/image20.png" },
  { "img": "/images/partners/image21.png" },
  { "img": "/images/partners/image22.png" },
  { "img": "/images/partners/image23.png" },
  { "img": "/images/partners/image24.png" },
  { "img": "/images/partners/image25.png" },
  { "img": "/images/partners/image26.png" },
  { "img": "/images/partners/image27.png" },
  { "img": "/images/partners/image28.png" },
  { "img": "/images/partners/image29.png" },
  { "img": "/images/partners/image30.png" },
  { "img": "/images/partners/image31.png" },
  { "img": "/images/partners/image32.png" },
  { "img": "/images/partners/image33.png" },
  { "img": "/images/partners/image34.png" },
  { "img": "/images/partners/image35.png" },
  { "img": "/images/partners/image36.png" }
];

const Partners = () => {
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

  return (

      <section className='partner partner--style2 aos-init aos-animate' data-aos="fade-up" data-aos-duration="800">
        <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="1000" data-aos-delay='100'>
          <div className="section-header text-center">
            <h6>Trusted by 50+ companies</h6>
          </div>
          <div className="partner__wrapper">
            <Swiper className="partner__slider"
              modules={[Autoplay]}
              slidesPerView={5}
              breakpoints={breakpoints}
              loop={true}
              autoplay={autoplay}
              speed={speed}

              grabCursor={true}
            >

              {partnerThree.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img src={item.img} alt="partner logo" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


  );
};

export default Partners;
