function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-4">Projects</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">LeetCode Tracker</h5>
              <p className="card-text">
                React + Firebase app to track coding progress.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Her Brownie Website</h5>
              <p className="card-text">
                Bakery website built using modern frontend tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
