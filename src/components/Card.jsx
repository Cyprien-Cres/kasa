import { Link } from "react-router-dom"

function Card({ id, title, cover }) {
  return (
    <Link to={`/lodging/${id}`} className="card">
      <img src={cover} alt="title" className="img-card" />
      <div className="title-card">{title}</div>
    </Link>
  )
}

export default Card
