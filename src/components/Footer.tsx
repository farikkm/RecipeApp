import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img
          style={{
            width: "50px",
          }}
          src="/logo.png"
          alt=""
        />
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-muted">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className="nav-link px-2 text-muted">
            Search
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
