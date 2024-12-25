import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
const categoryListFour= [
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/1.png",
        "title": "LANGUAGES"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/2.png",
        "title": "MUSIC"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/3.png",
        "title": "EDUCATION"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/4.png",
        "title": "TOYS"
    }
]
const Categories = () => {
  return (
    <div>
        <div className='categories categories--style4 padding-top'>
            <div className='container'>
      <div className="categories__wrapper">
        <div className="row g-4">
        {categoryListFour.map((item,index)=>{
            return(
            <div key={index} className="col-lg-3 col-sm-6">
                <div className="categories__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div className="categories__item-inner">
                        <img src={item.icon} alt="category icon"/>
                        <div className="categories__item-content">
                            <h5 className="style4">{ item.title }</h5>
                            <p>There are many variations of passag of Lorem Ipsum available, but the majority
                                have suffered alteration in some.</p>
                            <Link href="/course-category" className="trk-btn trk-btn--rounded trk-btn--secondary4">{"View More "}
                                <span><FaArrowRight /></span> </Link>
                        </div>
                    </div>
                </div>
            </div>

            )})}
        </div>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Categories