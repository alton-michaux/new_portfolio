import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import styles from "../../css/Experience.module.css"

const Experience = () => {
  return (
    <>
      <Nav></Nav>
      <div class="main-page">
        <div class="main-page-greet-box">
          <h1 class="greet">
            Professional Experience
          </h1>
          <p class="greet">Code The Dream Labs (<i>October 2021 - present</i>)</p>
          <p class="greet text"><a class="list-group-item-action" href="https://labs.codethedream.org/portfolios/alton-michaux" target="blank">Backend Developer</a> on the <a class="list-group-item-action" href="https://sites.google.com/view/vamosprojectwiki/home" target="none">Vamos app</a></p>
          <ul class="task-list greet"> A short list of my duties and contributions to Vamos include:
            <li class="task-item"> Optimize/Maintain API infrastructure </li>
            <li class="task-item"> Develop new features </li>
            <li class="task-item"> Write tests using RSPEC and Capybara </li>
            <li class="task-item"> Write documentation </li>
            <li class="task-item"> Work with the team to implement/debug features </li>
            <li class="task-item"> Actively contribute to QA process </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Experience
