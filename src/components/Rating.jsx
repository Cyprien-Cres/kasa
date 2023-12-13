import Fullstar from "../assets/fullstar.png"
import Emptystar from "../assets/emptystar.png"

const Rating = ({ score }) => {
  const maxStars = 5

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= maxStars; i++) {
      const starType = i <= score ? Fullstar : Emptystar
      stars.push(<img key={i} src={starType} alt={starType} className="star" />)
    }
    return stars
  }

  return <div className="rating">{renderStars()}</div>
}

export default Rating
