'use client'
import { useState } from "react";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          projectType: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit} className="row">
              {status === "success" && (
                <Div className="col-sm-12">
                  <div className="alert alert-success" style={{ backgroundColor: "#d4edda", color: "#155724", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
                    <strong>Success!</strong> Your message has been sent successfully. We will get back to you soon.
                  </div>
                </Div>
              )}
              {status === "error" && (
                <Div className="col-sm-12">
                  <div className="alert alert-danger" style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
                    <strong>Error!</strong> {errorMessage}
                  </div>
                </Div>
              )}
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" name="projectType" value={formData.projectType} onChange={handleChange} required className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" disabled={status === "loading"} className="cs-btn cs-style1">
                  <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3627836924043!2d55.152871999999995!3d25.089578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6dea2dda75%3A0x1c332af55b2aae04!2sMedia%20OnClick%20(MOC)!5e0!3m2!1sen!2sae!4v1750238801447!5m2!1sen!2sae"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
