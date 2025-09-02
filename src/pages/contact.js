import React, { useState } from "react";
import ContactForm from "../components/modules/Contact/ContactForm";
import DetailsInfo from "../components/modules/Contact/DetailsInfo";
import OfficesGrid from "../components/modules/Contact/OfficesGrid";
import MapLink from "../components/modules/Contact/MapLink";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";

const sharedEmails = ["admin@rmktheexperts.com", "ghada@rmktheexperts.com"];

const locations = {
  Dubai: {
    address: "206, Single Business Tower, Business Bay, Dubai",
    phone: "052 373 8711, +971 4 3806674",
    emails: sharedEmails,
    hours: "Monday - Friday: 09.00 - 20.00, Saturday & Sunday: 10.00 - 22.00",
    map: "https://maps.google.com/maps?q=Single%20Business%20Tower%20Business%20Bay%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  "Abu Dhabi": {
    address:
      "1404, Abdulla Bin Darwish ALKetbi Building, Salam Street, Corner Hamdan Street, Abu Dhabi",
    phone: "+971 2 6738340, 052 995 1429",
    emails: sharedEmails,
    hours: "Monday - Friday: 08.00 - 18.00, Closed on Saturday & Sunday",
    map: "https://maps.google.com/maps?q=Hamdan%20Street%20Abu%20Dhabi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  "Al Ain": {
    address:
      "08, Bismi Store Building, 2nd Floor, Sultan Bin Zayed Road, opposite to fish market, Al Ain",
    phone: "+971 3 7646104, 058 107 5922",
    emails: sharedEmails,
    hours: "Monday - Friday: 09.00 - 19.00, Closed on Saturday & Sunday",
    map: "https://maps.google.com/maps?q=Sultan%20Bin%20Zayed%20Road%20Al%20Ain&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};

// Extra offices to show as cards in the grid
const extraOffices = [
  {
    city: "Sharjah",
    address: "The Business Centre, Sharjah Publishing City SPC Free Zone",
    phone: "052 373 8711",
    emails: sharedEmails,
  },
  {
    city: "Ras Al Khaimah",
    address:
      "The Business Centre, Compass Building, RAKEZ, Al Shohada Road, Al Hamra Industrial Zone-FZ",
    phone: "052 373 8711",
    emails: sharedEmails,
  },
];

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");

  // Build the grid dataset (main 3 + extra)
  const officeCards = [
    ...Object.entries(locations).map(([city, data]) => ({
      city,
      address: data.address,
      phone: data.phone,
      emails: data.emails,
    })),
    ...extraOffices,
  ];

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
          {/* Row 1: Left details + Right form */}
          <div className="contact__wrapper">
            <div className="row g-5">
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

          {/* Row 2: NEW full-width grid of all offices */}
          <div className="row mt-5">
            <div className="col-12">
              <OfficesGrid offices={officeCards} />
            </div>
          </div>
        </div>
      </div>

      {/* Map (still below everything) */}
      <MapLink locations={locations} selectedLocation={selectedLocation} />

      <Newsletter title="Reach Out for Expert Guidance Today" />
      <Footer />
    </>
  );
};

export default Contact;
