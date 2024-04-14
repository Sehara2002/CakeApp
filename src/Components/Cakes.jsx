import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"

const Cakes = () => {
  return (
    <div>
        <Navbar activePage = "cakes"/>
        <h1>Cake Page</h1>
        <FooterComponent activePage = "cakes"/>
    </div>
  )
}

export default Cakes