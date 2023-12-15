import { Link, useLocation } from "react-router-dom"
import logoHeader from "../assets/logo-header.png"

function Header() {
  const location = useLocation()

  const isHome = location.pathname === "/"
  const isAbout = location.pathname === "/about"

  return (
    <div className="header">
      <img src={logoHeader} alt="Logo Kasa" className="logo-header" />
      <ul className="nav-header">
        <li className={isHome ? "active" : ""}>
          <Link to="/" className="li-header">
            Accueil
          </Link>
        </li>
        <li className={isAbout ? "active" : ""}>
          <Link to="/about" className="li-header">
            A propos
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
