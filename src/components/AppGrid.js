import globalStyles from "../css/App.module.css"
import navStyles from "../css/Nav.module.css"
import styles from "../css/AppGrid.module.css"
import PropTypes from "prop-types"

const AppGrid = ({gameRef, appRef}) => {
  const appListItems =
    [
      {
        href: "https://gvomusicdiscovery.netlify.app/",
        imgSrc: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/12/64723.jpg",
        imgAlt: "spotify playlist app",
        text: "Spotify Playlist App (JS)",
        key: 1
      }, {
        href: "https://silly-reddit-stage.herokuapp.com/",
        imgSrc: "https://helios-i.mashable.com/imagery/articles/06ce8F6eXTFuryavAjP7fuY/hero-image.fill.size_1200x1200.v1623369766.jpg",
        imgAlt: "Reddit clone",
        text: "Reddit Clone App (RoR)",
        key: 2
      }, {
        href: "https://chorbee.herokuapp.com/parents/sign_in",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDP7Dc75L_m9zazv1Kb4rskgQfP9FofKc3tg&usqp=CAU",
        imgAlt: "chorbee web app",
        text: "Chorebee Web App (RoR)",
        key: 3
      }
    ]

  const gameListItems =
    [
      {
        href: "https://alton-michaux.github.io/Breakout-game-/",
        imgSrc: "https://image.api.playstation.com/vulcan/ap/rnd/202009/1415/6nNsvW4EX4wGbcIItg0paDEV.jpg?w=1024",
        imgAlt: "breakout game",
        text: "Breakout (JS)",
        key: 1
      }
    ]

  return (
    <div className={styles.canvasGrid}>
      <div className={styles.canvasDiv}>
        <div className={[styles.projectDisplay]} id="appDiv" ref={appRef}>
          {appListItems.map((item) => {
            return (
              <a
                className={styles.projectLink}

                href={item.href}
                target="blank"
              >
                <div className={styles.appBlock} id="apps">
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className={globalStyles.thumbnail}
                  />
                  <div className={item.key === 3 ? [globalStyles.text, navStyles.listItems].join(' ') : globalStyles.text}>{item.text}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className={styles.canvasDiv}>
        <div className={styles.projectDisplay} id="gameDiv" ref={gameRef}>
          {gameListItems.map((item) => {
            return (
              <a
                className={styles.projectLink}
                href={item.href}
                target="blank"
              >
                <div className={[styles.gameBlock, styles.appBlock].join(' ')} id="games">
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className={globalStyles.thumbnail}
                  />
                  <div className={[globalStyles.text, navStyles.listItems].join(' ')}>{item.text}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

AppGrid.propTypes = {
  appRef: PropTypes.object.isRequired,
  gameRef: PropTypes.object.isRequired
}

export default AppGrid
