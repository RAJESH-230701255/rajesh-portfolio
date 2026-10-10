
const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Smart Interview Scheduling System",
      category: "Full-Stack Web Application",
      description:
        "A full-stack recruitment platform designed to simplify the interview scheduling process. The system provides role-based dashboards for Admins, HR professionals, and Interviewers to manage candidates, schedule interviews, track progress, and submit feedback.",
      highlights: [
        "Role-based authentication for Admin, HR, and Interviewer",
        "Candidate management and interview scheduling",
        "Interview feedback and recruitment progress tracking",
        "REST API integration with MongoDB database",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs",
      ],
      github:
        "https://github.com/RAJESH-230701255/smart-interview-scheduling",
      live:
        "https://smart-interview-scheduling.vercel.app",
    },
    {
      number: "02",
      title: "SmellSense AI",
      category: "AI & Computer Vision",
      description:
        "An AI-powered food freshness detection system that analyzes fruit images and classifies them as fresh or spoiled. The system combines deep learning predictions with HSV color-space analysis to improve freshness detection.",
      highlights: [
        "CNN-based image classification for food freshness detection",
        "Trained using a dataset of 15,000 fruit images",
        "ONNX model integration for efficient inference",
        "HSV-based spoilage analysis for additional validation",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "TensorFlow",
        "ONNX Runtime",
        "Computer Vision",
        "HSV Analysis",
      ],
      github:
        "https://github.com/RAJESH-230701255/SmellSenseAI",
      live:
        "https://smell-sense-ai.vercel.app",
    },
    {
      number: "03",
      title:
        "AI-Powered Enterprise Meeting Intelligence and Action Tracking Platform",
      category: "AI & Full-Stack Application",
      description:
        "A meeting intelligence platform that processes meeting audio or transcripts to generate summaries, key discussion points, decisions, and candidate action items. It integrates AI processing with a human-validation workflow to convert approved actions into trackable enterprise tasks.",
      highlights: [
        "Meeting audio transcription using OpenAI Whisper",
        "NLP preprocessing with spaCy and semantic embeddings using Sentence Transformers",
        "LLM-based generation of meeting summaries, decisions, and candidate action items",
        "Pydantic-based structured output validation and human approval of AI-generated actions",
        "Role-based dashboards, task tracking, and persistent storage of approved tasks",
        "Backend API validation with 41 tests passed and 0 failed",
      ],
      technologies: [
        "React.js",
        "Python",
        "FastAPI",
        "OpenAI Whisper",
        "OpenAI LLM API",
        "spaCy",
        "Sentence Transformers",
        "PostgreSQL",
        "SQLAlchemy",
        "Pydantic",
        "JWT",
        "RBAC",
      ],
      github:
        "https://github.com/RAJESH-230701255/meeting-intelligence-platform",
      live: null,
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-highlights">
                <h4>Key Features</h4>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link secondary-project-link"
                >
                  GitHub ↗
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary-project-link"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
