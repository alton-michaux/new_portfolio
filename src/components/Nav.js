import styles from "../css/Nav.module.css"

const Nav = () => {
  return (
    <div className={[styles.navBar]}>
      <ul className={[styles.navList]}>
        <li className={[styles.listItems]}><a href="/experience">Experience</a></li>
        <li className={[styles.listItems]}><a href="/about">About</a></li>
        <li className={[styles.listItems]}><a href="/contact">Contact</a></li>
        <li className={[styles.listItems]}><a href="./Docs/Alton_Michaux_Resume.docx" download>Resume</a></li>
      </ul>
    </div>
  )
}

export default Nav
