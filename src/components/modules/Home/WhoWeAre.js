import Counter from '../../base/Counter'

const WhoWeAre = () => {
  return (
    <div>
         <div className="about__wrapper">
        <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-md-8">
                <div className="about__content" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                    <div className="section-header">
                        <div className="subtitle subtitle--style4">
                            <p className="mb-0">who we are</p>
                        </div>
                        <h2 className="about-title">We are providing the best quality online courses. Our all
                            instructors are high
                            expert</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humor, or randomized words which don't
                            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                    <div className="about__counter">
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={200} end="256" delay={20} />+
                            </h3>
                            <p>Enrolled Learner</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0}  end="89" delay={10} />
                            </h3>
                            <p>Finished Session</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0} end="99" delay={10} />+
                            </h3>
                            <p>Satisfaction Rate</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0} end="80" delay={10} />+
                            </h3>
                            <p>Awards Winning</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-4">
                <div className="about__thumb" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                    <div className="about__thumb-inner">
                        <div className="about__thumb-image">
                            <img src="/images/about/home1/2.png" alt="about-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default WhoWeAre