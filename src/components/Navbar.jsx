const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo + Download CV */}
        <div className="nav-brand">
          <a href="#home" className="logo">
            Rajesh K
          </a>

          <a
            href="/resume/Rajesh_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            aria-label="Open Rajesh K CV"
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
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;