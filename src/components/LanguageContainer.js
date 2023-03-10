import globalStyles from "../css/App.module.css";
import styles from "../css/LanguageImageContainer.module.css";

const LanguageContainer = () => {
  const listItems =
    [
      {
        src: "https://www.iglobsyn.com/wp-content/uploads/2019/09/Ruby-on-rails-development.png",
        alt: "ruby on rails",
        key: 1
      }, {
        src: "https://images.vexels.com/media/users/3/166382/isolated/preview/1ad81b62ad0ec81a584bc22016fd016f-html-programming-language-flat.png",
        alt: "html5",
        key: 2
      }, {
        src: "https://www.coherentsolutions.com/wp-content/uploads/2020/08/css-logo-white.png",
        alt: "css",
        key: 3
      }, {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///+qqqr7+/vQ0NDLy8teXl5oaGjW1tbu7u5kZGTZ2dnx8fHT09PIyMi3t7ePj48gICAODg5ubm53d3c1NTXi4uJNTU2hoaG9vb2ysrLm5uZbW1vAwMBzc3OWlpaGhoZGRkYtLS2BgYE/Pz8cHBweHh4oKChLS0sVFRVBQUGcnJxj+1INAAAGIklEQVR4nO2ca3uqOhBGQaq7tlTwgncram3r9v//v6P2CswkE5Qk+zzv+lqlWRJymZkQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAw2G73fYHrlvRCNnwOGuPw0+icXs+2vhnumtVmf8VfHEz/Xb7TXc18kyyRzWzo/3a6JH63ufNnL1YaLiYWoajmPe70M6sNF5EDcPOQuN3pmWp/XrMDROB34nxxpaCBlPDF8kN/GBoz0KFoeGD2O9EatGDx8zw2UQwDNc2TTiMDDtmgmGYWzThMDHMIlPDcGTXhoI0fKA/2zUWDMOlXR0CA0PhNFEk7lsWqiA3NH4IP+jZNirTFhuSC20BuV2hCmLDUU3BMHyzLlVAbFj3Fp6W4dalCkgNJ/UF/5F7OGMNxq30eZgfe/SOqvvHvlMRqSE32c9/thDPxK7Yg02U0HBJ+8WTwqd2pd9hPKlcyD5CwzUtWA7JvBXGIz/2FncyQ3JhQC3JfnrqoyeRDNKwOjqQS9IVcb3B5yejvPGmC5EZDsiBktzEby5/unO+HP1GZkjum+IDecXj6QZ6sGn6RmZIzvdd5pLxyp8bGEgNycliwVzSkxHmiysMuXvoGVf00sirzsjyJDJ8IRdtTLDDM2SGr+RscXTRYGNkhvSMX1m0eYnQ8J76WDhz0GBjhIZT0jCcOmixKeTNqRpyUZq5gyYbIjQMGMNw4cMWUInUkM9qJ1v7rTZBapiyhmE0f7XfbjmkITGVD3jDEzNJ9YYjpIbBSqkY3juPqXGQzxdlqA2YLlI/FwBiQzpmVSBqOQ7+ksgN/2oNT9y5zxeWkRsGLYli+OhTBOOMgaE0B9zd2VXQYGK4kRmeHH26jyaGBjnEhT/Po5EhE9wnWfmymDMzNFH0JeptaBjs5IrhkxehKlPDYGJQVRP5ULxHpufV9aUmdTUeVLbVMAyGBtVfiR0NBXUMpcubC84rhuoZBu/6dbgvijUNg2CpqNYv4jhaRbZTYmjg6Daff4Xhaeag0/sVnMbjrjIMgqylO3pxhss0WoGM08gNg+CQCqr3XfZTcSRKwVLbWSOHIRxh3kKDtrM6THDcxvDcWZXrVYcZcTLLXW/BvFPdR3fhVNLwuebFUn7B6m5lc1PD4JUtQ3XXTUnDKwJJ7A7Z2alL0vCacOCE6anOQow3N+QSHM5WbrfupQEXrXIWQm3AkK4JdzbnkyvvKw3JCICzXSK5A1bMFv1cf03yHKazgA251uIXIHkkuMHkWEOVTFuBfGa4pMPyslHS7hNe7BseEvbsEdUYZmTPPqNPY92/e6eu2WiF2HlJzGz5+qQhdZT+8DN+6AYNMkXV4HOYXSYEJpBAH5sk6pgLGwfNlp0Mijd3Puir5o6ej8hCoO6+/LFlachVL3rIXy2/hQzBw89YST5cZBCj/KBl1SiFSpGuY2xm1fb2u8yH2r/QB7aeBC3mlyjMeeFGClFKG9Kn6ifomG7hkeF27veVrvwBs7doIqA4qUT57sszGZMn+z2nKzKiR2pi5JLEtx9KD3Pi33QLD8OAK1UrbFYVwZd4WirY6+/Y2OnN4zTcW4CS79Yf1lzbiw+sOq39ePxa/7x20jb/a9y86F2Rpo17rel0OlcczS7NXNr8SxTFcaRJmt68kw51rVJRGtfp0ySG3L7+lD49IKIy6pmUXzA0cCR/U781eeVizFEEA5o4zkYNpSJi4mLCNCFLM2vSOi+TOZNTF7ui04eNpQ9rvuaBbs1B/oYvgvdmDFXnBxQwM/P2igG1ucKoOu8EYje3/bq9vtFgt/kAoQhQ7MlMo568QUFJeX2RrnKLY1AI9UPTeUP+nSsUsabotSOpuyiwaP5ct0HFazim3yDwG8O538q7Wx7EI4Qo3JcZ9Io7S4ehBrLVjfhFD5nwcby3WMuekfmlIkZ5k51+Q2X7RbuTmXLCjhLTAWGbPvGjTrfnIle4zdnpbLyuFQbbL9ft6jZ63E6Xzuqf9sOk0rvi3vGq8XyfdfLpPJmtZsm8lf55YeJvNtkO02krSWZJ67h+9uql1AAAAAAAAAAAwP+W/wA5rEutfvF8eAAAAABJRU5ErkJggg==",
        alt: "javascript",
        key: 4
      }, {
        src: "https://www.pngfind.com/pngs/m/430-4309307_react-js-transparent-logo-hd-png-download.png",
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
