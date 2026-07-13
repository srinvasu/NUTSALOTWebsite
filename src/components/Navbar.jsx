import logo from "../assets/logo.png";

function Navbar() {
  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Technologies", "#tech"],
    ["About Us", "#about"],
    ["Contact Us", "#contact"],
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home" aria-label="NutsALot home">
          <img src={logo} alt="NutsALot Logo" className="nav-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {links.map(([label, href], index) => (
              <li className="nav-item" key={label}>
                <a className={`nav-link ${index === 0 ? "active" : ""}`} href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="gradient-btn nav-cta">
            Let's Talk <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
