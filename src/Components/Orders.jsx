import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"

const Orders = () => {
  return (
    <div>
        <Navbar activePage = "orders"/>
        <h1>Orders Page</h1>
        <FooterComponent activePage = "orders"/>
    </div>
  )
}

export default Orders