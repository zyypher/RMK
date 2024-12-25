import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import Checkout from "../components/modules/Checkout/checkout";
import Newsletter from "../components/modules/newsletter/Newsletter";
const CheckOut = () => {
  return (
    <>
     <Header />
      <PageHeader
        title="Checkout"
        subtitle="Checkout"
        image='images/bg/home1/2.png'
      />
      <Checkout />
      <Newsletter title="Get free Pro memberships for your high school class" />
      <Footer />
    </>
  );
};

export default CheckOut;
