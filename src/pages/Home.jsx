import { lodgingList } from "../datas/lodgingList"
import Banner from "../components/Banner"
import Card from "../components/Card"

function Home() {
  return (
    <div className="page">
      <Banner />
      <ul className="card-list">
        {lodgingList.map((data) => (
          <div key={data.id} className="card-container">
            <Card id={data.id} cover={data.cover} title={data.title} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Home
