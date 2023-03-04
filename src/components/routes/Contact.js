import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import styles from "../../css/Contact.module.css"

const Contact = () => {
  return (
    <>
      <Nav></Nav>
      <div class="main-page-greet-box container-fluid text-center">
        <h1 class="greet">Let's Connect.</h1>
        <div class="greet">
          <ul class="container">
            <li class="contact-items list-group-item"><a href="mailto:alton.michaux@yahoo.com" target="none">Email</a></li>
            <li class="contact-items list-group-item"><a href="https://github.com/alton-michaux" target="none">GitHub</a></li>
            <li class="contact-items list-group-item"><a href="https://www.linkedin.com/in/alton-michaux-114b941ba/" target="none">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Contact
