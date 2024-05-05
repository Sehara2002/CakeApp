import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"
import "./CSS/Cake.css"
import { Link } from "react-router-dom"

import wedImg from "./Assets/Images/wedding-cake.png"
import wedImg02 from "./Assets/Images/wedding-cake02.png"
import wedImg03 from "./Assets/Images/wedding-cake03.png"
import BriImg01 from "./Assets/Images/BirthdayCake-01.png"
import BriImg02 from "./Assets/Images/BirthdayCake-02.jpg"
import OtherImg01 from "./Assets/Images/Cupcake.png"
import OtherImg02 from "./Assets/Images/donut.png"
import OtherImg03 from "./Assets/Images/Butter-Cake-1.jpg"



const Cakes = (props) => {
  return (
    <div>
        <Navbar activePage = "cakes"/>
    
        <div id="menu">
        <h1 id="section"></h1>
            <div id="menu_row">
                <div id="menu_col">
                    <h2>Wedding Cake</h2>
                    <div class="box">
                        <div id="image">
                         <img src={wedImg} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg02} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 02</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={wedImg03} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 03</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                </div>

                <div id="menu_col">
                    <h2>Birthday Cake</h2>
                    <div class="box">
                        <div id="image">
                         <img src={BriImg01} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={BriImg02} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 02</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={BriImg01} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 03</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                </div>

                <div id="menu_col">
                    <h2>Other</h2>
                    <div class="box">
                        <div id="image">
                         <img src={OtherImg01} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 01</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={OtherImg02} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 02</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                    <div class="box">
                        <div id="image">
                         <img src={OtherImg03} alt="Cake Image"/>
                        </div>
                        <div class="pri">
                            <h3>Design 03</h3>
                            <h4>10$</h4>
                        </div>

                    </div>

                </div>
            </div>

        </div>
       
        <Link to='/orders'>
        <div className="customie-order">
            
            <button className="customie-order-btn">
                If you need a customize one ? 
            </button>
            
        </div>
        </Link>


        <FooterComponent activePage = "cakes"/>
    </div>
  )
}

export default Cakes