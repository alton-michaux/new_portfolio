import PropTypes from "prop-types";
import Nav from "../Nav"
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Home.module.css"

const PageUnknown = ({ page, setPage }) => {
  setPage("Unknown")
  return (
    <div className={globalStyles.parentDiv}>
      <Nav
        page={page}
      ></Nav>
      <div className={globalStyles.mainPageGreetBox}>
        <div className={styles.greetWrapper}>
          <h1 className={globalStyles.greet}>No Page Found.</h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

PageUnknown.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default PageUnknown
