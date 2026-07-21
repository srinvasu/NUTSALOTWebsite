import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <section className="contact-banner" id="contact">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-lg-8 d-flex align-items-center gap-3">
              <div className="chat-icon">...</div>
              <div>
                <h2>Let's Build Something Amazing Together</h2>
                <p>Have a project in mind? Let's discuss and bring your ideas to life.</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="mailto:info@nutsalot.com" className="outline-dark-btn">
                Contact Us Today <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="footer-brand">
                <img src={logo} alt="NutsALot Logo" className="footer-logo" />
                <div>
                  <h3>NutsALot</h3>
                  <span>SMART IDEAS. SOLID SOLUTIONS</span>
                </div>
              </div>
              <p>We build digital products that help businesses grow and succeed.</p>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#tech">Technologies</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4>Services</h4>
              <a href="#services">Web Development</a>
              <a href="#services">Full Stack Development</a>
              <a href="#services">Cloud & AWS</a>
              <a href="#services">IoT Solutions</a>
              <a href="#services">Maintenance & Support</a>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4>Contact Info</h4>
              <p><FaEnvelope /> nutsalot.tech@gmail.com</p>
              <p><FaPhoneAlt /> +91 9866931750</p>
              <p><FaMapMarkerAlt /> Vijayawada, India</p>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#home" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#home" aria-label="GitHub"><FaGithub /></a>
                <a href="#home" aria-label="Twitter"><FaTwitter /></a>
                <a href="#home" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 NutsALot Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
