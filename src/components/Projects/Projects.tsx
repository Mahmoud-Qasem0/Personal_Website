import React, { JSX, useContext } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import bookstore from "../../assets/projects/bookstore.png";
import ums from "../../assets/projects/ums.png";
import rentCars from "../../assets/projects/rentcars.png";
import simplePortfolio from "../../assets/projects/simple_portfolio1.png";
import dashboard from "../../assets/projects/dashboard.png";
import kasper from "../../assets/projects/Kasperdesktop.png";
import linkChain from "../../assets/projects/link-chain.png";
import github from "../../assets/projects/github.png";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const projectscard = [
  {
    img: bookstore,
    title: "Book Store App",
    desc: "A book store app to Buy books Stripe Payment",
    techStack: "React js, Redux Toolkit, TypeScript, MUI, Stripe Payment",
    demo: "https://bookstore2pp.netlify.app/",
    repo: "https://github.com/Mahmoud-Qasem0/React-js-Book_Store",
  },
  {
    img: ums,
    title: "User Management System",
    desc: "A user management system app built with complete CRUD",
    techStack: "React js, TypeScript, React Bootstrap, RESTful API",
    demo: "https://ums-2pp.netlify.app/",
    repo: "https://github.com/Mahmoud-Qasem0/User_Management_System",
  },
  {
    img: rentCars,
    title: "Rent Cars App",
    desc: "A car rental app built with React js, Bootstrap, RESTful API",
    techStack: "React js, Bootstrap, RESTful API",
    demo: "https://rentcars-2pp.netlify.app/",
    repo: "https://github.com/Mahmoud-Qasem0/Rent-Cars-react-app",
  },
  {
    img: simplePortfolio,
    title: "Nice Portfolio",
    desc: "A portfolio app built with HTML, CSS, JS",
    techStack: "HTML, CSS, JS",
    demo: "https://mahmoud-qasem0.github.io/Portfolio_Design/",
    repo: "https://github.com/Mahmoud-Qasem0/Portfolio_Design",
  },
  {
    img: dashboard,
    title: "Responsive Dashboard",
    desc: "A dashboard app built with HTML, CSS, JS",
    techStack: "HTML, CSS, JS",
    demo: "https://mahmoud-qasem0.github.io/Dashboard_Template/",
    repo: "https://github.com/Mahmoud-Qasem0/Dashboard_Template",
  },
  {
    img: kasper,
    title: "Graphic Design Agency",
    desc: "A graphic design agency app built with HTML, CSS, JS",
    techStack: "HTML, CSS, JS",
    demo: "https://mahmoud-qasem0.github.io/kasper_Template/",
    repo: "https://github.com/Mahmoud-Qasem0/kasper_Template",
  },
];

const Projects: React.FC = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <section className="container py-5" id="projects">
          <SectionHeading title="Projects" desc="Things I have built so far" />
        <div className="row my-4">
          {projectscard.map((project, i) => (
            <div className="col-12 col-md-6 col-lg-4 my-4" key={i}>
              <div
                className={`card shadow border-0 my-3 ${
                  darkMode && styles.darkCard
                }`}>
                <img
                  src={project.img}
                  className="card-img-top img-fluid"
                  alt={project.title}
                />
                <div className="card-body px-4">
                  <h5
                    className={`card-title fw-bold ${
                      darkMode && "text-white"
                    }`}>
                    {project.title}
                  </h5>
                  <p
                    className={`card-text ${
                      darkMode ? "text-white" : "text-black-50"
                    }`}>
                    {project.desc}
                  </p>
                </div>
                <ul className="list-group list-group-flush px-4">
                  <li
                    className={`${styles.tech} ${
                      darkMode && "text-white"
                    }`}>
                    Tech Stack: {project.techStack}
                  </li>
                </ul>
                <div className="card-body d-flex justify-content-between px-4 ">
                  <Link
                    to={project.demo}
                    className={`${darkMode ? "text-white" : "text-black"}`}>
                    <img src={linkChain} alt="linkChain" />{" "}
                    <span className="ms-1">Live Demo</span>
                  </Link>
                  <Link
                    to={project.repo}
                    className={`${darkMode ? "text-white" : "text-black"}`}>
                    <img src={github} alt="github" />{" "}
                    <span className="ms-1">View Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center my-2">
        <Link to="/projects"className={`shadow py-3 px-2 fw-bold rounded gradient-text ${styles.borderBlue}`}>Show All Projects</Link>
        </div> */}
      </section>
    </>
  );
};

export default Projects;
