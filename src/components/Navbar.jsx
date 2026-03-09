function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 sticky-top">
      <a className="navbar-brand fw-bold" href="#">
        Akash Vijay
      </a>

      <div className="ms-auto d-flex align-items-center gap-3">
        <a href="#about" className="nav-link text-white">
          About
        </a>
        <a href="#projects" className="nav-link text-white">
          Projects
        </a>
        <a href="#contact" className="nav-link text-white">
          Contact
        </a>

        <button className="btn btn-light" onClick={toggleTheme}>
          {theme === "light" ? "🌙Dark Mode" : "☀️Light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
