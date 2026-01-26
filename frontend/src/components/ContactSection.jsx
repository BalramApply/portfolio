import React, { useState, useRef, useEffect } from "react";
import "./ContactSection.css";

export const ContactSection = () => {



  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 5000);
    return () => clearTimeout(timer);
  }
}, [submitted]);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.from_name || !formData.from_email || !formData.message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.from_email)) {
    alert("Please enter a valid email address.");
    return;
  }

  setSending(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "8a91f185-efd4-442b-85da-ba7fc1198364");
    formDataToSend.append("name", formData.from_name);
    formDataToSend.append("email", formData.from_email);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setFormData({ from_name: "", from_email: "", message: "" });
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Web3Forms Error:", error);
    alert("❌ Failed to send message.");
  } finally {
    setSending(false);
  }
};



  return (
    <section className="contact-section" id="contact">
      
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">Feel free to drop me a message!</p>
      </div>

      <div className="contact-container">
        
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-button" disabled={sending}>
            {sending ? (
              <span className="airplane-animation">
                <i className="fa-solid fa-paper-plane"></i>
                <span className="sending-text">Sending...</span>
              </span>
            ) : (
              "Send Message"
            )}
          </button>



          {submitted && (
            <p className="contact-success">Success! Your message is on its way. <i className="fa-solid fa-circle-check"></i> </p>
          )}
        </form>

        <div className="contact-info">
          
          <h1>Let's Connect!</h1>
          <div className="contact-socials">
            <a
              href="https://github.com/BalramApply"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/balram-patel-185aa526a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
   </section>
  );
};
