import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <section className="banner banner--style2 padding-bottom ">
        <div className="container">
            <div className="banner__wrapper">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner__content banner__content--style2" data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="banner__content-star">
                                <img src="/images/banner/home2/6.png" alt="star icon"/>
                                <div className="star-details">
                                    <p className="star">5 Stars</p>
                                    <span>Read Our <Link href="about">Success Stories</Link></span>
                                </div>
                            </div>
                            <h1>Find Your Perfect Learn Platform</h1>
                            <p className="moto">Our mission is to help people to find the best course online and learn with
                                expert
                                anytime, anywhere
                            </p>
                            <div className="btn-group">
                                <Link href="signin" className="trk-btn trk-btn--border trk-btn--secondary2">Get Started
                                    <span><FontAwesomeIcon icon={faArrowRight} /></span> </Link>
                                <Link href="about" className="trk-btn trk-btn--secondary brand-2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__thumb banner__thumb--style2" data-aos="fade-left" data-aos-duration="1000">
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="banner__thumb-item">
                                        <img className="fist-image" src="/images/banner/home2/1.png" alt="image"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="banner__thumb-item">
                                        <img src="/images/banner/home2/2.png" alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner__icon banner__icon--style1">
            <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home2/3.png"
                    alt="roket"/></span>
            <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home2/4.png"
                    alt="book"/></span>
            <span className="banner__icon-item"><img src="/images/banner/home2/5.png" alt="belon"/></span>
        </div>
    </section>
  )
}

export default Banner