import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Nav from "../Nav"
import Footer from "../Footer";
import styles from "../../css/Home.module.css"

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <div className="main-page-greet-box container-fluid">
        <div className="greet-wrapper text-center">
          <h1 className="greet">Hey, I'm Alton and I Develop Web Apps.</h1>
          <h2 className="greet mobile-hide">Let's Build Something.</h2>
          <p className="greet desktop-hide">Feel free to browse my personal work below.</p>
        </div>
      </div>
      <Dropdown></Dropdown>
      <Footer></Footer>
    </>
  )
}

export default Home
