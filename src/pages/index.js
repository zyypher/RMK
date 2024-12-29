
import Footerthree from '../components/footers/Footerthree'
import Headerthree from '../components/headers/Headerthree'
import Preloader from '../components/headers/Preloader/Preloader'
import Categories from '../components/modules/Home3/Categories'
import BannerContent from '../components/modules/Home3/BannerContent'
import Partners from '../components/modules/Home3/Partners'
import PopularCourse from '../components/modules/Home3/PopularCourse'
import CounterThree from '../components/modules/Home3/CounterThree'
import About from '../components/modules/Home3/About'
import ExpertMentors from '../components/modules/Home3/ExpertMentors'
import Blogs from '../components/modules/Home3/Blogs'
import Students from '../components/modules/Home3/Students'

export default function Home() {
  return (
    <>
      <Preloader className={"preloader--style3"} />
      <Headerthree />
      <BannerContent />
      <Partners />
      <Categories />
      <About />
      <PopularCourse />
      <CounterThree />
      {/* <ExpertMentors /> */}
      {/* <Students /> */}
      <Blogs />
      <Footerthree />
    </>
  )
}


