import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow.jsx"
import { lodgingList } from "../datas/lodgingList.js"

function Lodging() {
  const id = useParams()
  const lodgingPage = lodgingList.find((lodging) => lodging.id === id.id)
  return (
    <div className="page">
      {lodgingPage ? (
        <div className="slider-container">
          <Slideshow
            pictures={lodgingPage.pictures}
            index={lodgingPage.index}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Lodging
