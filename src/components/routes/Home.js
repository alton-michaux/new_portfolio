import { useEffect } from "react";
import PropTypes from "prop-types";
import Nav from "../Nav"
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Home.module.css"
import Dropdown from "../Dropdown";
import BootstrapComponent from "../BootstrapExperimentalComp";

const Home = ({ page, setPage }) => {
  useEffect(() => {
    setPage("Home")
  }, [setPage, page])

  return (
    <div className={globalStyles.parentDiv}>
      <Nav
        page={page}
      ></Nav>
      <div className={globalStyles.mainPageGreetBox}>
        <div className={styles.greetWrapper}>
          <h1 className={globalStyles.greet}>Hey, I'm Alton and I Develop Web Apps.</h1>
          <h2 className={[globalStyles.greet, globalStyles.mobileHide].join(' ')}>Let's Build Something.</h2>
          <p className={[globalStyles.greet, globalStyles.desktopHide].join(' ')}>Feel free to browse my personal work below.</p>
        </div>
      </div>
      <Dropdown></Dropdown>
      {/* <BootstrapComponent></BootstrapComponent> */}
      <Footer></Footer>
    </div>
  )
}

Home.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Home
