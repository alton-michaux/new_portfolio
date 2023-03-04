import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Contact.module.css"

const Contact = () => {
  return (
    <>
      <Nav></Nav>
      <div className={globalStyles.mainPageGreetBox}>
        <h1 className={globalStyles.greet}>Let's Connect.</h1>
        <div className={globalStyles.greet}>
          <ul className="container">
            <li className={[styles.contactItem]}><a href="mailto:alton.michaux@yahoo.com" target="none">Email</a></li>
            <li className={[styles.contactItem]}><a href="https://github.com/alton-michaux" target="none">GitHub</a></li>
            <li className={[styles.contactItem]}><a href="https://www.linkedin.com/in/alton-michaux-114b941ba/" target="none">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Contact
