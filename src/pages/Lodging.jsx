import { useParams, useNavigate, Navigate } from "react-router-dom"
import { lodgingList } from "../datas/lodgingList.js"
import Slideshow from "../components/Slideshow.jsx"
import Tags from "../components/Tags.jsx"
import Rating from "../components/Rating.jsx"
import Host from "../components/Host.jsx"
import Collapse from "../components/Collapse.jsx"

function Lodging() {
  const id = useParams()
  const lodgingPage = lodgingList.find((lodging) => lodging.id === id.id)
  const lodgingTag = lodgingPage.tags.map((tags, index) => {
    return <Tags key={index} tags={tags} />
  })
  const lodgingEquipment = lodgingPage.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
  })

  return (
    <div className="page lodging-page">
      {lodgingPage ? (
        <div>
          <div className="slider-container">
            <Slideshow
              pictures={lodgingPage.pictures}
              index={lodgingPage.index}
            />
          </div>
          <div className="lodging-content">
            <div>
              <div>
                <h1 className="title-lodging-page">{lodgingPage.title}</h1>
              </div>
              <div>
                <p className="location-lodging-page">{lodgingPage.location}</p>
              </div>
              <div className="tag-container">{lodgingTag}</div>
            </div>
            <div className="rating-and-host">
              <div className="rating-container">
                <Rating score={lodgingPage.rating} />
              </div>
              <div className="host-container">
                <Host
                  hostName={lodgingPage.host.name}
                  hostPicture={lodgingPage.host.picture}
                />
              </div>
            </div>
          </div>
          <div className="lodging-collapse">
            <Collapse title="Description" text={lodgingPage.description} />
            <Collapse title="Équipements" text={lodgingEquipment} />
          </div>
        </div>
      ) : (
        <Navigate to="/404" replace={true} />
      )}
    </div>
  )
}

export default Lodging
