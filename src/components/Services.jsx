import {
  FaCloud,
  FaCode,
  FaLayerGroup,
  FaMicrochip,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Responsive, fast and modern websites built with the latest technologies.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Development",
    text: "End-to-end web applications using MERN stack and modern frameworks.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & AWS",
    text: "Scalable cloud solutions with AWS for deployment, security and performance.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Applications",
    text: "Cross-platform mobile apps for iOS and Android using React Native.",
  },
  {
    icon: <FaMicrochip />,
    title: "IoT Solutions",
    text: "Smart IoT systems, device integration, automation and real-time monitoring.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    text: "Application maintenance, bug fixes, performance optimization and support.",
  },
];

function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container">
        <div className="text-center section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <article className="service-card h-100">
                <div className="service-icon">{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#contact" className="gradient-btn">
            View All Services <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
