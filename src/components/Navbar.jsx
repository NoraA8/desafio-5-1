import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid bg-danger text-white">
          <NavLink to="/" className="navbar-brand text-white">
            🏠Home
          </NavLink>
          <NavLink to="/contact" className="navbar-brand text-white">
            📒Contacto
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <h4>Happy Cake 🍰</h4>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
