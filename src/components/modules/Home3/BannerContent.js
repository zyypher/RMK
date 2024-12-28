import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const BannerContent = () => {
    return (
        <section className="banner padding-bottom banner--style3 bg--cover"
            style={{ backgroundImage: "url(/images/bg/home3/1.png)" }}>
            <div className="container">
                <div className="banner__wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="banner__content banner__content--style3" data-aos="zoom-in"
                                data-aos-duration="1000">
                                <div className="banner__content-star">
                                    <img src="/images/icon/home3/1.png" alt="star icon" />
                                    <div className="star-details">
                                        <span>Empowering Your Journey to Success</span>
                                    </div>
                                </div>
                                <h1>Expert
                                    Training Courses
                                    At Our Premier
                                    Facilities</h1>
                                <p>Join thousands of learners and professionals who have trusted us to achieve their career goals. Whether you're looking to enhance your skills, gain certifications, or explore new career opportunities, our expert-led programs are here to guide you every step of the way. Start learning today and unlock your true potential!
                                </p>
                                <div className="btn-group">
                                    <Link href="courses" className="trk-btn  trk-btn--secondary3">Explore Courses
                                        <span><FontAwesomeIcon icon={faArrowRight} /></span> </Link>
                                    <Link href="contact" className="trk-btn trk-btn--secondary brand-3">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__thumb banner__thumb--style3">
                                <div className="banner__thumb-item">
                                    <img src="/images/banner/home-image-one.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="banner__icon banner__icon--style2">
                <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home3/4.png"
                    alt="dot icon" /></span>
                <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home3/2.png"
                    alt="star icon" /></span>
                <span className="banner__icon-item banner__icon-item--animation"><img src="/images/banner/home3/3.png"
                    alt="watch icon" /></span>
            </div>
        </section>

    )
}

export default BannerContent