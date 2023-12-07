import { Link } from "react-router-dom"
import logoHeader from "../assets/logo-header.png"

function Header() {
  return (
    <div className="header">
      <img src={logoHeader} alt="Logo Kasa" className="logo-header" />
      <nav className="nav-header">
        <Link to="/" className="li-header">
          Accueil
        </Link>
        <Link to="/about" className="li-header">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
