import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Footer from "../Footer";
import styles from "../../css/Home.module.css"

const Home = () => {
  return (
    <>
      <div class="grandparent container-fluid mx-auto">
        <div class="nav-bar container-fluid">
          <ul class="nav-list container-fluid d-inline-flex">
            <li class="list-items p-3 d-flex col-3 justify-content-around"><a href="Resume/resume.html">Experience</a></li>
            <li class="list-items p-3 d-flex col-3 justify-content-around"><a href="About/about.html">About</a></li>
            <li class="list-items p-3 d-flex col-3 justify-content-around"><a href="Contact/contact.html">Contact</a></li>
            <li class="list-items p-3 d-flex col-3 justify-content-around"><a href="./Docs/Alton_Michaux_Resume.docx" download>Resume</a></li>
          </ul>
        </div>
        <div class="main-page-greet-box container-fluid">
          <div class="greet-wrapper text-center">
            <h1 class="greet">Hey, I'm Alton and I Develop Web Apps.</h1>
            <h2 class="greet mobile-hide">Let's Build Something.</h2>
            <p class="greet desktop-hide">Feel free to browse my personal work below.</p>
          </div>
        </div>
      </div>
      <Dropdown></Dropdown>
      <Footer></Footer>
    </>
  )
}

export default Home
