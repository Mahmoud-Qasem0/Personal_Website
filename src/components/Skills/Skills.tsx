import React, { JSX, useContext } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import tailwind from "../../assets/skills/tailwind.png";
import sass from "../../assets/skills/sass.png";
import git from "../../assets/skills/git.png";
import greensockDark from "../../assets/skills/greensock-dark.png";
import vscode from "../../assets/skills/vscode.png";
import github from "../../assets/skills/github.png";
import githubDark from "../../assets/skills/github-dark.png";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const skillsIcons = [
  {
    link: html,
    alt: "html icon",
  },
  {
    link: css,
    alt: "css icon",
  },
  {
    link: js,
    alt: "js icon",
  },
  {
    link: react,
    alt: "react icon",
  },
  {
    link: redux,
    alt: "redux icon",
  },
  {
    link: bootstrap,
    alt: "bootstrap icon",
  },
  {
    link: tailwind,
    alt: "tailwind icon",
  },
  {
    link: sass,
    alt: "sass icon",
  },
  {
    link: git,
    alt: "git icon",
  },
  {
    link: vscode,
    alt: "vscode icon",
  },
  {
    link: github,
    alt: "github icon",
  },
];

const Skills: React.FC = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <section className="container py-5" id="skills">
        <SectionHeading
          title="My Tech Stack"
          desc=" Technologies I have been working with recently"
        />
        <div className="skillsbox row text-center">
          {skillsIcons.map((skill, i) => (
            <div className="box col-6 col-sm-4 col-md-3 col-lg-2 my-3" key={i}>
              <img
                src={
                  darkMode && skill.alt === "github icon"
                    ? githubDark
                    : darkMode && skill.alt === "greensock icon"
                    ? greensockDark
                    : skill.link
                }
                alt={skill.alt}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
