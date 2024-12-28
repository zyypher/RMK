import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const About = () => {
    return (
        <section className="about about--style3 padding-bottom">
            <div className="container">
                <div className="about__wrapper">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="about__thumb aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                <div className="about__thumb-inner">
                                    <div className="about__thumb-image">
                                        <img src="/images/new/home-image-2.png" alt="about-image" />
                                    </div>
                                </div>
                                <div className="about__icon">
                                    <span className="about__icon-item about__icon-item--animation"><img src="/images/about/home3/4.png" alt="dot icon" /></span>
                                    <span className="about__icon-item about__icon-item--animation"><img src="/images/about/home3/3.png" alt="star icon" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content aos-init aos-animate" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="100">
                                <div className="about__content-inner">
                                    <div className="section-header">
                                        <div className="subtitle subtitle--style3">
                                            <img src="/images/icon/home3/1.png" alt="star icon" />
                                            <p className="mb-0">About Us</p>
                                        </div>
                                        <h2>We Offer Training with Excellence</h2>
                                        <p className="style2" style={{paddingBottom: '20px'}}>At RMK Experts, we pride ourselves on being a trusted and certified provider of Food Safety and Health & Safety training across the UAE, GCC, and the Middle East. Since our establishment in 2003, we have successfully trained over 850,000 learners, including 800 municipality food safety inspectors.</p>
                                        <p className="style2">Our tailored programs and consultancy services are designed to enhance safety, operational efficiency, and regulatory compliance, ensuring excellence in every step. Guided by the legacy of our late founder, Dr. Rafiq Al Khatib, RMK continues to uphold the highest standards of technical expertise and practical implementation​</p>
                                    </div>
                                    <div className="about__details">
                                        <div className="about__details-item">
                                            <img src="/images/icon/svg/2.svg" alt="icon" />
                                            <div className="about__details-text">
                                                <h6>Certified Experts</h6>
                                                <p>Learn from industry professionals with years of experience.</p>
                                            </div>
                                        </div>
                                        <div className="about__details-item">
                                            <img src="/images/icon/svg/2.svg" alt="icon" />
                                            <div className="about__details-text">
                                                <h6>Tailored Programs</h6>
                                                <p>Training designed to meet your specific needs.</p>
                                            </div>
                                        </div>
                                        <div className="about__details-item">
                                            <img src="/images/icon/svg/2.svg" alt="icon" />
                                            <div className="about__details-text">
                                                <h6>Legacy of Excellence</h6>
                                                <p>Over two decades of leadership in training and consulting.</p>
                                            </div>
                                        </div>
                                        <div className="about__details-item">
                                            <img src="/images/icon/svg/2.svg" alt="icon" />
                                            <div className="about__details-text">
                                                <h6>Wide Reach</h6>
                                                <p>Serving clients across the UAE, GCC, and the Middle East.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="about" className="trk-btn trk-btn--secondary3">Learn more
                                        <span> <FontAwesomeIcon icon={faArrowRight} /></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;