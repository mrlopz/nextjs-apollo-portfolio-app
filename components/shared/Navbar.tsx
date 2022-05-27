export const Navbar: React.FC = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
        <a className="navbar-brand mr-3 font-weight-bold" href="/">
          Lopes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mr-3">
              <a className="nav-link" href="/portfolios">
                Portfolios
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/categories">
                Categories
              </a>
            </li>
            <li className="nav-item mr-3">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/leonardo-lopes-dev/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Courses
              </a>
            </li>
            <li className="nav-item mr-3">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/leonardo-lopes-dev/details/skills/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cv
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/ask-me">
                Ask me
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                Sign Up
              </a>
            </li>
            <li className="nav-item mr-3">
              <a
                className="nav-link btn btn-success bg-green-2 bright"
                href="#"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
