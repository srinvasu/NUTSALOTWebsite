import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

const technologies = [
  { icon: <FaReact />, name: "React", className: "react" },
  { icon: <FaNodeJs />, name: "Node.js", className: "node" },
  { icon: <FaJs />, name: "JavaScript", className: "js" },
  { icon: <SiTypescript />, name: "TypeScript", className: "ts" },
  { icon: <FaAws />, name: "AWS", className: "aws" },
  { icon: <SiMongodb />, name: "MongoDB", className: "mongo" },
  { icon: <FaDocker />, name: "Docker", className: "docker" },
  { icon: <FaGitAlt />, name: "Git", className: "git" },
];

function Technologies() {
  return (
    <section className="tech-section section-pad" id="tech">
      <div className="container">
        <div className="row align-items-end gy-3 mb-4">
          <div className="col-lg-6">
            <p className="eyebrow">TECHNOLOGIES</p>
            <h2 className="section-title">Technologies We Use</h2>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="section-copy mb-0">
              We use modern technologies and tools to build scalable, secure and
              maintainable solutions.
            </p>
          </div>
        </div>

        <div className="row g-3">
          {technologies.map((tech) => (
            <div className="col-lg-3 col-md-4 col-6 tech-col" key={tech.name}>
              <div className="tech-card">
                <span className={`tech-icon ${tech.className}`}>{tech.icon}</span>
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
