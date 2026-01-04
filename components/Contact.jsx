import { useState } from "react";
import "./Contact.css";

export function Contact() {
    const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        if (!WEB3FORMS_KEY) {
            setSubmitStatus("error");
            setIsSubmitting(false);
            console.error("Missing Web3Forms access key (VITE_WEB3FORMS_KEY)");
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p className="contact-intro">
                            I'm always interested in hearing about new projects
                            and opportunities. Feel free to reach out if you
                            want to discuss anything!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:mdsourav.ru@gmail.com">
                                        mdsourav.ru@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+8801835387453">
                                        +880 1835 387 453
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Mukterpur, Munshiganj, Dhaka</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/md-sourav-7ba271230/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon linkedin"
                                    aria-label="LinkedIn"
                                    title="LinkedIn"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://web.facebook.com/md.sourav.10690/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon facebook"
                                    aria-label="Facebook"
                                    title="Facebook"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {submitStatus === "success" && (
                                <p className="success-message">
                                    ✅ Message sent successfully! I'll get back
                                    to you soon.
                                </p>
                            )}

                            {submitStatus === "error" && (
                                <p className="error-message">
                                    ❌ Oops! Something went wrong. Please try
                                    again or email me directly.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>
                    &copy; {new Date().getFullYear()} Md.Sourav. All rights
                    reserved.
                </p>
            </footer>
        </section>
    );
}
