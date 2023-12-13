import { useState } from "react"

const Slideshow = (data) => {
  console.log(data)
  const [index, setIndex] = useState(0)
  const length = data.pictures.length

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  if (length === 1) {
    return (
      <div className="slider">
        <img
          src={data.pictures[index]}
          alt={`Slide ${index}`}
          className="slider-img"
        />
      </div>
    )
  } else {
    return (
      <div className="slider">
        <button onClick={handlePrevious} className="button-left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="button-right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <img
          src={data.pictures[index]}
          alt={`Slide ${index}`}
          className="slider-img"
        />
        {length > 1 && (
          <span className="slide-number">
            {index + 1}/{length}
          </span>
        )}
      </div>
    )
  }
}

export default Slideshow
