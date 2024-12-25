import MentorCard from '../../base/MentorCard'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const mentors= [
    {
        "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/3.png",
        "name": "Jerome Bell",
        "role": "Web developer"
    },
    {
        "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/4.png",
        "name": "Marvin McKi",
        "role": "Marketer"
    },
    {
        "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/5.png",
        "name": "Darrell Bell",
        "role": "UX Designer"
    },
    {
        "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/6.png",
        "name": "Devon Lane",
        "role": "Graphic Designer"
    }]
const Mentor = () => {
  return (
    <div>
      <div className='team team--style1 padding-top padding-bottom brand2-bg-2'>
        <div className='container'>
<div className="section-header text-center section-header--dark">
        <h2>Meet with Our Expert Mentors</h2>
        <p className="style2">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. duis enim velit
            mollit.
            Exercitation veniam consequat.</p>
    </div>
    <div className="team__wrapper">
        <div className="row g-4 justify-content-center">
        {mentors.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
          <div className="team__item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <MentorCard data={item} />
          </div>
        </div>
      ))}
        </div>
        <div className="text-center">
            <Link href="/mentors" className="trk-btn trk-btn--border trk-btn--primary2 mt-5">Expert Mentors  
                <span> <FontAwesomeIcon icon={faArrowRight} /></span> </Link>
        </div>
    </div>
    </div>
</div>
</div>
  )
}

export default Mentor