// Collapse.js
import React, { useState } from "react"

const Collapse = ({ title, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapse-container">
      <div onClick={handleToggle}>
        {isCollapsed ? (
          <div className="collapse">
            <div>{title}</div>
            <div>
              <i class="fa-solid fa-chevron-up"></i>
            </div>
          </div>
        ) : (
          <div className="collapse">
            <div>{title}</div>
            <div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="collapse-txt-container">
          <p className="collapse-txt">{text}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
