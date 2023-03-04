import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Nav from "../Nav"
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Home.module.css"

const Home = () => {
  return (
    <div className={globalStyles.parentDiv}>
      <Nav></Nav>
      <div className={[styles.mainPageGreetBox]}>
        <div className={[styles.greetWrapper]}>
          <h1 className={styles.greet}>Hey, I'm Alton and I Develop Web Apps.</h1>
          <h2 className={[styles.greet, globalStyles.mobileHide]}>Let's Build Something.</h2>
          <p className={[styles.greet, globalStyles.desktopHide]}>Feel free to browse my personal work below.</p>
        </div>
      </div>
      <Dropdown></Dropdown>
      <Footer></Footer>
    </div>
  )
}

export default Home
