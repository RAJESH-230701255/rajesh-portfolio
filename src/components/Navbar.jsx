const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Name and CV Download */}
        <div className="nav-brand">
          <a href="#home" className="logo">
            Rajesh K
          </a>

          <a
            href="/resume/Rajesh_K_Resume.pdf"
            download="Rajesh_K_Resume.pdf"
            className="resume-btn"
            aria-label="Download Rajesh K CV"
          >
            Download CV
            <span className="download-icon">↓</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;