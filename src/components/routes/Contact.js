import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css";
import styles from "../../css/Contact.module.css";

const Contact = ({ page, setPage }) => {
  setPage("Contact")
  const listItems =
    [
      {
        href: "mailto:alton.michaux@yahoo.com",
        text: "Email",
        key: 1
      }, {
        href: "https://github.com/alton-michaux",
        text: "GitHub",
        key: 2
      }, {
        href: "https://www.linkedin.com/in/alton-michaux-114b941ba/",
        text: "LinkedIn",
        key: 3
      }
    ]
  return (
    <div className={globalStyles.parentDiv}>
      <Nav
        page={page}
      ></Nav>
      <div className={globalStyles.mainPageGreetBox}>
        <h1 className={globalStyles.greet}>Let's Connect.</h1>
        <div className={globalStyles.greet}>
          <ul className={styles.contactItems}>
            {listItems.map((item) => {
              return (
                <li key={item.key} className={styles.contactItem}><a href={item.href} target="none">{item.text}</a></li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

Contact.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Contact
