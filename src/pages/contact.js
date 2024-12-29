import React, { useState } from "react";
import ContactForm from "../components/modules/Contact/ContactForm";
import DetailsInfo from "../components/modules/Contact/DetailsInfo";
import MapLink from "../components/modules/Contact/MapLink";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";

const locations = {
  "Dubai": {
    address: "Single Business Tower, 206 Sheikh Zayed Rd, Business Bay, Dubai",
    phone: "+971 4 380 6674",
    email: "hello@rmkexperts.com",
    hours: "Monday - Friday: 09.00 - 20.00, Saturday & Sunday: 10.00 - 22.00",
    map: "https://maps.google.com/maps?q=dubai&t=&z=10&ie=UTF8&iwloc=&output=embed",
  },
  "Abu Dhabi": {
    address: "Office 12, XYZ Tower, Abu Dhabi",
    phone: "+971 4 123 4567",
    email: "abudhabi@rmkexperts.com",
    hours: "Monday - Friday: 08.00 - 18.00, Closed on Saturday & Sunday",
    map: "https://maps.google.com/maps?q=abu+dhabi&t=&z=10&ie=UTF8&iwloc=&output=embed",
  },
  "Sharjah": {
    address: "Al Majaz Building, Office 301, Sharjah",
    phone: "+971 4 987 6543",
    email: "sharjah@rmkexperts.com",
    hours: "Monday - Friday: 09.00 - 19.00, Closed on Saturday & Sunday",
    map: "https://maps.google.com/maps?q=sharjah&t=&z=10&ie=UTF8&iwloc=&output=embed",
  },
};

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");

  return (
    <>
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Contact Us"
        image="images/new/contact-banner.png"
      />

      <div className="contact padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5 scroll-component">
              <div className="col-lg-6" data-aos="fade-right">
                <DetailsInfo
                  locations={locations}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapLink locations={locations} selectedLocation={selectedLocation} />

      <Newsletter title="Reach Out for Expert Guidance Today" />

      <Footer />
    </>
  );
};

export default Contact;
