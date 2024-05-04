import FooterComponent from "./FooterComponent";
import Navbar from "./Navbar";
import "./CSS/About.css";
import img1 from "./Assets/Images/ImageBar.png"

const About = () => {
  return (
    <div>
      <Navbar activePage="about" />
      <div className="about-container">
        <h1 className="main-topic-about">About</h1>
        <div className="p1">
          <p>
            Since 1979 with years of experience and commitment to our customers,
            a goal that has remained a constant is to strive for a synergy
            between traditions from our humble beginnings, and all that we have
            learnt in the years gone by. This formula, along with our
            uncompromising quality and taste, is what has strongly grounded us
            as an indisputable brand name in the food and beverage industry.
            <br /> <br />
            Fab is renowned for signature cakes and gateaux. This trademark can
            be traced back to 1979 when Chandra Madanayake launched her
            confectionary store in her front garden beside Galle Road. The
            outlet remains present to this day, still teeming with ever-eager
            customers.
            <br /> <br />
            In just over five years, subsequent to the demand that was
            generated, we were able to restructure and change our course, and
            specialize in the pastry business as well.
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={img1} alt="" />
      </div>
      <h1 className="main-topic-about">Food Safety Policy</h1>
      <div className="p1">
          <p>
          We at Fab Foods (Pvt) Ltd, strive to be recognized as a manufacturing best quality cakes, gateaux, pastries, bakery products, ready to eat meals, beverages & providing outdoor catering services.
          </p>
        </div><br/><br/><br/><br/><br/><br/>
        <h1 className="main-topic-about">Achievements</h1>
      <div className="p1">
          <p>
          Our awards and centerpiece achievements are accolades for all the love and hard work we put into bringing you the best. We have won many, both local and international awards; gold, silver and bronze awards for Petite Four, Structures and our French style pastries. Our A+ award from the Public Health Department is always an honor in place of our efforts in practicing the most hygienic conditions.
          </p>
        </div>
      <FooterComponent activePage="about" />
    </div>
  );
};

export default About;
