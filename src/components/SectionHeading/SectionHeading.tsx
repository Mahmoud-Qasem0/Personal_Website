import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { motion } from "framer-motion";
import styles from "./sectionheading.module.css";

interface PropsType {
  title: string;
  desc: string;
}

const SectionHeading: React.FC<PropsType> = ({ title, desc }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <motion.div
        className={`${styles.heading} text-center ${darkMode && "text-white"}`}>
        <h3 className="fw-bold">{title}</h3>
        <p>{desc}</p>
      </motion.div>
    </>
  );
};

export default SectionHeading;
