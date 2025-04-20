import React, { JSX, useContext } from "react";
import { Container } from "react-bootstrap";
import profile from "../../assets/MahmoudQasem.png";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { BiArrowToBottom } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./hero.module.css";

const Hero: React.FC = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <Container
        id="home"
        className="d-flex align-items-center justify-content-between gap-5 vh-100">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-md-start">
          <h1 className={`${styles.userName} ${darkMode && "text-white"}`}>
            Hi 👋, My name is{" "}
            <span className="gradient-text">Mahmoud Qasem</span> I am Frontend React Developer
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="image d-flex align-items-center d-none d-md-block">
          <img
            decoding="async"
            src={profile}
            alt="User Photo"
            className={`img-fluid rounded-5 ${styles.userImage}`}
          />
        </motion.div>
      </Container>
      <Link className={`position-absolute ${styles.downArrow}`} to="/#skills">
        <BiArrowToBottom className="fs-2" />
      </Link>
    </>
  );
};

export default Hero;
