import { FaCode, FaRocket, FaUsers } from "react-icons/fa";
import logo from "../assets/logo.png";

const stats = [
  { icon: <FaUsers />, value: "5+", label: "Years Experience" },
  { icon: <FaRocket />, value: "100+", label: "Projects Delivered" },
  { icon: <FaCode />, value: "10+", label: "Tech Experts" },
];

function Hero() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <p className="eyebrow">SMART IDEAS. SOLID SOLUTIONS</p>
              <h1 className="hero-title">
                We Build Digital Products <span>That Scale.</span>
              </h1>
              <p className="hero-text">
                We are a team of passionate developers delivering high-quality web
                applications, cloud solutions, and IoT systems that drive real
                business growth.
              </p>
              <div className="d-flex gap-3 flex-wrap hero-actions">
                <a href="#services" className="gradient-btn">
                  Our Services <span aria-hidden="true">-&gt;</span>
                </a>
                <a href="#contact" className="outline-btn">
                  Contact Us <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="hero-orbit mx-auto" aria-hidden="true">
                <span className="orb orb-one"></span>
                <span className="orb orb-two"></span>
                <span className="orb orb-three"></span>
                <div className="hero-logo-ring">
                  <img src={logo} alt="NutsALot Logo" className="hero-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="Company statistics">
        <div className="container">
          <div className="stats-box">
            <div className="row g-0">
              {stats.map((item) => (
                <div className="col-lg-4 col-sm-6" key={item.label}>
                  <div className="stat-item">
                    <span className="stat-icon">{item.icon}</span>
                    <div>
                      <h2>{item.value}</h2>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
