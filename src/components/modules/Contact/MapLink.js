const MapLink = ({ locations, selectedLocation }) => {
  const location = locations[selectedLocation];

  return (
    <div>
      <div className="contact padding-bottom">
        <div className="container" data-aos="fade-up" data-aos-duration="800">
          <div className="contact__map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  className="map"
                  src={location.map}
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLink;
