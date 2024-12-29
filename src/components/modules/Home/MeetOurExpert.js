import Image from 'next/image';

const MeetOurExpert = () => {
   return (
      <section
         className="team team--style1 padding-bottom"
         data-aos="fade-up"
         data-aos-duration="800"
      >
         <div className="container">
            <div className="row align-items-center padding-top">
               {/* Left Side: Text Section */}
               <div className="col-md-6 col-sm-12">
                  <div className="team__header">
                     <h2>Our Legacy</h2>
                     <p className="style3">
                        At RMK Experts, we honor the legacy of our late founder, Dr. Rafiq Al Khatib, whose unparalleled expertise in food production and safety continues to guide us. With a strong foundation built on his vision, we deliver tailored training programs and top-tier consultancy services that uphold the highest standards of technical excellence and practical implementation.
                     </p>
                     <h2 className="mt-4">Our Global Reach</h2>
                     <p className="style3">
                        Training programs conducted in 7 languages: Arabic, English, Malayalam, Bengali, Nepali, Hindi, and Urdu. Proudly trained over 700,000 professionals to date.
                     </p>
                  </div>
               </div>
               {/* Right Side: Image Section */}
               <div className="col-md-6 col-sm-12 text-center">
                  <Image
                     src="/images/new/about-2.png" // Replace with the actual image path
                     alt="Our Experts"
                     width={500}
                     height={500}
                     className="img-fluid"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default MeetOurExpert;
