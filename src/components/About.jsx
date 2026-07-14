const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Rajesh K, a Computer Science and Engineering student at
              Rajalakshmi Engineering College, graduating in 2027. I enjoy
              building practical software applications and learning how
              different technologies work together to solve real-world
              problems.
            </p>

            <p>
              My main interest is full-stack development. I have worked with
              React.js, Node.js, Express.js, MongoDB, JavaScript, and REST APIs
              to build complete web applications. One of my main projects is a
              Smart Interview Scheduling System that handles candidate
              management, interview scheduling, role-based access, and
              feedback tracking.
            </p>

            <p>
              I have also explored artificial intelligence and computer vision
              through SmellSense AI, a food freshness detection system. I enjoy
              learning new technologies, improving my problem-solving skills,
              and turning ideas into working applications.
            </p>
          </div>

          <div className="about-card">
            <div className="about-detail">
              <span>Name</span>
              <p>Rajesh K</p>
            </div>

            <div className="about-detail">
              <span>Degree</span>
              <p>B.E. Computer Science and Engineering</p>
            </div>

            <div className="about-detail">
              <span>College</span>
              <p>Rajalakshmi Engineering College</p>
            </div>

            <div className="about-detail">
              <span>Graduation</span>
              <p>2027</p>
            </div>

            <div className="about-detail">
              <span>Location</span>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className="about-detail">
              <span>Availability</span>
              <p className="available">Open to Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;