import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Card({ title, cover }) {
  return (
    <Link to="/lodging" className="card">
      <img src={cover} alt="title" className="img-card" />
      <div className="title-card">{title}</div>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default Card
