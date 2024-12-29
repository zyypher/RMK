import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const categoryListThree = [
    {
        "icon": "/images/new/food-and-safety.webp",
        "title": "Food Safety"
    },
    {
        "icon": "/images/new/health-and-safety.webp",
        "title": "Health & Safety"
    },
    {
        "icon": "/images/new/pest-control.webp",
        "title": "Pest Control"
    },
    {
        "icon": "/images/new/haccp.webp",
        "title": "HACCP & ISO Standards"
    },
    {
        "icon": "/images/new/first-aid.webp",
        "title": "First Aid"
    },
    {
        "icon": "/images/new/consultancy.webp",
        "title": "Consultancy & Audits"
    }
]
const Categories = () => {
    return (
        <div>
            <section className='categories categories--style3 padding-top padding-bottom'>
                <div className="container aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="categories__wrapper">
                        <div className="row g-4">
                            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12">
                                <div className="categories__header" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                    <div className="subtitle subtitle--style3">
                                        <img src="/images/icon/home3/1.png" alt="star icon" />
                                        <p className="mb-0">Courses Details</p>
                                    </div>
                                    <h2>Explore Our Categories</h2>
                                    <p className="style3">Discover a wide range of professional training courses designed to meet your needs. From food safety to health and safety, find the perfect program to elevate your skills and career.</p>

                                    <Link href="/courses" className="trk-btn trk-btn--secondary3"> All
                                        Categories <span> <FontAwesomeIcon icon={faArrowRight} /></span> </Link>
                                </div>

                            </div>
                            {categoryListThree.map((item, index) => {
                                return (
                                    <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-6">
                                        <div className="categories__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                            <div className="categories__item-inner">
                                                <div className="categories__item-thumb">
                                                    <img src={item.icon} alt="course icon" style={{
                                                        width: "312px",
                                                        height: "266px"
                                                    }} />
                                                </div>
                                                <div className="categories__item-content">
                                                    <div className="stretched-link active" style={{ fontWeight: 600 }}>{item.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories