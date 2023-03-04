import React from "react";
import AppGrid from "./AppGrid.js"
import PropTypes from "prop-types";
import styles from "../css/Dropdown.module.css"

const Dropdown = () => {
  return (
    <>
      <div className="select-box pt-1 mx-auto">
        <select className="project-pulldown text-center" id="projects">
          <option value="" className="projects" disabled selected>Apps or Games?</option>
          <option value="Apps" className="projects">Apps</option>
          <option value="Games" className="projects">Games</option>
        </select>
      </div>
      <AppGrid></AppGrid>
    </>
  )
}

export default Dropdown
