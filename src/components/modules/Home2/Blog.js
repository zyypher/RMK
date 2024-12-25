import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
const Blog = () => {
  return (
    <div>
      <div className='blog blog--style2 padding-top padding-bottom'>
        <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
          <div className="blog__header">
            <h2>Everything you need to know about development</h2>
            <Link href="/blogs" className="trk-btn trk-btn--border trk-btn--secondary2">View More <span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
          </div>
          <div className='blog__wrapper'>
            <div className='row g-4'>
              <div className='col-xl-8 col-lg-12'>
                <div className='blog__large brand1-bg-2'>
                  <div className='blog__large-thumb'>
                    <img src='/images/blog/home2/1.png' alt='blog image' />
                  </div>
                  <div className='blog__large-content'>
                    <Link href=''>
                      <span><FontAwesomeIcon icon={faCalendarDays} /> </span>
                      30 December 2024
                    </Link>
                    <h5>
                      <Link href='/blog-details'>Step By Step To Conduct Usability Testing </Link>
                    </h5>
                    <p>Sed do eiusmod temporincididunt ut labore et dolore magan aliqua. Dolor amet, consectetur adipiscingSed temporincididunt dolore mag aliqua. Dolor sit amet.</p>
                    <div className='blog__author'>
                      <div className='blog__author-thumb'>
                        <img src='images/testimonial/home1/1.png' />
                      </div>
                      <div className='blog__author-designation'>
                        <h6>Leslie Alexander</h6>
                        <span>Frontend Designer</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className='col-xl-4 col-md-6'>
                <div className='blog__item'>
                  <div className='blog__item-inner'>
                    <div className='blog__thumb'>
                      <img src='/images/blog/home2/2.png' alt='blog-images' />
                    </div>
                    <div className='blog__content'>
                      <h5>
                        <Link href='/blog-details'>Full-Stack Web Development — the Complete Roadmap</Link>
                      </h5>
                      <div className='blog__writer'>
                        <img src='/images/testimonial/home1/2.png' alt='writer' />
                        <div className='blog__writer-designation'>
                          <p>Rassel Hossain</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-md-6'>
                <div className='blog__item'>
                  <div className='blog__item-inner'>
                    <div className='blog__thumb'>
                      <img src='/images/blog/home2/3.png' alt='blog Images' />
                    </div>
                    <div className='blog__content'>
                      <h5><Link href='/blog-details'>How to experience powerful education free of charge</Link></h5>
                      <div className='blog__writer'>
                        <img src='/images/testimonial/home1/3.png' alt='writer' />
                        <div className='blog__writer-designation'>
                          <p>Ralph Edwards</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className='col-xl-4 col-md-6'>
                <div className='blog__item'>
                  <div className='blog__item-inner'>
                    <div className='blog__thumb'>
                      <img src='/images/blog/home2/4.png' alt='blog Images' />
                    </div>
                    <div className='blog__content'>
                      <h5><Link href='/blog-details'>The ultimate guide to proper use of animation in UX</Link></h5>
                      <div className='blog__writer'>
                        <img src='/images/testimonial/home1/4.png' alt='writer' />
                        <div className='blog__writer-designation'>
                          <p>Ronald Richards</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className='col-xl-4 col-md-6'>
                <div className='blog__item'>
                  <div className='blog__item-inner'>
                    <div className='blog__thumb'>
                      <img src='/images/blog/home2/5.png' alt='blog Images' />
                    </div>
                    <div className='blog__content'>
                      <h5><Link href='/blog-details'>10 Ways Improve Dropdowns in UI & UX Design</Link></h5>
                      <div className='blog__writer'>
                        <img src='/images/testimonial/home1/5.png' alt='writer' />
                        <div className='blog__writer-designation'>
                          <p>Jacob Jones</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog