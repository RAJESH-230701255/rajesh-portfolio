const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container contact-container">
        <p className="section-label">What's next?</p>

        <h2 className="contact-title">
          Let's <span>Connect.</span>
        </h2>

        <p className="contact-description">
          I'm currently open to software development opportunities where I can
          apply my skills, learn from experienced teams, and contribute to
          meaningful projects. Feel free to reach out if you'd like to connect
          or discuss an opportunity.
        </p>

        <div className="contact-links">

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rajeshkannappan020@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">✉</div>

            <div className="contact-info">
              <span>Email</span>
              <p>rajeshkannappan020@gmail.com</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rajesh-kannappan-96714b437/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">in</div>

            <div className="contact-info">
              <span>LinkedIn</span>
              <p>linkedin.com/in/rajeshkannappan</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/RAJESH-230701255"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">&lt;/&gt;</div>

            <div className="contact-info">
              <span>GitHub</span>
              <p>github.com/RAJESH-230701255</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

        </div>

        {/* Say Hello Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajeshkannappan020@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Say Hello
          <span>→</span>
        </a>

      </div>
    </section>
  );
};

export default Contact;