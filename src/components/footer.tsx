

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <p className="mb-0">&copy; {year} Marteinn</p>
          </div>
          <div className="col-md-6 text-end">
            {/* Social media icons */}
            <a href="https://github.com/perujuice/marteinn.dev" target="_blank" rel="noopener noreferrer" className="text-light ms-3" title="Source Code">
              <i className="bi bi-code-slash" style={{fontSize: '1.5rem'}}></i>
            </a>
            <a href="https://github.com/perujuice" target="_blank" rel="noopener noreferrer" className="text-light ms-3" title="GitHub">
              <i className="bi bi-github" style={{fontSize: '1.5rem'}}></i>
            </a>
            <a href="https://www.linkedin.com/in/marteinn-hjaltason/" target="_blank" rel="noopener noreferrer" className="text-light ms-3" title="LinkedIn">
              <i className="bi bi-linkedin" style={{fontSize: '1.5rem'}}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
