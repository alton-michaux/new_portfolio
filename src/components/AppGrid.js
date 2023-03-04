import styles from "../css/AppGrid.module.css"

const AppGrid = () => {
  return (
    <div className={styles.canvasGrid}>
      <div className={styles.canvasDiv}>
        <div className={styles.projectDisplay} id="app-div">
          <a
            className={styles.projectLink}

            href="https://gvomusicdiscovery.netlify.app/"
            target="blank"
          >
            <div className={styles.projectBlock} id="apps">
              <img
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/12/64723.jpg"
                alt="spotify playlist app"
                className="thumbnail"
              />
              <div className={styles.text}>Spotify Playlist App (JS)</div>
            </div></a
          >
          <a
            className={styles.projectLink}
            href="https://silly-reddit-stage.herokuapp.com/"
            target="blank"
          >
            <div className={styles.projectBlock} id="apps">
              <img
                src="https://helios-i.mashable.com/imagery/articles/06ce8F6eXTFuryavAjP7fuY/hero-image.fill.size_1200x1200.v1623369766.jpg"
                alt="Reddit clone"
                className="thumbnail"
              />
              <div className={styles.text}>Reddit Clone App (RoR)</div>
            </div></a
          >
          <a
            className={styles.projectLink}

            href="https://chorbee.herokuapp.com/parents/sign_in"
            target="blank"
          >
            <div className={styles.projectBlock} id="apps">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDP7Dc75L_m9zazv1Kb4rskgQfP9FofKc3tg&usqp=CAU"
                alt="chorbee web app"
                className={styles.thumbnail}
              />
              <div className={[styles.text, styles.listItems]}>Chorebee Web App (RoR)</div>
            </div></a
          >
        </div>
      </div>
      <div className={styles.canvasDiv}>
        <div className={styles.projectDisplay} id="game-div">
          <a
            className={styles.projectLink}
            href="https://alton-michaux.github.io/Breakout-game-/"
            target="blank"
          >
            <div className={styles.projectBlockOne} id="games">
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1415/6nNsvW4EX4wGbcIItg0paDEV.jpg?w=1024"
                alt="breakout game"
                className="thumbnail mx-auto"
              />
              <div className={[styles.text, styles.listItems]}>Breakout Game (JS)</div>
            </div></a
          >
        </div>
      </div>
    </div>
  )
}

export default AppGrid
