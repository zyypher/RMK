import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


const DetailsInfo = () => {
    return (
        <div>
            <div className=" cotact__details">
                <div className="contact__header">
                    <h3>Always Here to Help you</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humor, or randomized words which don't
                        look
                        even slightly believable.</p>
                </div>

                <div className="contact__info">
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Location</h5>
                            <p className="mb-0">4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Contact</h5>
                            <p className="mb-0">(405) 555-0128</p>
                            <p className="mb-0">(603) 555-0123</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Email</h5>
                            <p className="mb-0">support@thetork.com</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faClock} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Hours of operation</h5>
                            <p className="mb-0">Monday - Friday: 09.00 - 20.00</p>
                            <p className="mb-0">Sunday & Saturday: 10.30 - 22..30</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DetailsInfo