function Projects() {
  const projects = [
    {
      title: "LeetCode Tracker",
      description: "React + Firebase app to track coding progress.",
      tech: "React, Firebase",
      github: "https://github.com/akasgj007/leetcode-tracker-solutions",
      demo: "https://leetcode-tracker-solutions.vercel.app/",
    },
    {
      title: "Her Brownie Website",
      description: "Bakery website with modern UI.",
      tech: "HTML, CSS, JS",
      github: "https://github.com/akasgj007/her-brownies-website",
      demo: "https://her-brownies-website.vercel.app/",
    },
    {
      title: "RedStore E-Commerce",
      description: "E-commerce UI built using HTML and CSS.",
      tech: "HTML, CSS",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-5 text-center">Projects</h2>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>

                <p className="card-text">{project.description}</p>

                <p className="text-muted">{project.tech}</p>

                <div className="d-flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn btn-dark btn-sm"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
