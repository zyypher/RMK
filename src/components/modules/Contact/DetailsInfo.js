import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

const DetailsInfo = ({ locations, selectedLocation, setSelectedLocation }) => {
  const location = locations[selectedLocation];

  return (
    <div>
      <div className="contact__details">
        <div className="contact__header" style={{marginBottom: '2rem'}}>
          <h3>Always Here to Help You</h3>
          <p>
          Choose your nearest location from the dropdown to access tailored contact details and navigate to our office with ease.
          </p>
        </div>

        <div className="contact__dropdown mb-3">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="form-select"
            style={{
              height: "58px",
              marginBottom: "3rem"
            }}
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
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
            </div>
            <div className="contact__item-content">
              <h5>Location</h5>
              <p className="mb-0">{location.address}</p>
            </div>
          </div>
          <div className="contact__item">
            <div className="contact__item-thumb">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
            </div>
            <div className="contact__item-content">
              <h5>Contact</h5>
              <p className="mb-0">{location.phone}</p>
            </div>
          </div>
          <div className="contact__item">
            <div className="contact__item-thumb">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className="contact__item-content">
              <h5>Email</h5>
              <p className="mb-0">{location.email}</p>
            </div>
          </div>
          <div className="contact__item">
            <div className="contact__item-thumb">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
            </div>
            <div className="contact__item-content">
              <h5>Hours of Operation</h5>
              <p className="mb-0">{location.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
