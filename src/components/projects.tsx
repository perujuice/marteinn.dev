function Projects() {
    return (
    <section id="projects" className="py-5 bg-light">
        <div className="container">
            <h2 className="mb-4 text-center">Projects</h2>
            <div className="row">
            <div className="col-md-4">
                <div className="card shadow-sm">
                <img src="/project1.png" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">A short description of this project.</p>
                    <a href="https://github.com/perujuice" className="btn btn-primary">View Code</a>
                </div>
                </div>
            </div>
            {/* repeat for more projects */}
            </div>
        </div>
    </section>
    )
}
export default Projects