import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"

const About = () => {
  return (
    <div>
        <Navbar activePage="about"/>
        <h1>About</h1>
        <FooterComponent activePage="about"/>
    </div>
  )
}

export default About