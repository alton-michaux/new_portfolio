import React from "react";
import PropTypes from "prop-types";
import styles from "../css/Dropdown.module.css"

const Dropdown = () => {
  return (
    <>
      <div class="select-box pt-1 mx-auto">
        <select class="project-pulldown text-center" id="projects">
          <option value="" class="projects" disabled selected>Apps or Games?</option>
          <option value="Apps" class="projects">Apps</option>
          <option value="Games" class="projects">Games</option>
        </select>
      </div>
      <div class="canvas-grid mx-auto">
        <div class="canvas-div">
          <div class="project-display" id="app-div">
            <a
              class="project-link"

              href="https://gvomusicdiscovery.netlify.app/"
              target="blank"
            >
              <div class="project-blocks" id="apps">
                <img
                  src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/12/64723.jpg"
                  alt="spotify playlist app"
                  class="thumbnail"
                />
                <div class="text">Spotify Playlist App (JS)</div>
              </div></a
            >
            <a
              class="project-link"
              href="https://silly-reddit-stage.herokuapp.com/"
              target="blank"
            >
              <div class="project-blocks" id="apps">
                <img
                  src="https://helios-i.mashable.com/imagery/articles/06ce8F6eXTFuryavAjP7fuY/hero-image.fill.size_1200x1200.v1623369766.jpg"
                  alt="Reddit clone"
                  class="thumbnail"
                />
                <div class="text">Reddit Clone App (RoR)</div>
              </div></a
            >
            <a
              class="project-link"

              href="https://chorbee.herokuapp.com/parents/sign_in"
              target="blank"
            >
              <div class="project-blocks" id="apps">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDP7Dc75L_m9zazv1Kb4rskgQfP9FofKc3tg&usqp=CAU"
                  alt="chorbee web app"
                  class="thumbnail mx-auto"
                />
                <div class="text text-center list-items">Chorebee Web App (RoR)</div>
              </div></a
            >
          </div>
        </div>
        <div class="canvas-div">
          <div class="project-display" id="game-div">
            <a
              class="project-link"
              href="https://alton-michaux.github.io/Breakout-game-/"
              target="blank"
            >
              <div class="project-blocks-1" id="games">
                <img
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1415/6nNsvW4EX4wGbcIItg0paDEV.jpg?w=1024"
                  alt="breakout game"
                  class="thumbnail mx-auto"
                />
                <div class="text text-center list-items">Breakout Game (JS)</div>
              </div></a
            >
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown
