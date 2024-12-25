import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about about--style2 padding-bottom">
      <div className="container">
        <div className="about__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb"
                data-aos="fade-right"
                data-aos-duration="920"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image">
                    <img src="/images/about/home2/1.png" alt="about-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="about__content-inner">
                  <div className="section-header">
                    <div className="subtitle subtitle--style3">
                      <img src="/images/icon/home2/1.png" alt="star icon" />
                      <p className="mb-0">25+ Years Of Experiences</p>
                    </div>
                    <h2>We Are Always Ensure Best Course For Your Learning</h2>
                    <p className="style2">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humor.{" "}
                    </p>
                  </div>
                  <div className="about__content-item">
                    <img src="/images/about/home2/2.png" alt="icon" />
                    <div className="about__content-details">
                      <h6>Sharing a screen</h6>
                      <p>
                        Share your desktop, smartphone or tablet screen with
                        everyone to facilitate teamwork. Share your desktop,
                        smartphone or tablet screen with everyone to facilitate
                        teamwork.
                      </p>
                    </div>
                  </div>
                  <div className="about__content-item">
                    <img src="/images/about/home2/3.png" alt="icon" />
                    <div className="about__content-details">
                      <h6>Presenter control</h6>
                      <p>
                        Let me help you with that. I can share control of my
                        screen andkeyboar, Share your desktop, smartphone or
                        tablet screen with everyone to facilitate teamwork.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/about"
                    className="trk-btn trk-btn--border trk-btn--secondary2"
                  >
                    {"About More  "}
                    <span>
                       <FontAwesomeIcon icon={faArrowRight} />
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
