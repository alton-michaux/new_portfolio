import AppGrid from "./AppGrid.js"
import React, { useRef } from "react";
import styles from "../css/Dropdown.module.css"

const Dropdown = () => {
  const gameRef = useRef(null)
  const appRef = useRef(null)

  const handleSelect = (selected) => {
    const dropdownValue = selected.target.value

    if (dropdownValue === "JavaScript") {
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
        <select className={[styles.projectPulldown]} id="projects" defaultValue={"undefined"} onChange={selected => handleSelect(selected)}>
          <option value={"undefined"} className={styles.projects} disabled>JavaScript or Ruby?</option>
          <option value="JavaScript" className={styles.projects}>JavaScript</option>
          <option value="Ruby" className={styles.projects}>Ruby</option>
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
