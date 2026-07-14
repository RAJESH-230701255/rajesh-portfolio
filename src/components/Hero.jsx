const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-intro">
          ● Open to Software Development Opportunities
        </p>

        <h1>
          Hi, I'm <span>Rajesh K.</span>
        </h1>

        <h2>
          I build full-stack applications and AI-powered solutions.
        </h2>

        <p className="hero-description">
          I'm a B.E. Computer Science and Engineering student at Rajalakshmi
          Engineering College, graduating in 2027. I enjoy building practical
          software solutions using modern web technologies and artificial
          intelligence.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;