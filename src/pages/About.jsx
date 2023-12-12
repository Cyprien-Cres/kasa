import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import { aboutList } from "../datas/aboutList"

function About() {
  return (
    <div className="page about-page">
      <Banner />
      <div>
        {aboutList.map(({ id, title, text }) => (
          <div key={id} className="collapse-container">
            <Collapse title={title} text={text} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
