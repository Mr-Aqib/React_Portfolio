import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0c1sjp", // replace with your EmailJS service ID
        "template_kn1x7in", // replace with your EmailJS template ID
        form.current,
        "OUFlhANIGz7-8EE44" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send Message");
        }
      );

    e.target.reset();
  };

  return (
    <section className="py-5 contact-from-con">
      <div className="container">
        <div className="row g-4">
          {/* Left Info Section */}
          <div className="col-lg-6">
            <div className="mb-4">
              <span className=" fw-semibold">Contact Us</span>
              <h2 className="mb-3 fw-bold text-uppercase">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-secondary">
                I welcome connections for potential job roles, freelance
                projects, or collaborations. You can reach me anytime via email
                or phone
              </p>
            </div>

            {/* Location */}
            <div className="d-flex mb-3 contact-icon-box">
              <div
                className="flex-shrink-0 contact-icon-div bg-opacity-10 rounded d-flex align-items-center justify-content-center me-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaLocationArrow size={20} />
              </div>
              <div>
                <h5 className="mb-1">Location</h5>
                <p className="mb-0">Saudi Arabia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="d-flex mb-3 contact-icon-box">
              <div
                className="flex-shrink-0 contact-icon-div bg-opacity-10 rounded d-flex align-items-center justify-content-center me-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaPhone size={20} />
              </div>
              <div>
                <h5 className="mb-1">Phone Number</h5>
                <p className="mb-0">(+92) 503091340</p>
              </div>
            </div>

            {/* Email */}
            <div className="d-flex mb-3 contact-icon-box">
              <div
                className="flex-shrink-0 contact-icon-div bg-opacity-10 rounded d-flex align-items-center justify-content-center me-3"
                style={{ width: "60px", height: "60px" }}
              >
                <MdEmail size={30} />
              </div>
              <div>
                <h5 className="mb-1">Email Address</h5>
                <p className="mb-0">muhammadaqib1422@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-lg-6">
            <div className=" card shadow-sm p-4">
              <form className="" ref={form} onSubmit={sendEmail}>
                {/* Email */}
                <ContactInputBox
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                {/* Subject */}
                <ContactInputBox
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                {/* Name */}
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
                {/* Message */}
                <ContactTextArea
                  row="6"
                  name="message"
                  placeholder="Your Message"
                  defaultValue=""
                />
                <div>
                  <button type="submit" className="btn btn-dark w-100">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

// Input Component
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control"
        required
      />
    </div>
  );
};

// Textarea Component
const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-3">
      <textarea
        rows={row}
        name={name}
        placeholder={placeholder}
        className="form-control"
        defaultValue={defaultValue}
        required
      ></textarea>
    </div>
  );
};
