import { Link } from "react-router-dom";
import github from "../../assets/navbar/github.png";
import linkedin from "../../assets/navbar/linkedin.png";
import x from "../../assets/navbar/x.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const socialLinks = [
  { src: github, alt: "github" },
  { src: linkedin, alt: "linkedin" },
  { src: x, alt: "x" },
];

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <nav className="contact my-5">
        <div className="container d-flex justify-content-md-between flex-column flex-md-row align-items-center">
          <Link className="fs-4 gradient-text fw-bold my-4" to="/">
            Mahmoud Qasem
          </Link>
          <ul className="d-flex align-items-center flex-column flex-md-row list-unstyled gap-4">
            <li>
              <Link
                to="tel:+0201095140380"
                className={`text-decoration-none ${
                  darkMode ? `text-white` : `text-secondary`
                }`}>
                +0201095140380
              </Link>
            </li>
            <li>
              <Link
                to="mailto:+0201095140380"
                className={`text-decoration-none ${
                  darkMode ? `text-white` : `text-secondary`
                }`}>
                mahmoudqasem1@hotmail.com
              </Link>
            </li>
            <li>
              <ul className="d-flex align-items-center list-unstyled gap-3">
                {socialLinks.map((link, i) => (
                  <li key={i}>
                    <Link to="/">
                      <img src={link.src} alt={link.alt} width={20} />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Contact;
