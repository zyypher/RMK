// pages/services/assessment.js
import Header from "../../components/headers/Header";
import Footer from "../../components/footers/Footer";
import PageHeader from "../../components/modules/Home/PageHeader";
import Newsletter from "../../components/modules/newsletter/Newsletter";
import CourseCardSimple from "../../components/partials/CourseCardSimple";
import { CATALOG } from "../../api/servicesCatalog";

export async function getStaticProps() {
  const item = CATALOG?.assessment ?? null;
  if (!item) {
    // Clean 404 at build time instead of throwing
    return { notFound: true };
  }
  return { props: { item } };
}

export default function AssessmentPage({ item }) {
  const heading = item?.heading ?? "Assessment";
  const items = Array.isArray(item?.items) ? item.items : [];

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
            {items.map((it, idx) => (
              <div key={it?.id ?? idx} className="col-md-6 col-lg-4">
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
}
