import Link from "next/link";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CommunitySection = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
    <FsLightbox toggler={toggler} sources={["https://youtu.be/Hh1UCOizzMc","https://youtu.be/Hh1UCOizzMc","https://youtu.be/Hh1UCOizzMc"]} />
    <div className="community community--style2 padding-top padding-bottom">
      <div className="container">
    <div className="community__wrapper brand2-bg-1">
      <div className="row align-items-center g-0">
        <div className="col-lg-6">
          <div className="community__content">
            <div className="community__content-inner">
              <span className="join-btn">Join Us</span>
              <h2>Join more than 17,000+ students all over the world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare.
              </p>
              <Link href="/signin"className="trk-btn trk-btn--border trk-btn--secondary2">
                
                  Get Started{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="community__thumb">
            <div className="community__thumb-inner">
              <img src="/images/community/home2/1.png" alt="commnunity-image" />
              <div className="community__thumb-playbtn">
                
                  <Link href="" onClick={(e)=>{
                    setToggler(!toggler)
                    e.preventDefault()
                    }}>
                    <img
                      src="/images/community/home2/btn.png"
                      alt="ply-btn"
                    />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default CommunitySection;
