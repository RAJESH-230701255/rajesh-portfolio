const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C++", "PHP (Basic)"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "Git", "GitHub", "VS Code"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "TensorFlow",
        "ONNX Runtime",
        "Computer Vision",
        "HSV Image Analysis",
      ],
    },
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;