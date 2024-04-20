import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"
import img6 from "./Assets/Images/backgroundcake.png"

const Contact = () => {
  return (
    <div>
        <Navbar activePage = "contact"/>
        <div className="divider">
          <div className="left">
            <img src={img6} alt="seharacake"/>
          </div>
          <div className="right">
            <h1>Butter cake</h1>
          </div>
        </div>
        <FooterComponent activePage = "contact"/>
    </div>
  )
}

export default Contact