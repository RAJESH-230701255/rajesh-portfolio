const Experience = () => {
  const experiences = [
    {
      role: "Frontend Web Development - Project Intern",
      company: "Hyundai Motor India Limited",
      duration: "16 June 2025 - 30 June 2025",
      description:
        "Worked as part of the IT Autoever team to develop front-end interfaces for a Room Management System and Intern Mail Management Application. Collaborated with the team to understand requirements, implement web modules, and improve operational workflows. Recognized with a team performance award for my contribution to the project.",
      tags: [
        "Frontend Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Team Collaboration",
      ],
      certificate: "/certificates/hyundai-internship-certificate.pdf",
    },

    {
      role: "Web Development Intern",
      company: "Ecokoshine Carbon Private Limited",
      duration: "2 Weeks",
      description:
        "Gained hands-on experience in web development by designing and developing a company website. Worked on creating responsive web pages and improving the overall user experience while understanding how web development is applied in a real-world business environment.",
      tags: [
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      certificate: "/certificates/ecokoshine-internship-certificate.pdf",
    },
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">
        <p className="section-label">My journey so far</p>
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>

                  <p className="experience-company">
                    {experience.company}
                  </p>
                </div>

                <span className="experience-duration">
                  {experience.duration}
                </span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={experience.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;