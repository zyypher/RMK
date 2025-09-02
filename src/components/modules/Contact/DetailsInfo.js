import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

const DetailsInfo = ({ locations, selectedLocation, setSelectedLocation }) => {
  const location = locations[selectedLocation];
  const emails = Array.isArray(location.emails) ? location.emails : [location.emails || location.email].filter(Boolean);

  return (
    <div className="contact__details">
      <div className="contact__header" style={{ marginBottom: "1rem" }}>
        <h3 className="title-lg mb-2">Always Here to Help You</h3>
        <p className="body-md mb-0">
          Choose your nearest location from the dropdown to access tailored contact details and
          navigate to our office with ease.
        </p>
      </div>

      <div className="contact__dropdown mb-3">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="form-select"
          style={{ height: "56px", marginBottom: "1.25rem" }}
        >
          {Object.keys(locations).map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="contact__info">
        <div className="contact__item">
          <div className="contact__item-thumb">
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
          </div>
          <div className="contact__item-content">
            <h5 className="title-sm">Location</h5>
            <p className="mb-0 body-md">{location.address}</p>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__item-thumb">
            <span><FontAwesomeIcon icon={faPhone} /></span>
          </div>
          <div className="contact__item-content">
            <h5 className="title-sm">Contact</h5>
            <p className="mb-0 body-md">{location.phone}</p>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__item-thumb">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
          <div className="contact__item-content">
            <h5 className="title-sm">Email</h5>
            <p className="mb-0 body-md">
              {emails.map((em, i) => (
                <span key={em}>
                  <a href={`mailto:${em}`}>{em}</a>{i < emails.length - 1 ? " • " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__item-thumb">
            <span><FontAwesomeIcon icon={faClock} /></span>
          </div>
          <div className="contact__item-content">
            <h5 className="title-sm">Hours of Operation</h5>
            <p className="mb-0 body-md">{location.hours}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .title-lg { font-size: 1.375rem; line-height: 1.3; font-weight: 700; }
        .title-sm { font-size: 1.05rem; line-height: 1.25; font-weight: 600; }
        .body-md  { font-size: 1rem;   line-height: 1.6; }
        .contact__item-content p,
        .contact__item-content a { font-size: 1rem; }
        .contact__item-thumb span {
          display: inline-flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 999px;
        }
      `}</style>
    </div>
  );
};

export default DetailsInfo;
