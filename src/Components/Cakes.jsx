import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"
import "./CSS/Cake.css"

import wedImg from "./Assets/Images/wedding-cake.png"
import wedImg02 from "./Assets/Images/wedding-cake02.png"
import wedImg03 from "./Assets/Images/wedding-cake03.png"

const Cakes = (props) => {
  return (
    <div>
        <Navbar activePage = "cakes"/>
    
        <div id="menu">
            <h1 id="section">Menu</h1>
            <div id="menu_row">
                <div id="menu_col">
                    <h2>Wedding Cake</h2>
                    <div class="box">
                        <div id="image">
                         <img src={wedImg} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg02} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg03} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                </div>

                <div id="menu_col">
                    <h2>Birthday Cake</h2>
                    <div class="box">
                        <div id="image">
                         <img src={wedImg} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg02} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg03} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                </div>

                <div id="menu_col">
                    <h2>Other</h2>
                    <div class="box">
                        <div id="image">
                         <img src={wedImg} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg02} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg03} alt="Cake Image"/>
                        </div>
                        <div>
                            <h3>Tasty Dish 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                </div>
            </div>

        </div>
       
        



        <FooterComponent activePage = "cakes"/>
    </div>
  )
}

export default Cakes