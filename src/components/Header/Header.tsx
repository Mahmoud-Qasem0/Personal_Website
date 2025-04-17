import React, { JSX, useContext} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import github from "../../assets/navbar/github.png";
import linkedin from "../../assets/navbar/linkedin.png";
import x from "../../assets/navbar/x.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const navItems = [
  { title: "Home", path: "#home" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
];
const socialLinks = [
  { src: github, alt: "github",link: "https://github.com/Mahmoud-Qasem0" },
  { src: linkedin, alt: "linkedin", link: "https://www.linkedin.com/in/mahmoud-qasem-64602528b/" },
  { src: x, alt: "x", link: "/" },
];

const Header: React.FC = (): JSX.Element => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container">
          <Link className="navbar-brand gradient-text fw-bold" to="/">
            Coding way
          </Link>
          <ul className="d-none d-md-flex align-items-center list-unstyled gap-4">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={`/${item.path}`}
                  className={`text-decoration-none ${
                    darkMode ? `text-white` : `text-secondary`
                  } ${location.hash === item.path ? "gradient-text fw-bold" : ""}`}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <ul className="d-none d-md-flex align-items-center list-unstyled gap-3">
                {socialLinks.map((link, i) => (
                  <li key={i}>
                    <NavLink to={link.link}>
                      <img src={link.src} alt={link.alt} width={20} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li onClick={toggleTheme}>
              {darkMode ? (
                <MdOutlineDarkMode size={25} />
              ) : (
                <MdOutlineLightMode size={25} />
              )}
            </li>
          </ul>
          <div className="d-flex d-block d-md-none align-items-center gap-4">
            {darkMode ? (
              <MdOutlineDarkMode size={25} onClick={toggleTheme} />
            ) : (
              <MdOutlineLightMode size={25} onClick={toggleTheme} />
            )}
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <span className={`navbar-toggler-icon`}></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title gradient-text fw-bold"
                id="offcanvasNavbarLabel">
                Coding way
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {navItems.map((item, i) => (
                  <li key={i} className="nav-item">
                    <NavLink
                      to={`/${item.path}`}
                      className={
                        `text-secondary ${
                          location.hash === item.path ? "gradient-text fw-bold" : ""
                        }`
                      }
                      aria-current="page">
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
