// pages/services/consultancy-implementation-audits.js
import Header from "../../components/headers/Header";
import Footer from "../../components/footers/Footer";
import PageHeader from "../../components/modules/Home/PageHeader";
import Newsletter from "../../components/modules/newsletter/Newsletter";
import CourseCardSimple from "../../components/partials/CourseCardSimple";
import { CATALOG } from "../../api/servicesCatalog";

const ConsultancyPage = () => {
  const { heading, items } = CATALOG.consultancy;

  return (
    <>
      <Header />
      <PageHeader
        title={heading}
        subtitle="Services"
        image="/images/new/courses-banner.png"
      />

      <section className="padding-top padding-bottom">
        <div className="container">
          <div className="row g-4">
            {items.map((it) => (
              <div key={it.id} className="col-md-6 col-lg-4">
                <CourseCardSimple data={it} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
          <Newsletter title="Reach Out for Expert Guidance Today" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ConsultancyPage;
