import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Experience.module.css"

const Experience = () => {
  return (
    <>
      <Nav></Nav>
      <div class={globalStyles.mainPage}>
        <div class={globalStyles.mainPageGreetBox}>
          <h1 class={globalStyles.greet}>
            Professional Experience
          </h1>
          <p class={globalStyles.greet}>Code The Dream Labs (<i>October 2021 - present</i>)</p>
          <p class={[globalStyles.greet, globalStyles.text]}><a class="list-group-item-action" href="https://labs.codethedream.org/portfolios/alton-michaux" target="blank">Backend Developer</a> on the <a class="list-group-item-action" href="https://sites.google.com/view/vamosprojectwiki/home" target="none">Vamos app</a></p>
          <ul class={[styles.taskList, globalStyles.greet]}> A short list of my duties and contributions to Vamos include:
            <li class={styles.taskItem}> Optimize/Maintain API infrastructure </li>
            <li class={styles.taskItem}> Develop new features </li>
            <li class={styles.taskItem}> Write tests using RSPEC and Capybara </li>
            <li class={styles.taskItem}> Write documentation </li>
            <li class={styles.taskItem}> Work with the team to implement/debug features </li>
            <li class={styles.taskItem}> Actively contribute to QA process </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Experience
