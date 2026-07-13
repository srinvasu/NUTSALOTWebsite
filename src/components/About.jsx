import { FaCheckCircle, FaPlay } from "react-icons/fa";

const points = [
  "Agile Development",
  "Clean & Maintainable Code",
  "On-time Delivery",
  "Client Satisfaction",
  "Scalable Solutions",
  "24/7 Support",
];

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="about-visual">
              <div className="about-code-note">
                Code.
                <br />
                Build.
                <br />
                Repeat.
              </div>
              <button className="play-btn" aria-label="Play company video">
                <FaPlay />
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="eyebrow">ABOUT US</p>
            <h2 className="section-title">
              Experienced Developers. Innovative Solutions.
            </h2>
            <p className="section-copy">
              NutsALot is a team of experienced developers, cloud engineers, and
              IoT experts committed to delivering innovative digital solutions.
              We turn ideas into real-world products.
            </p>

            <div className="row g-2 about-list">
              {points.map((point) => (
                <div className="col-sm-6" key={point}>
                  <span>
                    <FaCheckCircle /> {point}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="gradient-btn mt-4">
              Learn More About Us <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
