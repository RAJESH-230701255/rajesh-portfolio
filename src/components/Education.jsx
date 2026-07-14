const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="section-container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <div className="education-year">
            <span>2023</span>
            <div className="education-line"></div>
            <span>2027</span>
          </div>

          <div className="education-content">
            <span className="education-status">Currently Pursuing</span>

            <h3>B.E. Computer Science and Engineering</h3>

            <p className="education-college">
              Rajalakshmi Engineering College
            </p>

            <p className="education-description">
              Currently pursuing a B.E. in Computer Science and Engineering,
              with hands-on experience in full-stack development, artificial
              intelligence, computer vision, and software development through
              academic projects and industry internships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;