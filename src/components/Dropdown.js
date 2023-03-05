import AppGrid from "./AppGrid.js"
import React, { useRef } from "react";
import styles from "../css/Dropdown.module.css"

const Dropdown = () => {
  const gameRef = useRef(null)
  const appRef = useRef(null)

  const handleSelect = (selected) => {
    const dropdownValue = selected.target.value

    if (dropdownValue === "Apps") {
      appRef.current.style.display = "grid";
      appRef.current.style.padding = "20px";
      gameRef.current.style.display = "none";
    } else {
      gameRef.current.style.display = "grid";
      gameRef.current.style.padding = "20px";
      appRef.current.style.display = "none";
    }
  }
  return (
    <>
      <div className={[styles.selectBox]}>
        <select className={[styles.projectPulldown]} id="projects" onChange={selected => handleSelect(selected)}>
          <option value="" className={styles.projects} disabled defaultValue>Apps or Games?</option>
          <option value="Apps" className={styles.projects}>Apps</option>
          <option value="Games" className={styles.projects}>Games</option>
        </select>
      </div>
      <AppGrid
        gameRef={gameRef}
        appRef={appRef}
      ></AppGrid>
    </>
  )
}

export default Dropdown
