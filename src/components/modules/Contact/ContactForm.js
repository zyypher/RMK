import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="contact__form">
      <h3>Let’s Connect and Get Started</h3>
      <p>
        Have questions or need assistance? Share your details, and our team will reach out to you
        shortly. We're here to help you every step of the way!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="account__form">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="John Doe"
                {...register("name")}
              />
              {errors.name && <div className="invalid-tooltip">{errors.name.message}</div>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-group">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <div className="invalid-tooltip">{errors.email.message}</div>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                placeholder="Enter number"
                {...register("phone")}
              />
              {errors.phone && <div className="invalid-tooltip">{errors.phone.message}</div>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-group">
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows="4"
                placeholder="Write a message..."
                {...register("message")}
              ></textarea>
              {errors.message && <div className="invalid-tooltip">{errors.message.message}</div>}
            </div>
          </div>
        </div>
        <button type="submit" className="trk-btn trk-btn--rounded trk-btn--secondary1" style={{ marginTop: '2rem'}}>
          Send Message
        </button>
      </form>

      {formStatus === "success" && (
        <div className="alert alert-success mt-3">Message sent successfully!</div>
      )}
      {formStatus === "error" && (
        <div className="alert alert-danger mt-3">Something went wrong. Please try again.</div>
      )}
    </div>
  );
};

export default ContactForm;
