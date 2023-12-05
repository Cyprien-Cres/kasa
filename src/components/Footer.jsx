import logoFooter from "../assets/logo-footer.png"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="Logo Kasa" className="logo-footer" />
      <p className="copyrights">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
