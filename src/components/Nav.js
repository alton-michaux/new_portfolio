import styles from "../css/Nav.module.css"

const Nav = () => {
  return (
    <div className={[styles.navBar, 'container-fluid']}>
      <ul className={[styles.navList, "container-fluid", "d-inline-flex"]}>
        <li className={[styles.listItems, "p-3 d-flex", "col-3", "justify-content-around"]}><a href="/experience">Experience</a></li>
        <li className={[styles.listItems, "p-3 d-flex", "col-3", "justify-content-around"]}><a href="/about">About</a></li>
        <li className={[styles.listItems, "p-3 d-flex", "col-3", "justify-content-around"]}><a href="/contact">Contact</a></li>
        <li className={[styles.listItems, "p-3 d-flex", "col-3", "justify-content-around"]}><a href="./Docs/Alton_Michaux_Resume.docx" download>Resume</a></li>
      </ul>
    </div>
  )
}

export default Nav
