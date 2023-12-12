import { lodgingList } from "../datas/lodgingList.js"
import Banner from "../components/Banner"
import Card from "../components/Card"

function Home() {
  return (
    <div className="page">
      <Banner />
      <ul className="card-list">
        {lodgingList.map(({ id, cover, title }) => (
          <div key={id} className="card-container">
            <Card cover={cover} title={title} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Home
