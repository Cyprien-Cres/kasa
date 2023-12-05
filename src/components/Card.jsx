import "../styles/Card.css"

function Card({ title, cover }) {
  return (
    <li className="card">
      <img src={cover} alt="title" className="img-card" />
      <div className="title-card">{title}</div>
    </li>
  )
}

export default Card
