import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"

const Contact = () => {
  return (
    <div>
        <Navbar activePage = "contact"/>
        <h1>This is Contact us Page</h1>
        <FooterComponent activePage = "contact"/>
    </div>
  )
}

export default Contact