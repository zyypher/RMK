import Counter from "../../base/Counter";

const data = [
  {
    icon: "/images/counter/home2/1.png",
    value: "10",
    label: "Online Courses",
    delay: 100,
  },
  {
    icon: "/images/counter/home2/2.png",
    value: "15",
    label: "Our Instructors",
    delay: 100,
  },
  {
    icon: "/images/counter/home2/3.png",
    value: "25",
    label: "Students Learning",
    delay: 70,
  },
  {
    icon: "/images/counter/home2/4.png",
    value: "99",
    label: "Success Rate",
    delay: 10,
  },
];

const Countercheck = (idx) => {
  if (idx === 2) {
    return "M";
  }
  if (idx === 3) {
    return "%";
  } else {
    return "K";
  }
};

const CounterSection = () => {
  return (
    <div className="counter counter--style1 bg--cover" style={{ backgroundImage: "url(/images/counter/home2/bg.png)" }}>
      <div className="container">
        <div className="counter__wrapper">
          <div className="row g-5">
            {data.map((item, idx) => (
              <div key={idx} className="col-md-3 col-6">
                <div
                  className="counter__item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div className="counter__item-inner">
                    <div className="counter__item-thumb">
                      <img src={item.icon} alt="count-icon" />
                    </div>
                    <div className="counter__item-content">
                      <h3>
                        <Counter className="counter purecounter" start={0} end={item.value} data = {data} delay={item.delay}/>
                        {Countercheck(idx)}
                      </h3>
                      <h5>{item.label}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;