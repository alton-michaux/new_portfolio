import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import PropTypes from "prop-types";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/About.module.css"
import LanguageContainer from "../LanguageContainer";

const About = () => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.aboutMeGreetBox}>
        <div className={styles.aboutMeTextBox}>
          <p className={globalStyles.greet}>As a back end developer, I'm knowledgable in Object Oriented Programing: specifically Ruby on Rails techonologies.
            This has allowed me to gain experience with MVC concepts, ORM and RESTful APIs.
            I also have experience in front end development with HTML, CSS, and JavaScript.
            As a self-motivated individual who is always looking to learn new skills and improve my current ones, it gives me a sense of pride to be able to provide efficient business solutions to my clients/employers.
          </p>
        </div>
        {/* <LanguageContainer></LanguageContainer> */}
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
