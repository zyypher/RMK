import React from 'react'
const featureList=[
    {
        "image": "https://thetork.com/demos/vue/educax/images/about/home1/3.png",
        "title": "Learn in a Professional Environment",
        "subtitle": "Experience high-quality training sessions conducted in our well-equipped offices. Engage with expert instructors and peers for hands-on, interactive learning."
    },
    {
        "image": "https://thetork.com/demos/vue/educax/images/about/home1/4.png",
        "title": "Expert Trainers",
        "subtitle": "Learn from certified professionals with extensive real-world experience. Our trainers ensure that every session provides practical knowledge and actionable insights."
    },
    {
        "image": "https://thetork.com/demos/vue/educax/images/about/home1/5.png",
        "title": "Dedicated Support Team",
        "subtitle": "Receive personalized assistance from our dedicated team. Whether it's scheduling or accessing course materials, we are here to make your learning experience seamless."
    }
]
const FeaturedSection = () => {
  return (
    <div>
        <div className="feature__wrapper">
        <div className="row g-4">
        {featureList.map((item, index)=>{
            return( 
        <div key={index} className="col-md-4 col-sm-6">
              <div className="feature__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div className="feature__item-inner" style={{minHeight: '486px'}}>
                        <div className="feature__thumb">
                            <img src={item.image} alt="feature-image"/>
                        </div>
                        <div className="feature__content">
                            <h5>{ item.title }</h5>
                            <p className="mb-0">{ item.subtitle }</p>
                        </div>
                    </div>
                </div>

            </div>
            )})}
            </div>
            </div>
       



    </div>
  )
}

export default FeaturedSection