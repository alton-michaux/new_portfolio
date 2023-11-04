import globalStyles from "./../css/App.module.css";
import styles from "./../css/LanguageImageContainer.module.css";
import rails from './../assets/Images/Ruby-on-rails-development.png'
import html from './../assets/Images/html-5.png'
import css from './../assets/Images/css3.png'
import javascript from './../assets/Images/js.png'
import react from './../assets/Images/react.png'

const LanguageContainer = () => {
  const listItems =
    [
      {
        src: rails,
        alt: "ruby on rails",
        key: 1
      }, {
        src: html,
        alt: "html5",
        key: 2
      }, {
        src: css,
        alt: "css",
        key: 3
      }, {
        src: javascript,
        alt: "javascript",
        key: 4
      }, {
        src: react,
        alt: "React JS",
        key: 5
      }
    ]
  return (
    <div className={styles.languageImgContainer}>
      {listItems.map((item) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            className={globalStyles.thumbnail}
            style={{height: "5em"}}
            key={item.key}
          />
        )
      })}
    </div>
  )
}

export default LanguageContainer
