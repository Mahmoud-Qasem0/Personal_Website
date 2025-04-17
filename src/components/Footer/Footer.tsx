import React, { JSX, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import styles from "./footer.module.css";
const siteSections = [
  { title: "Home", path: "#home" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
];

const Footer: React.FC = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <footer
        className={`border-top pt-4 my-4 container d-flex align-items-center justify-content-between flex-md-row flex-column text-decoration-none ${
          darkMode ? `text-white` : `text-secondary`
        }`}>
        <ul className="d-flex align-items-center list-unstyled gap-4">
          {siteSections.map((item, i) => (
            <li key={i}>
              <Link
                to={`/${item.path}`}
                className={`text-decoration-none ${
                  darkMode ? `text-white` : `text-secondary`
                }`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>
          Developed by <span className="gradient-text">Mahmoud Qasem</span> with{" "}
          <span className="gradient-text">Love</span> &{" "}
          <span className="gradient-text">Tea</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
