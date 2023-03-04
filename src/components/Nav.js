import styles from "../css/Nav.module.css"

const Nav = () => {
  return (
    <div className="nav-bar container-fluid">
      <ul className="nav-list container-fluid d-inline-flex">
        <li className="list-items p-3 d-flex col-3 justify-content-around"><a href="Resume/resume.html">Experience</a></li>
        <li className="list-items p-3 d-flex col-3 justify-content-around"><a href="About/about.html">About</a></li>
        <li className="list-items p-3 d-flex col-3 justify-content-around"><a href="Contact/contact.html">Contact</a></li>
        <li className="list-items p-3 d-flex col-3 justify-content-around"><a href="./Docs/Alton_Michaux_Resume.docx" download>Resume</a></li>
      </ul>
    </div>
  )
}

export default Nav
