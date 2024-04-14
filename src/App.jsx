import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import SpecialEvents from "./Components/SpecialEvents"
import FooterComponent from "./Components/FooterComponent"


const App = () => {
  return (
    <div>
      <Navbar activePage = "home"/>
      <Banner/>
      <SpecialEvents/>
      <FooterComponent/>
    </div>
  )
}

export default App