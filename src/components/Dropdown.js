import React from "react";
import AppGrid from "./AppGrid.js"
import PropTypes from "prop-types";
import styles from "../css/Dropdown.module.css"

const Dropdown = () => {
  return (
    <>
      <div className={[styles.selectBox]}>
        <select className={[styles.projectPulldown]} id="projects">
          <option value="" className={styles.projects} disabled selected>Apps or Games?</option>
          <option value="Apps" className={styles.projects}>Apps</option>
          <option value="Games" className={styles.projects}>Games</option>
        </select>
      </div>
      <AppGrid></AppGrid>
    </>
  )
}

export default Dropdown
